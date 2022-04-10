using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Oracle.EntityFrameworkCore;
using Oracle.ManagedDataAccess;


namespace Domain
{
    
    public class Producto
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Precio { get; set; }

    }
}