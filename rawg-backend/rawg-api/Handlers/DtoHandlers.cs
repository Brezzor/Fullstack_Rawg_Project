using rawg_api.Models;
using rawg_api.Models.DTOs;

namespace rawg_api.Handlers
{
    public static class DtoHandlers
    {
        public static GameDto GameDto(Game game) =>
            new GameDto
            {
                id = game.IdGames,
                name = game.Name,
                background_image = game.BackgroundImage,
                metacritic = game.Metacritic,
                parent_platforms = [.. game.ParentPlatformsIdParentPlatforms.Select(ParentPlatformDto)],
                genres = [.. game.GenresIdGenres.Select(GenreDto)],
                stores = [.. game.StoresIdStores.Select(StoreWrapperDto)]
            };

        public static ParentPlatformDto ParentPlatformDto(ParentPlatform parentPlatform) =>
            new ParentPlatformDto
            {
                platform = new List<ParentPlatformWrapperDto>
                {
                    new ParentPlatformWrapperDto{
                        id = parentPlatform.IdParentPlatforms,
                        name = parentPlatform.Name,
                        slug = parentPlatform.Slug
                    }
                }
            };

        public static StoreDto StoreDto(Store store) =>
            new StoreDto
            {
                id = store.IdStores,
                name = store.Name,
                image_background = store.ImageBackground
            };

        public static StoreWrapperDto StoreWrapperDto(Store store) =>
            new StoreWrapperDto
            {
                store = new List<StoreDto>
                {
                    StoreDto(store)
                }
            };

        public static GenreDto GenreDto(Genre genre) =>
            new GenreDto
            {
                id = genre.IdGenres,
                name = genre.Name,
                image_background = genre.ImageBackground
            };
    }
}