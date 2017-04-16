import { getPokemonId, prettifyPokemonName, removeDash } from '../../src/utils';
import { expect } from 'chai';

describe('utils', () => {
    describe('getPokemonId', () => {
        it('shows correct pokemon ID', () => {
            const uri = 'http://pokeapi.salestock.net:8000/api/v2/pokemon-form/35/';
            const expected = '35';

            expect(getPokemonId(uri)).to.equal(expected);
        });
    });

    describe('prettifyPokemonName', () => {
        it('shows correct pokemon name', () => {
            const name = 'bulbasaur-plant-rose';
            const expected = 'Bulbasaur';

            expect(prettifyPokemonName(name)).to.equal(expected);
        })
    });

    describe('removeDash', () => {
        it('should remove dash from sentences', () => {
            const name = 'special-attack';
            const expected = 'special attack';

            expect(removeDash(name)).to.equal(expected);
        });
    });
});