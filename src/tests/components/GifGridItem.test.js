import { React } from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en el componente <GifGridItem />',()=>{

    const title = 'Soy el titulo';
    const url = 'https://localhost.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('debe de mostrar <GifGridItem /> correctamente',()=>{
        

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el title',()=>{
        
        const p = wrapper.find('p');
        console.log(p.html());
        expect( p.text().trim()).toBe(title);

    });

    test('debe tener al imagen igual al url y alt de los props',()=>{
        
        const img = wrapper.find('img');
        // console.log(img.props().src);

        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('el div debe de tener la clase css animate__fadeIn',()=>{
        
        const div = wrapper.find('.card');
        const className = div.props().className;
        console.log(className);
        // console.log(div.props().className);

        expect(className.includes('animate__fadeIn')).toBe(true);
    });

}); 