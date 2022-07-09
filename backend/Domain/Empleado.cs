using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class Empleado : IdentityUser
    {
        public string NivelAcceso { get; set; }
        public string  Nombres { get; set; }
        public string Apellidos { get; set; }
    }
}