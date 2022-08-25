using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Productos
{
    public class Editar
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Producto Producto { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }

            public class CommandValidator : AbstractValidator<Command>
            {
                public CommandValidator()
                {
                    RuleFor(x => x.Producto).SetValidator(new ValidadorProducto());
                }
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var producto = await _context.Productos.FindAsync(request.Producto.SkuId);
                if(producto == null) return null;
                _mapper.Map(request.Producto, producto);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure($"Unable to edit this product, {producto.ToString()}");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}