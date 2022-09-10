import React, {useState, useEffect} from 'react'
import axios from 'axios'

//fetching data from one endpoint using useEffect
function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {console.log(error)})
    }, [id])

  return (
    <div>
        <input type="text" value={id} onChange= {e => setId(e.target.value)} />
      <h1>{post.title}</h1>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching