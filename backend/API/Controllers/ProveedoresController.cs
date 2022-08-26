using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
  
    public class ProveedoresController : BaseController
    {
        [HttpGet]
        public ActionResult GetProveedores(){
            
            return Ok();
        }
        
    }
}