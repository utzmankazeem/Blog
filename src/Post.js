import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='Post'>
        <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='postDate'>
            {post.datetime}
        </p>
        </Link>
        <p className='postBody'>
            {
                (post.body).length <= 10 ? post.body :
                `${(post.body).slice (0,7)}`
            }
        </p>
       
    </article>
  )
}

export default Post