using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Application.Productos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductosController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Producto>>> ListarProductos()
        {
            return HandleResult(await Mediator.Send(new ListarTodos.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> ObtenerProducto(int id){
            return HandleResult(await Mediator.Send(new Detalles.Query{Id=id}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarProducto(int id, Producto producto)
        {
            producto.SkuId = id;
            return HandleResult(await Mediator.Send(new Editar.Command{Producto = producto}));
        }

        [HttpPost]
        public async Task<IActionResult> CrearProducto(Producto producto)
        {
            return HandleResult(await Mediator.Send(new Crear.Command{Producto = producto}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarProducto(int id)
        {
            return HandleResult(await Mediator.Send(new Eliminar.Command{SkuId = id}));
        }
    }
}