using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Devart.Data.Oracle.Entity.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Oracle.EntityFrameworkCore;
using MediatR;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,IConfiguration config){
            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy", policy =>{
                    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    policy.WithOrigins("http://192.168.0.150:3000");
                    policy.WithOrigins("http://10.0.2.6:3000");
                    policy.WithOrigins("http://oddbbsrv01:3000");
                    policy.WithOrigins("http://localhost:3000");
                    /*
                    .WithOrigins("http://localhost:3000",
                    "http://localhost:19000",
                    "http://192.168.0.60:3000",
                    "http://192.168.0.55:19000",
                    "exp://192.168.0.55:19000",
                    "exp://192.168.0.60:19000",
                    "http://localhost:8100");
                    */
                });
               
            });

            services.AddDbContext<DataContext>(opt =>{
                     opt.UseOracle(config.GetConnectionString("DevConnection"));
                     //opt.UseOracle(config.GetConnectionString("Rac1Connection"));
                     
            });
            
            services.AddAutoMapper(typeof(Application.Core.MappingProfiles).Assembly);

            services.AddMediatR(typeof(Application.Productos.ListarTodos.Handler).Assembly);
    
             return services;
        }
        
    }


}