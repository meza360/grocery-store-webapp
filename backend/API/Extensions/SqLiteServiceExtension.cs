using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

namespace API.Extensions
{
    public static class SqLiteServiceExtension
    {
        public static IServiceCollection AddSqLiteServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(
                opt => {
                    opt.UseSqlite(config.GetConnectionString("SqLiteConnection"));
                }
            );
            return services;
        }
    }
}