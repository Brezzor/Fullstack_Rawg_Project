using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rawg_api.Handlers;
using rawg_api.Models;
using rawg_api.Models.DTOs;

namespace rawg_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenresController : ControllerBase
    {
        private readonly rawg_dbContext _DbContext;

        public GenresController(rawg_dbContext dbContext)
        {
            _DbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<GenreDto> storesQuery = await _DbContext.Genres
                .Select(genre => DtoHandlers.GenreDto(genre))
                .ToListAsync();

            return Ok(new ResponseDto<GenreDto>
            {
                count = storesQuery.Count,
                results = storesQuery,
            });
        }
    }
}