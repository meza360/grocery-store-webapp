using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class SqlServerServiceExtension
    {
        public static IServiceCollection AddSqlServerServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(
                options => {
                    options.UseSqlServer(config.GetConnectionString("LocalDb"));
                }
            );
            return services;
        }
    }
}