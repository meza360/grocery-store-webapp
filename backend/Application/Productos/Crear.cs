using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Productos
{
    public class Crear
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Producto Producto { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Producto).SetValidator(new ValidadorProducto());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                await _context.Productos.AddAsync(request.Producto);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure($"Failed to create the product requested, {request.Producto.ToString()}");
                return Result<Unit>.Success(Unit.Value);
            }
        }

    }
}