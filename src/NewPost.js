import React from 'react'

const NewPost = ({handleSubmit, postBody, setPostBody, postTitle, setPostTitle}) => {
  return (
    <main className='NewPost'>
      <h2>New Post Content</h2>
        <form className='NewPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'> Title: </label>
        <p>
        <input 
          id='postTitle' 
          type='text' 
          required 
          value={postTitle} 
          onChange={(e)=>setPostTitle(e.target.value)}
        />
        </p>
        <label htmlFor='postBody'> Post: </label>
        <p>
        <textarea 
          id='postBody'
          required
          value={postBody}
          onChange={(e)=> setPostBody(e.target.value)}
        />
        </p>
        <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost