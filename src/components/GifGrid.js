import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data, loading} = useFetchGifs(category);

    // useEffect(()=>{
    //     getGift(category)
    //         .then(imgs => setImages(imgs));
    // }, [category]);




    return (
        <>
            <h3>{category}</h3>

            {loading && <p>loading</p>}
                {/* operador ternario reducido*/}
            <div className="card-grid">
                
                {
                    data.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        /> 
                    ))
                }    
                
            </div>
        </>
    );
};