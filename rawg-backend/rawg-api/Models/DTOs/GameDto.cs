using rawg_api.Models;

namespace rawg_api.Models.DTOs;

public class GameDto
{
    public int id { get; set; }
    public string name { get; set; } = string.Empty;
    public string? background_image { get; set; }
    public int? metacritic { get; set; }
    public List<ParentPlatformDto> parent_platforms { get; set; } = new List<ParentPlatformDto>();
    public List<GenreDto> genres { get; set; } = new List<GenreDto>();
    public List<StoreDto> stores { get; set; } = new List<StoreDto>();
}