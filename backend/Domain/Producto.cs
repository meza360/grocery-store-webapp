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
        public int Sku_Id { get; set; }
        public string Nombre_Producto { get; set; }
        public string Descripcion { get; set; }
        public char Activo { get; set; }
        public decimal Precio { get; set; }
        public ICollection<Proveedor> Proveedor { get; set; }



    }
}