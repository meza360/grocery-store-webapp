using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Proveedor
    {
        [Key]
        public int Nit { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public Pais PaisDominio { get; set; }
        public ICollection<Lote> Lote { get; set; } //Generates a many to many relationship table with Producto
    }
}