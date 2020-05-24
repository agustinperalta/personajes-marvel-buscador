import React from 'react'


const ImageDetail = (props) =>{
    const {imagen} = props;
    const {path, extension} = imagen
    return(
        <div className="image-detail">
            <img src={path +"."+extension} alt="#"/>
        </div>
    )
}


export default ImageDetail;