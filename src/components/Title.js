import React from 'react'
import {Header} from 'semantic-ui-react'

const Title = (props) => {
    const {content} = props
    return(
        <div className="Title">
            <Header as='h1'>{content}</Header>
        </div>
    )
}

export default Title;