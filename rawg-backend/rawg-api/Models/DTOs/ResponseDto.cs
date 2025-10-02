namespace rawg_api.Models.DTOs;

public class ResponseDto<T>
{
    public int count { get; set; }
    public List<T> results { get; set; } = new List<T>();
}