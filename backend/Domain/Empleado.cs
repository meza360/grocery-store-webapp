using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Empleado
    {
        public int idUsuario { get; set; }
        public string nivelAcceso { get; set; }
        public string  nombres { get; set; }
        public string apellidos { get; set; }
        public string correo { get; set; }
        public string password { get; set; }
        public int empleador { get; set; }
    }
}