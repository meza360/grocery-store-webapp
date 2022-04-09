using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using System.Threading;
using Microsoft.EntityFrameworkCore;

namespace Application.Proveedores
{
    public class ListarTodos
    {
        public class Query : IRequest<List<Proveedor>>{

        }


        public class Handler : IRequestHandler<Query, List<Proveedor>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<List<Proveedor>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Proveedor.ToListAsync();
            }
        }
    }
}