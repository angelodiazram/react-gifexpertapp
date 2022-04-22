
export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=LqvxHnfkyk8BmPPzEAdAqhOT7G62By4w`;
    const resp = await fetch(url);
    const {data} = await resp.json(); 
        //usamos desestructuracion, recogemos solo la data de la data.

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
        /*
        cons esta funcion gifs recorremos el arrglos de la data para extraer
        los elementos internos que nos interesan como el ID de las imagenes
        */
    // console.log(gifs); 
    return gifs; 
}