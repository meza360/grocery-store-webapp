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
    public class ProductosController : BaseController
    {
        //Listado de productos
        [HttpGet]
        public async Task<ActionResult<List<Producto>>> ListarProductos()
        {
            return await Mediator.Send(new ListarTodos.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> ObtenerProducto(int id){
            return await Mediator.Send(new Detalles.Query{Id=id});
        }
    }
}