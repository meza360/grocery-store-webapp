using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using System.Threading;
using Oracle.ManagedDataAccess.Client;

namespace Application.Productos
{
    public class Detalles
    {
        
        public class Query : IRequest<Producto>{
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Producto>
        {
            private readonly DataContext _context;
            private OracleConnection _connection;
            private readonly string _connectionString;
            private OracleCommand _command;
            
            private string _commandString;
            public Producto _producto;
            public Handler(DataContext context)
            {
            _context = context;
            //_connectionString = "User Id=UMGPDB1;Password=developer;Data Source=//192.168.0.150:1521/stigtpdb2";
            _connectionString = "User Id=UMGPDB1;Password=UMGPDB1;Data Source=//10.0.2.4:1521/umgpdb1.umg";
            _commandString = "SELECT * FROM UMGPDB1.VISTA_PRODUCTOS_ACTIVOS";
            }

            public async Task<Producto> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                    {
                    _connection = new OracleConnection(_connectionString);
                    _commandString += " WHERE SKU_ID = " + request.Id;
                    await _connection.OpenAsync();
                    Console.WriteLine("Conexion en la capa de aplicacion");
                    Console.WriteLine("Producto buscado: " + request.Id);
                    Console.WriteLine("Sentencia SQL: " + _commandString);

                    _command = new OracleCommand(_commandString, _connection);
                    _command.CommandType = System.Data.CommandType.Text;
                    
                    OracleDataReader rd = _command.ExecuteReader();
                    
                    Console.WriteLine("Capa aplicacion, metodo detalles ejecutandose");
                        
                    rd.Read();
                    _producto = new Producto();
                    _producto.SkuId = rd.GetInt16(0);
                    _producto.NombreProducto=rd.GetString(1);
                    _producto.Descripcion=rd.GetString(2);
                    _producto.UnidadMedida=rd.GetString(3);
                    _producto.Categoria = rd.GetString(4);
                    /* _producto.Precio=rd.GetDecimal(5);
                    _producto.FechaProduccion=rd.GetDateTime(6);
                    _producto.FechaCaducidad=rd.GetDateTime(7);
                    _producto.Proveedor=rd.GetString(8);
                    _producto.Origen=rd.GetString(9); */
                        
                    Console.WriteLine("Producto: " + _producto.NombreProducto);
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
                    return _producto;
                //return await _context.Producto.FindAsync(request.Id);
            }
        }

    }
}