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
        public int skuId { get; set; }
        public string nombreProducto { get; set; }
        public string descripcion { get; set; }
        public string unidadMedida { get; set; }
        public string categoria { get; set; }
        public decimal precio { get; set; }
        public DateTime fechaProduccion { get; set; }
        public DateTime fechaCaducidad { get; set; }
        public string proveedor { get; set; }
        public string origen { get; set; }
        
        //public ICollection<Proveedor> Proveedor { get; set; }



    }
}