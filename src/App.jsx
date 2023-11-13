import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 1', body: 'Descr' },
		{ id: 2, title: 'JavaScript 2', body: 'Descr' },
		{ id: 3, title: 'JavaScript 3', body: 'Descr' },
	])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

	return (
		<div className='App'>
			<PostForm create={createPost}/>
			<PostList posts={posts} title={'Список постов 1'} />
		</div>
	)
}
export default App
