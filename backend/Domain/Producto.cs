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
        public int Activo { get; set; }
        public string UnidadMedida { get; set; }
        public string Categoria { get; set; }
        public ICollection<Proveedor> Proveedor { get; set; }
        /* public decimal Precio { get; set; }
        public DateTime FechaProduccion { get; set; }
        public DateTime FechaCaducidad { get; set; }
        public string Proveedor { get; set; }
        public string Origen { get; set; } */
    }
}