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
        public int Id_Proveedor { get; set; }
        public string Nombre { get; set; }
        public ICollection<Producto> Producto { get; set; }
    }
}