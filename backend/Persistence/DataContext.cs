using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace Persistence
{
    public class DataContext : IdentityDbContext<Cliente>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Proveedor> Proveedor { get; set; }
        public DbSet<Pais> Pais { get; set; }
        public DbSet<Tarjeta> Tarjeta { get; set; }
        public DbSet<Representante> Representante { get; set; } 
        public DbSet<Lote> Lote { get; set; }
    }
}