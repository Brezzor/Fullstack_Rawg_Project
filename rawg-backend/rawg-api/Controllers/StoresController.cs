using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rawg_api.Handlers;
using rawg_api.Models;
using rawg_api.Models.DTOs;

namespace rawg_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoresController : ControllerBase
    {
        private readonly rawg_dbContext _DbContext;

        public StoresController(rawg_dbContext dbContext)
        {
            _DbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<StoreDto> storesQuery = await _DbContext.Stores
                .Select(store => DtoHandlers.StoreDto(store))
                .ToListAsync();

            return Ok(new ResponseDto<StoreDto>
            {
                count = storesQuery.Count,
                results = storesQuery,
            });
        }
    }
}