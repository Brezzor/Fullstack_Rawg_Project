using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rawg_api.Models;
using rawg_api.Models.DTOs;
using rawg_api.Handlers;

namespace rawg_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly rawg_dbContext _DbContext;

        public GamesController(rawg_dbContext dbContext)
        {
            _DbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get(
            [FromQuery] int? genres,
            [FromQuery] int? platforms,
            [FromQuery] int? stores
        )
        {
            List<GameDto> gamesQuery = await _DbContext.Games
                .Include(game => game.GenresIdGenres)
                .Include(game => game.ParentPlatformsIdParentPlatforms)
                .Include(game => game.StoresIdStores)
                .Select(game => DtoHandlers.GameDto(game))
                .ToListAsync();

            if (genres.HasValue)
            {
                gamesQuery = gamesQuery
                    .Where(game => game.genres
                    .Any(genre => genre.id == genres.Value))
                    .ToList();
            }

            if (platforms.HasValue)
            {
                gamesQuery = gamesQuery
                    .Where(game => game.parent_platforms
                    .Any(parent => parent.platform
                    .Any(platform => platform.id == platforms)))
                    .ToList();
            }

            if (stores.HasValue)
            {
                gamesQuery = gamesQuery
                    .Where(game => game.stores
                    .Any(store => store.id == stores.Value))
                    .ToList();
            }

            return Ok(new ResponseDto<GameDto>
            {
                count = gamesQuery.Count,
                results = gamesQuery,
            });
        }
    }
}