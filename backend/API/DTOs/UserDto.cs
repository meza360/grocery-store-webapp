using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UserDto
    {
        public int nitCliente { get; set; }
        public string nombresCliente { get; set; }
        public string apellidosCliente { get; set; }
        public string telefono { get; set; }
        public string correo { get; set; }        public string direccionEntrega { get; set; }
        public string noTarjeta { get; set; }
        
    }
}