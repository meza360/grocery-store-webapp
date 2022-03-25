using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistence;
using MediatR;
using System.Threading;
using Microsoft.EntityFrameworkCore;

namespace Application.Productos
{
    public class ListarTodos
    {
        public class Query : IRequest<List<Producto>>{

        }

        public class Handler : IRequestHandler<Query, List<Producto>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context){
                _context = context;
            }

            async Task<List<Producto>> IRequestHandler<Query, List<Producto>>.Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Producto.ToListAsync();
            }
        }
    }
}