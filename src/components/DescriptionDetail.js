import React from 'react'

const DescriptionDetail = (props) =>{
    const {descr} = props;


    return(
        <div className="ui container">
            <h2 className="ui header">Descripción</h2>
            <p>
                {descr !== '' ? descr : 'No se encontro descripción' }
            </p>
        </div>
    )
}

export default DescriptionDetail;