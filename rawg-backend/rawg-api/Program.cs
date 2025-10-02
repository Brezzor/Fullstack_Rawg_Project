using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using rawg_api.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var serverVersion = new MySqlServerVersion(new Version(9, 4, 0));

builder.Services.AddDbContext<rawg_dbContext>(options =>
{
    options.UseMySql(builder.Configuration.GetConnectionString("Default"), serverVersion);
    if (builder.Environment.IsDevelopment())
    {
        options.LogTo(Console.WriteLine, LogLevel.Information)
        .EnableSensitiveDataLogging()
        .EnableDetailedErrors();
    }
}
);

builder.Services.AddControllers()
    .AddJsonOptions(option =>
    {
        option.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

builder.Services.AddCors(option =>
{
    option.AddPolicy("All", policy =>
    {
        policy
        .AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("All");

app.MapControllers();

app.MapGet("/", () =>
{
    return "OK";
})
.WithName("Get");

await app.RunAsync();
