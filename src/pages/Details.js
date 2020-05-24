import React, {useEffect, useState} from 'react';
import TitleDetail from '../components/TitleDetail';
import ImageDetail from '../components/ImageDetail';
import DescriptionDetail from '../components/DescriptionDetail';
import ListDetail from '../components/ListDetail';
import {Button,Icon} from 'semantic-ui-react'

const Detail = (props) =>{
    const {id} = props
    const [personaje, setPersonaje] = useState([]);
    useEffect(()=>{
        _fetchPersonaje(id)
    },[])

    const _fetchPersonaje = (id) =>{
        const urlBase='https://gateway.marvel.com:443/v1/public/characters/', 
                apiKey = '73cb1894c920601c4f358151ecbdcfeb';
        fetch(`${urlBase}${id}?ts=1&apikey=${apiKey}&hash=6bc88886294118d38cdc9a43a6194fdb`)
        .then(res => res.json())
        .then(results => {
            let data = results.data;
            console.log(data.results);
            setPersonaje(data.results);
        })
    }

    const _goBack = (e)=>{
        window.history.back();
    }


    

    return(
        <div className="content-detail">
        {personaje.map(personaje =>{
            return(
            <div className="detail" key={personaje.id}>
                <TitleDetail name={personaje.name}/>
                <ImageDetail imagen={personaje.thumbnail}/>
                <div className="description-detail">
                <DescriptionDetail descr={personaje.description}/>
                <br/>
                <ListDetail series = {personaje.series}/>
                </div>
                <div className="button-detail">
                    <Button className="ui blue basic button" onClick={_goBack}><Icon name="arrow left"/>Volver al Listado </Button>
                </div>
            </div>
            )
        })}
           
        </div>
    )
}


export default Detail;