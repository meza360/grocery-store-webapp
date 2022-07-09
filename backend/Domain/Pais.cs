using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Pais
    {
        [Key]
        public int Zip { get; set; }
        public string Nombre { get; set; }
    }
}