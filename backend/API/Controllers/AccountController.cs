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
            
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto){
            Console.WriteLine("correo: " + loginDto.correo + "password: " + loginDto.password);
            
            _commandString = "SELECT * FROM UMGPDB1.CLIENTE WHERE CORREO = '" + loginDto.correo.ToString().ToUpper() + "'";
            Console.WriteLine("Cadena: " + _commandString);
            Console.WriteLine("Entrando a la capa aPI");
            _connection = new OracleConnection(_connectionString);
           bool result = false;
            try
            {
                var usuario = new Cliente();
                await _connection.OpenAsync();
                 

                Console.WriteLine("Abriendo la conexion capa API");
                Console.WriteLine("nit: " + loginDto.correo);
                Console.WriteLine("Contraseña: " + loginDto.password);
                _command = new OracleCommand(_commandString,_connection);

                OracleDataReader rd = _command.ExecuteReader();
                

                
                rd.Read();
                usuario.nitCliente = rd.GetInt32(0);
                usuario.nombresCliente = rd.GetString(1);
                usuario.apellidosCliente = rd.GetString(2);
                usuario.telefono = rd.GetString(3);
                usuario.correo = rd.GetString(4);
                usuario.direccionEntrega = rd.GetString(5);
                usuario.noTarjeta = rd.GetString(6);
                usuario.nacionalidad = rd.GetInt32(7);
                usuario.password = rd.GetString(8);

                if (usuario.password == loginDto.password)
                {
                    result = true;
                    Console.WriteLine("Nuevo inicio de sesion de cliente: " + loginDto.correo + ", Nombre: " + usuario.nombresCliente);
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
    }
}