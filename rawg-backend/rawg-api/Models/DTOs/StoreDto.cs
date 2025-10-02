using rawg_api.Models;

namespace rawg_api.Models.DTOs;

public class StoreDto
{
    public int id { get; set; }
    public string name { get; set; } = string.Empty;
    public string? image_background { get; set; }
}

public class StoreWrapperDto
{
    public List<StoreDto> store { get; set; } = new List<StoreDto>();
}