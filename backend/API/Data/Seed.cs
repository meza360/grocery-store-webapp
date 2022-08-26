using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistence;

namespace API.Data
{
    public class Seed
    {
        public static async Task AddProducts(DataContext context){
            ICollection<Pais> paises = new List<Pais>{
                new Pais{Zip=1001, Nombre="BRASIL"},
                new Pais{Zip=1002, Nombre="ARGENTINA"},
                new Pais{Zip=1003, Nombre="COLOMBIA"},
                new Pais{Zip=1004, Nombre="PERU"},
                new Pais{Zip=1005, Nombre="CHILE"},
                new Pais{Zip=1006, Nombre="VENEZUELA"},
                new Pais{Zip=1007, Nombre="ECUADOR"},
                new Pais{Zip=1008, Nombre="BOLIVIA"},
                new Pais{Zip=1009, Nombre="GUYANA"},
                new Pais{Zip=1010, Nombre="SURINAM"},
                new Pais{Zip=1011, Nombre="URUGUAY"},
                new Pais{Zip=1012, Nombre="PARAGUAY"},
                new Pais{Zip=1013, Nombre="GUYANA FRANCESA"},
                new Pais{Zip=1014, Nombre="ARUBA"},
                new Pais{Zip=1015, Nombre="CURAZAO"},
                new Pais{Zip=1016, Nombre="ISLAS MALVINAS"},
                new Pais{Zip=1017, Nombre="TRINIDAD Y TOBAGO"},
                new Pais{Zip=1018, Nombre="CARIBE NEERLANDES"},
                new Pais{Zip=1019, Nombre="CANADA"},
                new Pais{Zip=1020, Nombre="ESTADOS UNIDOS"},
                new Pais{Zip=1021, Nombre="MEXICO"},
                new Pais{Zip=1022, Nombre="GUATEMALA"},
                new Pais{Zip=1023, Nombre="EL SALVADOR"},
                new Pais{Zip=1024, Nombre="HONDURAS"},
                new Pais{Zip=1025, Nombre="NICARAGUA"},
                new Pais{Zip=1026, Nombre="COSTA RICA"},
                new Pais{Zip=1027, Nombre="PANAMA"},
                new Pais{Zip=1028, Nombre="ALEMANIA"},
                new Pais{Zip=1029, Nombre="ITALIA"},
                new Pais{Zip=1030, Nombre="FRANCIA"},
                new Pais{Zip=1031, Nombre="REINO UNIDO"},
                new Pais{Zip=1032, Nombre="PAISES BAJOS"},
                new Pais{Zip=1033, Nombre="GRECIA"},
                new Pais{Zip=1034, Nombre="SUIZA"},
                new Pais{Zip=1035, Nombre="POLONIA"},
                new Pais{Zip=1036, Nombre="BELGICA"},
                new Pais{Zip=1037, Nombre="AUSTRIA"},
                new Pais{Zip=1038, Nombre="SUECIA"},
                new Pais{Zip=1039, Nombre="DINAMARCA"},
                new Pais{Zip=1040, Nombre="UCRANIA"},
                new Pais{Zip=1041, Nombre="GRAN BRETAÑA"},
                new Pais{Zip=1042, Nombre="ESPAÑA"},
                new Pais{Zip=1043, Nombre="FINLANDIA"},
                new Pais{Zip=1044, Nombre="JAPON"},
                new Pais{Zip=1045, Nombre="INDONESIA"},
                new Pais{Zip=1046, Nombre="CHINA"},
                new Pais{Zip=1047, Nombre="INDIA"},
                new Pais{Zip=1048, Nombre="TAILANDIA"},
                new Pais{Zip=1049, Nombre="COREA DEL SUR"},
                new Pais{Zip=1050, Nombre="FILIPINAS"},
                new Pais{Zip=1051, Nombre="SINGAPUR"},
                new Pais{Zip=1052, Nombre="VIETNAM"},
                new Pais{Zip=1053, Nombre="AFGANISTAN"},
                new Pais{Zip=1054, Nombre="MALASIA"},
                new Pais{Zip=1055, Nombre="COREA DEL NORTE"},
                new Pais{Zip=1056, Nombre="RUSIA"},
                new Pais{Zip=1057, Nombre="AUSTRALIA"},
                new Pais{Zip=1058, Nombre="NUEVA ZELANDA"},
                new Pais{Zip=1059, Nombre="FIYI"},
                new Pais{Zip=1060, Nombre="SAMOA"},
                new Pais{Zip=1061, Nombre="TONGA"},
                new Pais{Zip=1062, Nombre="VANUATU"},
                new Pais{Zip=1063, Nombre="PALAOS"},
                new Pais{Zip=1064, Nombre="KIRIBATI"},
                new Pais{Zip=1065, Nombre="POLINESIA FRANCESA"},
                new Pais{Zip=1066, Nombre="ISLAS SALOMON"},
                new Pais{Zip=1067, Nombre="TURQUIA"},
                new Pais{Zip=1068, Nombre="BIELORRUSIA"}
            };

            ICollection<Producto> productos = new List<Producto>{
                new Producto{NombreProducto="Aceite de cocina",Descripcion="Aceite para cocinar",Imagen=null,Activo=1,UnidadMedida="Unidad",Categoria="Cocina"},
                new Producto{NombreProducto="Aceite industrial",Descripcion="Aceite para lubricar",Imagen=null,Activo=1,UnidadMedida="Unidad",Categoria="Automotriz"},
                new Producto{NombreProducto="Agua oxigenada",Descripcion="Peroxido de hidrogreno",Imagen=null,Activo=1,UnidadMedida="Unidad",Categoria="Farmacia"},
                new Producto{NombreProducto="Alcohol",Descripcion="Alcohol al 70%",Imagen=null,Activo=1,UnidadMedida="Unidad",Categoria="Farmacia"},
                new Producto{NombreProducto="Cafe premium",Descripcion="Cafe de regiones de alta calidad",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Bebida"},
                new Producto{NombreProducto="Cafe regular",Descripcion="Cafe tostado y molido",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Bebida"},
                new Producto{NombreProducto="Carne roja",Descripcion="Carne de res",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Carnes"},
                new Producto{NombreProducto="Carton de huevo",Descripcion="Carton de huevos con 30 unidades",Imagen=null,Activo=1,UnidadMedida="Unidad",Categoria="Comida"},
                new Producto{NombreProducto="Frijoles colorados",Descripcion="Frijoles colorados enlatados",Imagen=null,Activo=1,UnidadMedida="Unidad",Categoria="Comida"},
                new Producto{NombreProducto="Leche descremada",Descripcion="Leche de vaca descremada",Imagen=null,Activo=1,UnidadMedida="Litro",Categoria="Lacteo"},
                new Producto{NombreProducto="Leche entera",Descripcion="Leche de vaca entera",Imagen=null,Activo=1,UnidadMedida="Litro",Categoria="Lacteo"},
                new Producto{NombreProducto="Leche vegetal",Descripcion="Leche de origen vegetal",Imagen=null,Activo=1,UnidadMedida="Litro",Categoria="Lacteo"},
                new Producto{NombreProducto="Manzana verde",Descripcion="Manzana verde importada",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Comida"},
                new Producto{NombreProducto="Muslo de pavo",Descripcion="Muslos de pavo a granel",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Carne"},
                new Producto{NombreProducto="Muslo de pollo",Descripcion="Muslos de pavo a granel",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Carne"},
                new Producto{NombreProducto="Pan blanco",Descripcion="Pan blanco en rodajas",Imagen=null,Activo=1,UnidadMedida="Paquete",Categoria="Panaderia"},
                new Producto{NombreProducto="Pan dulce",Descripcion="Pan dulce de queso",Imagen=null,Activo=1,UnidadMedida="Paquete",Categoria="Panaderia"},
                new Producto{NombreProducto="Pan integral",Descripcion="Pan integral en rodajas",Imagen=null,Activo=1,UnidadMedida="Paquete",Categoria="Panaderia"},
                new Producto{NombreProducto="Papel higienico",Descripcion="Papel higienico rollo mil hojas(20 unidades)",Imagen=null,Activo=1,UnidadMedida="Paquete",Categoria="Baño"},
                new Producto{NombreProducto="Pera verde",Descripcion="Pera verde importada",Imagen=null,Activo=1,UnidadMedida="Libra",Categoria="Comida"},
                new Producto{NombreProducto="Refrigerante",Descripcion="Refrigerante para auto",Imagen=null,Activo=1,UnidadMedida="Litro",Categoria="Automotriz"},
                new Producto{NombreProducto="Vino blanco",Descripcion="Vino de mosto blanco dulce",Imagen=null,Activo=1,UnidadMedida="Litro",Categoria="Bebida"},
                new Producto{NombreProducto="Vino tinto",Descripcion="Vino de mosto de uva cabernet sauvignon",Imagen=null,Activo=1,UnidadMedida="Litro",Categoria="Bebida"}
            };

            ICollection<Proveedor> proveedores = new List<Proveedor>{
                new Proveedor{Nombre="Suli",Telefono="800-125-4251",Direccion="Avenida Elena",PaisDominio=paises.ElementAt(0)},
                new Proveedor{Nombre="Maggi",Telefono="800-125-4251",Direccion="Avenida Belford",PaisDominio=paises.ElementAt(1)},
                new Proveedor{Nombre="Mahler",Telefono="800-125-4251",Direccion="Avenida LaCrosse",PaisDominio=paises.ElementAt(2)},
                new Proveedor{Nombre="GreatValue",Telefono="800-125-4251",Direccion="Avenida Hitsburg",PaisDominio=paises.ElementAt(3)},
                new Proveedor{Nombre="Cañareal",Telefono="800-125-4251",Direccion="Avenida Maria",PaisDominio=paises.ElementAt(4)},
                new Proveedor{Nombre="Del monte",Telefono="800-125-4251",Direccion="Avenida El paso",PaisDominio=paises.ElementAt(5)},
                new Proveedor{Nombre="La costeña",Telefono="800-125-4251",Direccion="Avenida Pattinson",PaisDominio=paises.ElementAt(6)},
                new Proveedor{Nombre="La chula",Telefono="800-125-4251",Direccion="Avenida Bellflower",PaisDominio=paises.ElementAt(7)},
                new Proveedor{Nombre="Anabelly",Telefono="800-125-4251",Direccion="Avenida Grantham",PaisDominio=paises.ElementAt(8)},
                new Proveedor{Nombre="Cafe Leon",Telefono="800-125-4251",Direccion="Avenida Michael",PaisDominio=paises.ElementAt(9)},
                new Proveedor{Nombre="El cafetalito",Telefono="800-125-4251",Direccion="Avenida Burnley",PaisDominio=paises.ElementAt(10)},
                new Proveedor{Nombre="Los arcos",Telefono="800-125-4251",Direccion="Avenida Sidney",PaisDominio=paises.ElementAt(11)},
                new Proveedor{Nombre="Nube blanca",Telefono="800-125-4251",Direccion="Avenida Sidney",PaisDominio=paises.ElementAt(12)},
                new Proveedor{Nombre="Guateplast",Telefono="800-125-4251",Direccion="Avenida Sidney",PaisDominio=paises.ElementAt(13)},
                new Proveedor{Nombre="Lipton",Telefono="800-125-4251",Direccion="Avenida Sidney",PaisDominio=paises.ElementAt(14)},
            };
            
            ICollection<Representante> representantes = new List<Representante>();
            for (int i = 0; i < proveedores.Count(); i++)
            {
                representantes.Add(new Representante{Nombre=$"Representante {i}",Apellido="De marca",Telefono=$"250-251-{i}{i}{i}",Correo=$"representante{i}@correo.com",PaisRepresentante=paises.ElementAt(i),Proveedor=proveedores.ElementAt(i)});                
            }
            ICollection<Lote> loteInicial = new List<Lote>();
            Random randomGenerator = new Random();
            for (int i = 0; i < proveedores.Count(); i++)
            {
                double price = (randomGenerator.NextDouble()*150);
                double priceRetail = price + (randomGenerator.Next(5,20));
                DateTime minDate = DateTime.Now.AddDays(randomGenerator.Next(10,25) * -1);
                DateTime maxDate = DateTime.Now.AddMonths(randomGenerator.Next(1,12));
                loteInicial.Add(new Lote{Producto=productos.ElementAt(i),Proveedor=proveedores.ElementAt(i),PrecioCompra=price,PrecioVenta=priceRetail,FechaProduccion=minDate,FechaCaducidad=maxDate,Cantidad=randomGenerator.Next(100,350)});
            }
            try
            {
                await context.Pais.AddRangeAsync(paises);
                await context.Productos.AddRangeAsync(productos);
                await context.Proveedores.AddRangeAsync(proveedores);
                await context.Representante.AddRangeAsync(representantes);
                await context.Lote.AddRangeAsync(loteInicial);
                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("Error message: " + ex.Message);
                System.Console.WriteLine("Error from: " + ex.Source);
                System.Console.WriteLine("Error details: " + ex.StackTrace);
            }
            return;
        }
    }
}