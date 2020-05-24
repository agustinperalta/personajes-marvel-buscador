import axios from 'axios';
const marvelURL = 'https://gateway.marvel.com:443/v1/public/characters?', 
      apiKey = '73cb1894c920601c4f358151ecbdcfeb';

const getMarvelPersonajes = async (options) =>
{
    const {offset, name, exactMatch, limit} = Object.assign({offset: 0, name: '',exactMatch:false, limit:20},options)

    let url = `${marvelURL}ts=1&apikey=${apiKey}&hash=6bc88886294118d38cdc9a43a6194fdb&offset=${offset}&limit=${limit}`
    if (name){
        if (exactMatch){url += `&name=${name}`;}
        else{url += `&nameStartsWith=${name}`;}
    }

    return new Promise(async (res, rej) =>{
        try{
            let data = await axios.get(url).then(p => {return p.data} );
            res(data);
        }catch(err){
            rej(err);
        }
    })
}

export default getMarvelPersonajes;