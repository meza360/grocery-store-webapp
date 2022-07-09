using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class Cliente : IdentityUser
    {
        public int NitCliente { get; set; }
        public string NombresCliente { get; set; }
        public string ApellidosCliente { get; set; }
        public string DireccionEntrega { get; set; }
        public Pais PaisResidencia { get; set; } //Creates foreign key
        public ICollection<Tarjeta> Tarjetas { get; set; } //Creates foreign key on oposite table N:1
    }
}