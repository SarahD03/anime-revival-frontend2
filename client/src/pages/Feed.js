import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const Feed = ({ user, authenticated }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const feed = await axios.get(`${BASE_URL}/posts/all`)
      setPosts(feed.data)
      console.log(feed.data)
    }
    handlePosts()
  }, [])

  return user && authenticated ? (
    <div>
      <h3>Welcome to your feed!</h3>
      <div>
        {posts.map((item) => (
          <div className="post-card">
            <img src={item.image} />
            <h3>{item.description}</h3>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h3>Please sign in to continue...</h3>
      <button>Signin</button>
    </div>
  )
}

export default Feed
