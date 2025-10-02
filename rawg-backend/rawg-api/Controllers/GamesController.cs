using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rawg_api.Models;

namespace GamesController
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
        public async Task<IActionResult> GetGames()
        {
            return Ok(await _DbContext.Games
                .Include(game => game.GenresIdGenres)
                .Include(game => game.ParentPlatformsIdParentPlatforms)
                .Include(game => game.StoresIdStores)
                .ToListAsync());
        }
    }
}