using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;

namespace Application.Productos
{
    public class ValidadorProducto : AbstractValidator<Producto>
    {
        public ValidadorProducto()
        {
            RuleFor(x => x.NombreProducto).NotEmpty();
            RuleFor(x => x.Descripcion).NotEmpty();
            //RuleFor(x => x.Imagen).NotEmpty();
            RuleFor(x => x.Activo).NotEmpty().NotNull();
            RuleFor(x => x.UnidadMedida).NotEmpty();
            RuleFor(x => x.Categoria).NotEmpty();
        }
    }
}