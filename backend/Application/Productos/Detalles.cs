using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using System.Threading;
using Oracle.ManagedDataAccess.Client;
using Application.Core;

namespace Application.Productos
{
    public class Detalles
    {
        
        public class Query : IRequest<Result<Producto>>{
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Producto>>
        {
            private readonly DataContext _context;
            public Producto _producto;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Result<Producto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var producto = await _context.Productos.FindAsync(request.Id);
                return Result<Producto>.Success(producto);                
            }
        }
    }
}