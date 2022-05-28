using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace API.DTOs
{
    public class CompraDto
    {
        public List<Producto> carrito { get; set; }
        public UserDto cliente { get; set; }
    }
}