import React from 'react'
import Personaje from './Personaje'

const ListPersonaje = (props) =>{
    const {personajes} = props;
        return(
            <div className="list-personaje">
               {personajes.map(personaje => {
                    return(
                    <div className="item-personaje" key={personaje.id}>
                        <Personaje 
                        id={personaje.id}
                        name={personaje.name}
                        imagen={personaje.thumbnail}/>
                    </div>
                    )
                })}
            </div>

        ) 
    
}

export default ListPersonaje;