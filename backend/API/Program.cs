using System;
using API.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Oracle.EntityFrameworkCore;
using Persistence;
using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.Extensions.Configuration;
using API.Data;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
IConfiguration _config = builder.Configuration;
// Add services to the container.
    builder.Services.AddControllers();
{// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}
{//Adds Identity, Mapper, Validator to container
    builder.Services.AddApplicationServices(_config);
}
{//Adds Identity services
    builder.Services.AddIdentityServices(_config);
}
{//Adds Sqlite services to container, must be replaced with other service previous to production phase
    builder.Services.AddSqLiteServices(_config);
}
WebApplication app = builder.Build();
IServiceScope scope = app.Services.CreateScope();
IServiceProvider services = scope.ServiceProvider;
DataContext context = services.GetRequiredService<DataContext>();
try
{//creating migrations automatically 
    await context.Database.EnsureDeletedAsync();
    Console.WriteLine("Applying pending migrations");
    await context.Database.EnsureCreatedAsync();
}
catch (Oracle.ManagedDataAccess.Client.OracleException ex)
{
    Console.WriteLine("Error on db creation: \n" + ex.ToString());
}
catch(Exception ex)
{
    System.Console.WriteLine("Error message: " + ex.Message);
    System.Console.WriteLine("Error from: " + ex.Source);
    System.Console.WriteLine("Error details: " + ex.StackTrace);
}
finally{
    await Seed.AddProducts(context);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Routing and binding
app.UseRouting();
app.UseHttpsRedirection();

//Address to bind
/*
//Azure instance 
app.Urls.Add("http://10.0.2.6:5000");
app.Urls.Add("https://10.0.2.6:5001"); 
*/
/*
//Local oracle instance 
app.Urls.Add("http://192.168.0.150:5000");
app.Urls.Add("https://192.168.0.150:5001"); 
*/

//Cross Object Resource Policy
app.UseCors("CorsPolicy");
app.UseAuthorization();
app.MapControllers();
app.Run("http://localhost:5000");
