import React, { useState, useEffect, useRef } from 'react'
import {Checkbox} from 'semantic-ui-react'
import getMarvelPersonajes from '../util/api'

const SearchForm = (props) =>{
    const {onResults, offset, currentOffset, activePage} = props
    const textInput = useRef();
    const [inputName, setInputName] = useState('');
    const [inputCheck, setInputCheck] = useState(false);
    
    useEffect(()=>{
        _getPersonajes();
    },[offset])

    const _handleChange = (e) => {
        setInputName(e.target.value);
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        currentOffset(0);
        activePage(1);
        
    }

    const _toogleChange = (e) =>{
        setInputCheck(!inputCheck);
    }
    
    
    const _getPersonajes = async() =>{
        const object = {offset: offset,name: inputName, exactMatch: inputCheck, limit:20}
        let data = await getMarvelPersonajes(object);
        console.log(data);
        onResults(data.data)
    }

    return(
        <div className="SearchBox">
            <form onSubmit={_handleSubmit}>
                <div className="ui action input">
                    <input type="text" onChange={_handleChange} placeholder="Nombre del personaje..." ref={textInput} />
                    <button className="ui button" onClick={_getPersonajes}>Search</button>
                </div>
                <Checkbox
                    name="exactName"
                    label = "Nombre Exacto"
                    onChange={_toogleChange}
                    />
            </form>
        </div>
    )
}

export default SearchForm;