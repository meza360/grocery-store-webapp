using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistence;
using MediatR;
using System.Threading;

namespace Application.Proveedores
{
    public class Detalles
    {

        public class Query : IRequest<Proveedor>{
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Proveedor>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Proveedor> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Proveedor.FindAsync(request.Id);
            }
        }

    }
}