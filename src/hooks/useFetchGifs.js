import { useEffect, useState } from 'react';
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category)=> {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{

        getGift(category)
            .then((imgs)=>{

                setTimeout(() => {
                    
                    // console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    });
                    
                }, 4000);

            });

    },[category])

    // setTimeout( ()=>{
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000 )

    return state;

};