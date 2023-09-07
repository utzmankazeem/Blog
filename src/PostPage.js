import React from 'react'
import { Link, useParams } from 'react-router-dom'
const PostPage = ({posts, handleDelete, handleEdit }) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  return (
    <main className="Postpage">
       <article className='post'>
        {
         post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            {/* <button className='editButton' onClick={()=>handleEdit(post.id)}>
              Edit Post
            </button> */}
            <button className='deleteButton' onClick={()=>handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        }
        {
         ! post && 
          <>
            <h2>No Post found</h2>
            <p>The link does not refer to any post</p>
            <p><Link to="/">Visit our home page</Link></p>
          </>
        }

       </article> 
    </main>
  )
}

export default PostPage