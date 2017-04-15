export const getPokemonId = (uri) => {
    return uri.match(/\/\d+\/$/g)[0].replace(/\//g, '');
}