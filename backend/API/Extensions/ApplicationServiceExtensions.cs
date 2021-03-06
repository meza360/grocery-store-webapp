using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                    policy.WithOrigins("https://10.0.2.6:3000");
                    policy.WithOrigins("http://oddbbsrv01:3000");
                    policy.WithOrigins("http://localhost:3000");
                    policy.WithOrigins("http://20.228.215.6:3000");
                    policy.WithOrigins("https://20.228.215.6:3000");
                    policy.WithOrigins("https://127.0.0.1:3000");
                    policy.WithOrigins("http://20.228.215.6");
                    policy.WithOrigins("https://20.228.215.6");
                    policy.WithOrigins("http://umg-appsite.eastus.cloudapp.azure.com");
                });
            });
            services.AddAutoMapper(typeof(Application.Core.MappingProfiles).Assembly);
            services.AddMediatR(typeof(Application.Productos.ListarTodos.Handler).Assembly);
    
             return services;
        }
    }
}