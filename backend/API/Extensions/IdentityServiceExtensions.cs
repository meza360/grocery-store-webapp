using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Domain;
using Persistence;
using Microsoft.AspNetCore.Identity;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
             services.AddIdentityCore<Cliente>(opt => {
                 opt.Password.RequireDigit = true;
                 opt.Password.RequiredLength = 8;
                 opt.Password.RequireLowercase = true;
                 opt.Password.RequireUppercase = true;
                 opt.Password.RequireNonAlphanumeric = true;
             }).AddEntityFrameworkStores<DataContext>().AddSignInManager<SignInManager<Cliente>>();
             services.AddAuthentication();
             return services;
        }
    }
}