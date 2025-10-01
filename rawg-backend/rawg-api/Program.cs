using Microsoft.EntityFrameworkCore;
using rawg_api.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<rawg_dbContext>(options =>
{
    options.UseMySql(
        builder.Configuration.GetConnectionString("Default"),
        new MySqlServerVersion(new Version(9, 4, 0)));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/", () =>
{
    return "Hello World!";
})
.WithName("Get");

await app.RunAsync();
