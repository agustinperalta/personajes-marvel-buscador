import React from 'react'


const ListDetail = (props) =>{
    const {series} = props;

    if(series.items.length===0){
        return 'No hay series para este personaje'
    }

    return(
        <div className="list-series">
            <h2 className="ui header">Lista de Series</h2>
            {series.items.map(serie =>{
                return(<ul key={serie.resourceURI}>
                        <li>{serie.name}</li>
                        </ul>)
            })}
        </div>
    )
}

export default ListDetail;