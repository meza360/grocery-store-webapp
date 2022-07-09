using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Application.Productos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using API.DTOs;

namespace API.Controllers
{
    public class ProductoController : BaseController
    {
        //Listado de productos
        [EnableCors("CorsPolicy")]
        [HttpGet]
        public async Task<ActionResult<List<Producto>>> GetProductos()
        {
            return await Mediator.Send(new ListarTodos.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProducto(int id){
            return await Mediator.Send(new Detalles.Query{Id=id});
        }
    }
}