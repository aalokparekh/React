import React from 'react'

const Post = ({title,body}) => {
  return (
    <div>
      <div className='main'>
      <h1>{title}</h1>
      <h5>{body}</h5>
      </div>
    </div>
  )
}

export default Post
