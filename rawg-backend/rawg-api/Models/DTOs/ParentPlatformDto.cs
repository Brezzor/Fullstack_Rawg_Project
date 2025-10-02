using rawg_api.Models;

namespace rawg_api.Models.DTOs;

public class ParentPlatformWrapperDto
{
    public int id { get; set; }
    public string name { get; set; } = string.Empty;

    public string slug { get; set; } = string.Empty;
}

public class ParentPlatformDto
{
    public List<ParentPlatformWrapperDto> platform { get; set; } = new List<ParentPlatformWrapperDto>();
}