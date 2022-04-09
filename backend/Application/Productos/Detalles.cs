using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using System.Threading;

namespace Application.Productos
{
    public class Detalles
    {
        
        public class Query : IRequest<Producto>{
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Producto>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Producto> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Producto.FindAsync(request.Id);
            }
        }

    }
}