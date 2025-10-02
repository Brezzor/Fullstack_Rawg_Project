using rawg_api.Models;

namespace rawg_api.Models.DTOs;

public class StoreDto
{
    public int id { get; set; }

    public StoreWrapperDto store { get; set; } = new StoreWrapperDto();
}

public class StoreWrapperDto
{
    public string name { get; set; } = string.Empty;
    public string? image_background { get; set; }
}