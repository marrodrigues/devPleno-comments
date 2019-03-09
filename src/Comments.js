import React from 'react'

import Comment from './Comment'

const Comments = ({comments}) =>  {
    let keys = []
    
    if(comments){
        keys = Object.keys(comments)
    } 
    
    return (
        <div>
            {/* Comment */ }
            { keys.map( key => <Comment key={key} c={comments[key]} />)}
        </div>
    )
    
}

export default Comments
