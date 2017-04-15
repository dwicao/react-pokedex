import { getPokemonId } from '../../src/utils';
import { expect } from 'chai';

describe('utils', () => {
    describe('getPokemonId', () => {
        it('shows correct pokemon ID', () => {
            const uri = 'http://pokeapi.salestock.net:8000/api/v2/pokemon-form/35/';
            const expected = '35';

            expect(getPokemonId(uri)).to.equal(expected);
        });
    });
});