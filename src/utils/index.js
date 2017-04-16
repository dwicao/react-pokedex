export const getPokemonId = (uri) => {
    return uri.match(/\/\d+\/$/g)[0].replace(/\//g, '');
}

export const prettifyPokemonName = (name) => {
    if (!name) return;

    const pokemon = name.match(/^\w+/g)[0];
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
}

export const removeDash = (name) => {
    if (!name) return;
    
    return name.replace(/\-/g, ' ');
}