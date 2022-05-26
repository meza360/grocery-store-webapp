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
            _connectionString = "User Id=GMEZAP;Password=developer;Data Source=//192.168.0.150:1521/stigtpdb2";
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
                    usuario.nitCliente = rd.GetInt32(0);
                    usuario.nombresCliente = rd.GetString(1);
                    usuario.apellidosCliente = rd.GetString(2);
                    usuario.telefono = rd.GetString(3);
                    usuario.correo = rd.GetString(4);
                    usuario.direccionEntrega = rd.GetString(5);
                    usuario.noTarjeta = rd.GetString(6);
                    //usuario.nacionalidad = rd.GetInt32(7);
                    usuario.password = rd.GetString(8);

                if (usuario.password == loginDto.password && usuario.correo.ToString().ToUpper() == loginDto.correo.ToString().ToUpper())
                {
                    result = true;
                    Console.WriteLine("Nuevo inicio de sesion de cliente: " + loginDto.correo + ", Nombre: " + usuario.nombresCliente);
                }

                }
                
                
                //var result = await _signInManager.CheckPasswordSignInAsync(usuario, loginDto.password,false);

                
                if (result)
                {
                    return new UserDto{
                        nitCliente = usuario.nitCliente,
                        nombresCliente = usuario.nombresCliente,
                        apellidosCliente = usuario.apellidosCliente,
                        telefono = usuario.telefono,
                        correo = usuario.correo,
                        direccionEntrega = usuario.direccionEntrega,
                        noTarjeta = usuario.noTarjeta
                    };
                }
                await _connection.CloseAsync();
                /* if (result.Succeeded)
                {
                    return new UserDto{
                        nitCliente = usuario.nitCliente,
                        nombresCliente = usuario.nombresCliente,
                        apellidosCliente = usuario.apellidosCliente,
                        telefono = usuario.telefono,
                        direccionEntrega = usuario.correo,
                        noTarjeta = usuario.noTarjeta
                    };
                } */
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
                /* usuario.nitCliente = rd.GetInt32(0);
                usuario.nombresCliente = rd.GetString(1);
                usuario.apellidosCliente = rd.GetString(2);
                usuario.telefono = rd.GetString(3); */
                usuario.correo = rd.GetString(4);
                
                /* usuario.direccionEntrega = rd.GetString(5);
                usuario.noTarjeta = rd.GetString(6);
                usuario.nacionalidad = rd.GetInt32(7);
                usuario.password = rd.GetString(8); */
                await rd.CloseAsync();
                System.Console.WriteLine("'Usuario encontrado: '" + usuario.correo.ToString());
                await _connection.CloseAsync();
                
                Console.WriteLine(regDto.correo.ToUpper());
                Console.WriteLine(usuario.correo.ToString().ToUpper());
                if(usuario.correo.ToString().ToUpper() == regDto.correo.ToUpper())
                {result = false;
                    Console.WriteLine("El usuario ya existe");
                    System.Console.WriteLine(result.ToString());
                    return Unauthorized();
                }
                

                }
                System.Console.WriteLine(result.ToString());
                if(result)
                {
                    Console.WriteLine(regDto.correo.ToUpper());
                    //Console.WriteLine(usuario.correo.ToString().ToUpper());
                    await _connection.CloseAsync();
                     /* if (((regDto.correo).ToUpper() != (usuario.correo)) && String.IsNullOrEmpty(usuario.correo.ToString())) */
                    result = true;
                    Console.WriteLine("Nuevo registro de cliente: " + regDto.correo + ", Nombre: " + regDto.nombresCliente);
                    
                        _command.Connection = _connection;
                                        await _connection.OpenAsync();

                                        _command.CommandText = "UMGPDB1.SP_CREACION_USUARIO"; 
                                        _command.CommandType = System.Data.CommandType.StoredProcedure;
                                        _command.Parameters.Add("INNIT", OracleDbType.Int32).Value = regDto.nitCliente;
                                        _command.Parameters.Add("INNOMBRES", OracleDbType.Varchar2).Value = regDto.nombresCliente;
                                        _command.Parameters.Add("INAPELLIDOS", OracleDbType.Varchar2).Value = regDto.apellidosCliente;
                                        _command.Parameters.Add("INTELEFONO", OracleDbType.Varchar2).Value = regDto.telefono;
                                        _command.Parameters.Add("INCORREO", OracleDbType.Varchar2).Value = regDto.correo.ToString().ToUpper();
                                        _command.Parameters.Add("INDIRECCION", OracleDbType.Varchar2).Value = regDto.direccionEntrega;
                                        _command.Parameters.Add("INTARJETA", OracleDbType.Varchar2).Value = regDto.noTarjeta;
                                        _command.Parameters.Add("INPASSWORD", OracleDbType.Varchar2).Value = regDto.password;

                                        //await _command.Connection.OpenAsync();
                                        
                                        await _command.ExecuteNonQueryAsync();
                                        await _connection.CloseAsync();

                                        return new UserDto{
                                            nitCliente = regDto.nitCliente,
                                            nombresCliente = regDto.nombresCliente,
                                            apellidosCliente = regDto.apellidosCliente,
                                            telefono = regDto.telefono,
                                            correo = regDto.correo,
                                            direccionEntrega = regDto.direccionEntrega,
                                            noTarjeta = regDto.noTarjeta
                                        };

                                    
                                    /* else {
                                        System.Console.WriteLine("El usuario ya existe");
                                    } */
                                    
                                    //var result = await _signInManager.CheckPasswordSignInAsync(usuario, loginDto.password,false);

                                    
                                    /* if (result)
                                    {
                                        return new UserDto{
                                            nitCliente = regDto.nitCliente,
                                            nombresCliente = regDto.nombresCliente,
                                            apellidosCliente = regDto.apellidosCliente,
                                            telefono = regDto.telefono,
                                            correo = regDto.correo,
                                            direccionEntrega = regDto.direccionEntrega,
                                            noTarjeta = regDto.noTarjeta
                                        };
                                    } */
                                    
                                    /* if (result.Succeeded)
                                    {
                                        return new UserDto{
                                            nitCliente = usuario.nitCliente,
                                            nombresCliente = usuario.nombresCliente,
                                            apellidosCliente = usuario.apellidosCliente,
                                            telefono = usuario.telefono,
                                            direccionEntrega = usuario.correo,
                                            noTarjeta = usuario.noTarjeta
                                        };
                                    } */
                    
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