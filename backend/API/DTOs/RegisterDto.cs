using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDto
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}