using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Oracle.ManagedDataAccess.Client;
using Persistence;

namespace Application.Empleados
{
    public class LoginEmpleados
    {
        public class Query: IRequest<Empleado>{
            public int Id { get; set; }
            public string Password { get; set; }
        }

        public class Handler : IRequestHandler<Query,Empleado>{
            private readonly DataContext _context;
            private OracleConnection _connection;
            private readonly string _connectionString;
            private OracleCommand _command;
            
            private string _commandString;
            public Producto _producto;
            public Handler(DataContext context)
            {
            _context = context;
            _connectionString = "User Id=GMEZAP;Password=developer;Data Source=//192.168.0.150:1521/stigtpdb2";
            _commandString = "SELECT ID_USUARIO,CONTRASENIA FROM UMGPDB1.USUARIO_EMPLEADO";
            }

            public async Task<Empleado> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                    {
                    _connection = new OracleConnection(_connectionString);
                    await _connection.OpenAsync();
                    _commandString += " WHERE ID_USUARIO=" + request.Id;
                    Console.WriteLine("Conexion en la capa de aplicacion");
                    Console.WriteLine("Empleado buscado: " + request.Id);
                    Console.WriteLine("Sentencia SQL: " + _commandString);

                    _command = new OracleCommand(_commandString, _connection);
                    
                    OracleDataReader rd = _command.ExecuteReader();
                    
                    Console.WriteLine("Capa aplicacion, metodo login empleado ejecutandose");
                        
                    rd.Read();
                   
                        
                    Console.WriteLine("Cerrando la conexion");
                    await _connection.CloseAsync();
                    Console.WriteLine("Conexion cerrada");
                    }
                    catch (OracleException err)
                    {
                        foreach (OracleError error in err.Errors) 
                        {
                            Console.WriteLine("Mensaje del error: " + error.Message);
                            Console.WriteLine("Fuente del error: " + error.Source);       
                        }
                    }
                    catch(Exception err)
                    {
                        Console.WriteLine("Error en: " + err.Message.ToString());
                        return null;
                    }
                    
                    return null;
                //return await _context.Producto.FindAsync(request.Id);
            }
            
        }


    }
}