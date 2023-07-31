import React from 'react'
import Feed from './Feed'
const Home = ({posts, setPosts}) => {
  return (
    <main className='Home'>
          {posts.length ? 
          (<Feed posts={posts} />)
          : (<p style={{marginTop: "2rem", color: "red"}}> 
          No Post to display</p>)}
    </main>
  )
}

export default Home