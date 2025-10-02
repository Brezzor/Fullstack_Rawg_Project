using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rawg_api.Handlers;
using rawg_api.Models;
using rawg_api.Models.DTOs;

namespace rawg_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlatformsController : ControllerBase
    {
        private readonly rawg_dbContext _DbContext;

        public PlatformsController(rawg_dbContext dbContext)
        {
            _DbContext = dbContext;
        }

        [HttpGet]
        [Route("lists/parents")]
        public async Task<IActionResult> Get()
        {
            List<ParentPlatformDto> storesQuery = await _DbContext.ParentPlatforms
                .Select(store => DtoHandlers.ParentPlatformDto(store))
                .ToListAsync();

            return Ok(new ResponseDto<ParentPlatformDto>
            {
                count = storesQuery.Count,
                results = storesQuery,
            });
        }
    }
}