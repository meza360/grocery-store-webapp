using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Tarjeta
    {
        [Key]
        public string NumeroTarjeta { get; set; }
        public string NombreTarjeta { get; set; }
        public string Vencimiento { get; set; }
        public string CVV { get; set; } //Card Verification Value
    }
}