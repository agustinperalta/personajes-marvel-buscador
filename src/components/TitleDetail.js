import React from 'react'

const TitleDetail = (props) =>{
    const {name} = props;
    return(
        <div className="title-detail">
            <h1 className="ui header">{name}</h1>
        </div>
    )
}

export default TitleDetail;