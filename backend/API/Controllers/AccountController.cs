using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Domain;
using API.DTOs;
using Oracle.ManagedDataAccess.Client;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private OracleCommand _command { get; set; }
        private string _commandString { get; set; }
        private OracleConnection _connection { get; set; }
        private string _connectionString { get; set; }
        
        private readonly SignInManager<Cliente> _signInManager;
        public AccountController(SignInManager<Cliente> signInManager)
        {
            _signInManager = signInManager;
            //_connectionString = "User Id=UMGPDB1;Password=developer;Data Source=//192.168.0.150:1521/stigtpdb2";
            _connectionString = "User Id=UMGPDB1;Password=UMGPDB1;Data Source=//10.0.2.4:1521/umgpdb1.umg";
            _connection = new OracleConnection(_connectionString);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto){
            Console.WriteLine("correo: " + loginDto.correo + "password: " + loginDto.password);
            _commandString = "SELECT * FROM UMGPDB1.CLIENTE WHERE CORREO = '" + loginDto.correo.ToString().ToUpper() + "'";
            Console.WriteLine("Cadena: " + _commandString);
            Console.WriteLine("Entrando a la capa aPI");
            
           bool result = false;
            try
            {
                var usuario = new Cliente();
                await _connection.OpenAsync();
                Console.WriteLine("Abriendo la conexion capa API");
                Console.WriteLine("Correo: " + loginDto.correo);
                Console.WriteLine("Contraseña: " + loginDto.password);
                _command = new OracleCommand(_commandString,_connection);
                OracleDataReader rd = _command.ExecuteReader();
                while(rd.Read()){
                    usuario.NitCliente = rd.GetInt32(0);
                    usuario.NombresCliente = rd.GetString(1);
                    usuario.ApellidosCliente = rd.GetString(2);
                    usuario.PhoneNumber = rd.GetString(3);
                    usuario.Email = rd.GetString(4);
                    usuario.DireccionEntrega = rd.GetString(5);

                    if (usuario.PasswordHash == loginDto.password && usuario.Email.ToString().ToUpper() == loginDto.correo.ToString().ToUpper())
                    {
                        result = true;
                        Console.WriteLine("Nuevo inicio de sesion de cliente: " + loginDto.correo + ", Nombre: " + usuario.NombresCliente);
                    }
                }
                
                if (result)
                {
                    return new UserDto{
                        nitCliente = usuario.NitCliente,
                        nombresCliente = usuario.NombresCliente,
                        apellidosCliente = usuario.ApellidosCliente,
                        telefono = usuario.PhoneNumber,
                        correo = usuario.Email,
                        direccionEntrega = usuario.DireccionEntrega
                    };
                }
                await _connection.CloseAsync();
            }
            catch (System.Exception ex)
            {
                Console.WriteLine("Error desde:" + ex.Source.ToString());
                Console.WriteLine("Error en:" + ex.Message.ToString());
                Console.WriteLine("Error en:" + ex.StackTrace.ToString());
               return Unauthorized();
            }
            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> registrar(RegisterDto regDto){
            _commandString = "SELECT * FROM UMGPDB1.CLIENTE WHERE CORREO = '" + regDto.correo.ToString().ToUpper() + "'";
            Console.WriteLine("Cadena: " + _commandString);
            Console.WriteLine("Entrando a la capa aPI");
            bool result = true;
            try
            {
                await _connection.OpenAsync();
                Console.WriteLine("Abriendo la conexion capa API,registrando usuario");
                Console.WriteLine("Correo: " + regDto.correo);
                Console.WriteLine("Contraseña: " + regDto.password);
                _command = new OracleCommand(_commandString,_connection);
                OracleDataReader rd = _command.ExecuteReader();
                while(rd.Read()){
                    var usuario = new Cliente();
                    usuario.Email = rd.GetString(4);
                    await rd.CloseAsync();
                    System.Console.WriteLine("'Usuario encontrado: '" + usuario.Email.ToString());
                    await _connection.CloseAsync();
                    
                    Console.WriteLine(regDto.correo.ToUpper());
                    Console.WriteLine(usuario.Email.ToString().ToUpper());
                    if(usuario.Email.ToString().ToUpper() == regDto.correo.ToUpper())
                    {
                        result = false;
                        Console.WriteLine("El usuario ya existe");
                        System.Console.WriteLine(result.ToString());
                        return Unauthorized();
                    }
                }
                System.Console.WriteLine(result.ToString());
                if(result)
                {
                    Console.WriteLine(regDto.correo.ToUpper());
                    await _connection.CloseAsync();
                    result = true;
                    _command.Connection = _connection;
                     await _connection.OpenAsync();
                    Console.WriteLine("Nuevo registro de cliente: " + regDto.correo + ", Nombre: " + regDto.nombresCliente);
                    _command.CommandText = "UMGPDB1.SP_CREACION_CLIENTE"; 
                    _command.CommandType = System.Data.CommandType.StoredProcedure;
                    _command.Parameters.Add("INNIT", OracleDbType.Int32).Value = regDto.nitCliente;
                    _command.Parameters.Add("INNOMBRES", OracleDbType.Varchar2).Value = regDto.nombresCliente;
                    _command.Parameters.Add("INAPELLIDOS", OracleDbType.Varchar2).Value = regDto.apellidosCliente;
                    _command.Parameters.Add("INTELEFONO", OracleDbType.Varchar2).Value = regDto.telefono;
                    _command.Parameters.Add("INCORREO", OracleDbType.Varchar2).Value = regDto.correo.ToString().ToUpper();
                    _command.Parameters.Add("INDIRECCION", OracleDbType.Varchar2).Value = regDto.direccionEntrega;
                    _command.Parameters.Add("INTARJETA", OracleDbType.Varchar2).Value = regDto.noTarjeta;
                    _command.Parameters.Add("INPASSWORD", OracleDbType.Varchar2).Value = regDto.password;                       
                    _command.ExecuteNonQuery();
                    _connection.Close();

                    return new UserDto
                    {
                    nitCliente = regDto.nitCliente,
                    nombresCliente = regDto.nombresCliente,
                    apellidosCliente = regDto.apellidosCliente,
                    telefono = regDto.telefono,
                    correo = regDto.correo,
                    direccionEntrega = regDto.direccionEntrega,
                    noTarjeta = regDto.noTarjeta
                    };
  
                } 
            }
            catch (System.Exception ex)
            {
                Console.WriteLine("Error desde:" + ex.Source.ToString());
                Console.WriteLine("Error en:" + ex.Message.ToString());
                Console.WriteLine("Error en:" + ex.StackTrace.ToString());
               return Unauthorized();
            }
            return Unauthorized();
        }
    }
}