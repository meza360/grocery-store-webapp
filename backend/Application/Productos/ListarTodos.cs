using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistence;
using MediatR;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using Oracle.ManagedDataAccess.Client;

namespace Application.Productos
{
    public class ListarTodos
    {
        public class Query : IRequest<List<Producto>>{

        }

        public class Handler : IRequestHandler<Query, List<Producto>>
        {
            private readonly DataContext _context;
            private OracleConnection _connection;
            private readonly string _connectionString;
            private OracleCommand _command;
            private readonly string _commandString;

            private List<Producto> _productos;

            public Handler(DataContext context){
                _context = context;
                //_connectionString = "User Id=GMEZAP;Password=developer;Data Source=//192.168.0.150:1521/stigtpdb2";
                _connectionString = "User Id=UMGPDB1;Password=UMGPDB1;Data Source=//10.0.2.4:1521/umgpdb1.umg";
                _commandString = "SELECT * FROM UMGPDB1.VISTA_PRODUCTOS_ACTIVOS";
            }

            async Task<List<Producto>> IRequestHandler<Query, List<Producto>>.Handle(Query request, CancellationToken cancellationToken)
            {
                try
                    {
                    _connection = new OracleConnection(_connectionString);
                    await _connection.OpenAsync();
                    Console.WriteLine("Conexion en la capa de aplicacion");

                    _command = new OracleCommand(_commandString, _connection);
                    _productos = new List<Producto>();

                    OracleDataReader rd = _command.ExecuteReader();
                    Console.WriteLine("Capa aplicacion, metodo ListarTodos ejecutandose");
                        while (rd.Read()){
                            var producto = new Producto();
                            producto.skuId = rd.GetInt16(0);
                            producto.nombreProducto=rd.GetString(1);
                            producto.descripcion=rd.GetString(2);
                            producto.unidadMedida=rd.GetString(3);
                            producto.categoria = rd.GetString(4);
                            producto.precio=rd.GetDecimal(5);
                            producto.fechaProduccion=rd.GetDateTime(6);
                            producto.fechaCaducidad=rd.GetDateTime(7);
                            producto.proveedor=rd.GetString(8);
                            producto.origen=rd.GetString(9);

                            _productos.Add(producto);
                        }
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
                        Console.WriteLine("Error en ",err.Message.ToString());
                        return null;
                    }
                    return _productos;
                //return await _context.Producto.ToListAsync();
            }
        }
    }
}