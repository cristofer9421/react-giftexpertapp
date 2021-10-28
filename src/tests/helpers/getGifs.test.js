import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs Fecth', () => {
    
    test('debe de traer 15 elementos', async() => {
        
        const gifs = await getGifs('Gintama');

        expect( gifs.length ).toBe( 15 );

    })

    test('debe de traer 15 elementos', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    

})


