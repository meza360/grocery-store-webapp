using System;
using API.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Oracle.EntityFrameworkCore;
using Persistence;
using Microsoft.AspNetCore.Authentication.Certificate;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);
//builder.Services.AddAuthentication(CertificateAuthenticationDefaults.AuthenticationScheme).AddCertificate();



var app = builder.Build();


//creating migrations automatically
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    //await context.Database.MigrateAsync();
    
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

//Routing and binding
app.UseRouting();
//app.UseHttpsRedirection();
//app.UseAuthentication();

//Address to bind
app.Urls.Add("http://10.0.2.6:5000");
app.Urls.Add("https://10.0.2.6:5001");

//app.Urls.Add("http://192.168.0.150:5000");
//app.Urls.Add("https://192.168.0.150:5001");

//Cross Object Resource Policy
app.UseCors("CorsPolicy");

//app.UseAuthorization();

app.MapControllers();

app.Run();
