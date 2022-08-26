using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistence;
using MediatR;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using Oracle.ManagedDataAccess.Client;
using Application.Core;

namespace Application.Productos
{
    public class ListarTodos
    {
        public class Query : IRequest<Result<List<Producto>>>{

        }

        public class Handler : IRequestHandler<Query, Result<List<Producto>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context){
                _context = context;
            }

            async Task<Result<List<Producto>>> IRequestHandler<Query, Result<List<Producto>>>.Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Producto>>.Success(await _context.Productos.ToListAsync());     
            }
        }
    }
}