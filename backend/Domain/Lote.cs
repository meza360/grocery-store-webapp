using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Lote
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public Producto Producto { get; set; }
        [Required]
        public Proveedor Proveedor { get; set; }
        public double PrecioCompra { get; set; }
        public double PrecioVenta { get; set; }
        public double PorcentajeGanancia => ((PrecioVenta - PrecioCompra)/PrecioVenta) * 100;
        public DateTime FechaProduccion { get; set; }
        public DateTime FechaCaducidad { get; set; }
        public int Cantidad { get; set; }
    }
}