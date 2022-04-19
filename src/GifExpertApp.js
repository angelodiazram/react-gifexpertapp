import { React, useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //? USO DEL HOOK 'useState':
    const [categories, setCategories] = useState(['Demon Slayer']);
    
    //? const handleAdd = ()=>{
    //?     setCategories([...categories, 'Demon Slayer']);
    //? }


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid
                                    key = { category }
                                    category = { category }/>
                    })

                }
            </ol>
        </>
    );
}
export default GifExpertApp