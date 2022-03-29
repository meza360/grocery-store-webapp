using System;
using API.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Devart.Data.Oracle.Entity.Configuration;
using Oracle.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddApplicationServices(builder.Configuration);



var app = builder.Build();


//creating migrations automatically
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    
    var config = OracleEntityProviderConfig.Instance;
    config.Workarounds.DisableQuoting = true;
    
    if (context.Database.EnsureCreated())
    {
        Console.WriteLine("La base de datos no esta creada");
    }else
    {
        Console.WriteLine("La base de datos esta creada");
    }
}
catch (Oracle.ManagedDataAccess.Client.OracleException ex)
{
    Console.WriteLine("Error en la creacion: \n" + ex.ToString());
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseCors("CorsPolicy");

//app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.Run();
