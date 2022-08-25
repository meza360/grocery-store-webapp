using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.Productos
{
    public class Eliminar
    {
        public class Command : IRequest<Result<Unit>>
        {
            public int Id { get; set; }
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
                var producto = await _context.Productos.FindAsync(request.Id);
                //if (producto == null) return null;
                _context.Productos.Remove(producto);
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure($"Failed to delete the requested product, {request.Id}");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}