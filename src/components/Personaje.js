import React from 'react'



const Personaje = (props) =>{
    const {name, imagen, id} = props

    return(
        <a href={`?id=${id}`} className="ui card">
            <div className="content-image"><img src={imagen.path + "."+imagen.extension} alt={id} style={{height:"100%", width:"100%"}}/></div>
            <div className="content">
                <div className="header">{name}</div>
            </div>
        </a>
    )

}

export default Personaje;