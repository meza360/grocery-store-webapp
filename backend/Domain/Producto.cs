using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Oracle.EntityFrameworkCore;
using Oracle.ManagedDataAccess;
using System.ComponentModel.DataAnnotations;


namespace Domain
{
    
    public class Producto
    {
        [Key]
        public int SkuId { get; set; }
        public string NombreProducto { get; set; }
        public string Descripcion { get; set; }
        public string Imagen { get; set; } = String.Empty;
        public int Activo { get; set; }
        public string UnidadMedida { get; set; }
        public string Categoria { get; set; }
        public ICollection<Lote> Lote { get; set; } //Generates a many to many relationship table with Proveedor
    }
}