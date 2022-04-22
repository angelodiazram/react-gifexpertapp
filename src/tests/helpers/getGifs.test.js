import { React } from "react";
import '@testing-library/jest-dom';


import { getGifs } from "../../helpers/getGifs";

describe('pruebas en el helper "getGifs" fetch', ()=>{
    
    test('debe de traer 10 elementos',async()=>{
        const gifs = await getGifs('Demon Slayer');

        expect(gifs.length).toBe(10);
    });



});