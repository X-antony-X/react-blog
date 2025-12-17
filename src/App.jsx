import Header from './Header';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing.jsx';
import { Routes, Route ,useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';
import api from './api/posts.js'
import Loading from './Loading.jsx'
import ErrorMsg from './ErrorMsg.jsx';
import Loader from './Loader.jsx';
import { auth } from "./firebase"
import { onSnapshot } from "firebase/firestore"
import {  signInAnonymously } from "firebase/auth"
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy
} from "firebase/firestore"

import { db } from "./firebase"
import { v4 as uuidv4 } from "uuid"
import { where } from "firebase/firestore"

// npm i axios

function App() {
  const [posts,setPost] = useState([])

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle,setTitle] = useState("")
  const [postBody,setBody] = useState("")
  const [editTitle,setEditTitle] = useState("")
  const [editBody,setEditBody] = useState("")
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [loader,setLoader] = useState(true)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const minutes = date.getMinutes()
  const formattedMinutes = minutes.toString().padStart(2,"0")

  let hours = date.getHours()

  const AmPm = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12

  const fullTime = `${hours}:${formattedMinutes} ${AmPm}`
  const fullDate = `${month}/${day}/${year}`

const getDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId")

  if (!deviceId) {
    deviceId = uuidv4()
    localStorage.setItem("deviceId", deviceId)
  }

  return deviceId
}

const deviceId = getDeviceId()


  // useEffect(() => {setTimeout(() => setLoader(false),1000)},[])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoader(false)
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [])

useEffect(() => {
  const visited = sessionStorage.getItem("visited")

  if (visited) {
    setLoader(false)
  } else {
    const timer = setTimeout(() => {
      setLoader(false)
      sessionStorage.setItem("visited", "true")
    }, 2000)

    return () => clearTimeout(timer)
  }
}, [])


  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  }, [posts, search])


useEffect(() => {
  if (!user) return

  const q = query(
    collection(db, "posts"),
    where("uid", "==", user.uid),
    orderBy("createdAt", "desc")
  )

  const unsub = onSnapshot(q, snapshot => {
    const postsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setPost(postsData)
    setLoading(false)
  })

  return () => unsub()
}, [user])


useEffect(() => {
  signInAnonymously(auth)
    .then((res) => {
      setUser(res.user)
    })
    .catch(console.error)
}, [])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try{
  //       const response = await api.get("/posts")
  //       if (response && response.data) setPost(response.data)
  //       setError(null)
  //     }
  //     // } catch (err) {
  //     // if (err.response) {
  //     //   console.log("Response data:", err.response.data)
  //     //   console.log("Status:", err.response.status)
  //     //   console.log("Headers:", err.response.headers)

  //     //   setError(`Error ${err.response.status}`)
  //     // } else {
  //     //   console.log("Error message:", err.message)
  //     //   setError("Network Error")
  //     // }
  //     catch (err) {
  //       if (err.response) {
  //         setError(`Request failed with status ${err.response.status}`)
  //       } else {
  //         setError("Server not reachable. Check your connection.")
  //       }
  //     }
  //     finally {
  //      setLoading(false)
  //    }
  //   }

  //   setTimeout(fetchPosts,1500)
  // } , [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   // const id = posts.length ? posts[posts.length - 1].id + 1 : 1
  //   const newBlog = {title:postTitle,body:postBody,time:fullTime,date:fullDate}
  //   // try {
  //   //   const response = await api.post("/posts",newBlog)
  //   //   const postList = [...posts,response.data]
  //   //   setPost(postList)
  //   //   navigate("/")
  //   //   setTitle("")
  //   //   setBody("")
  //   // } catch (err) {
  //   //   console.log(`Error : ${err.message}`)
  //   // }
  // }

// const handleSubmit = async (e) => {
//   e.preventDefault()

//   try {
//     await addDoc(collection(db, "posts"), {
//       title: postTitle,
//       body: postBody,
//       time: fullTime,
//       date: fullDate,
//       createdAt: new Date()
//     })

//     setTitle("")
//     setBody("")
//     navigate("/")
//   } catch (err) {
//     console.log("Error adding post:", err.message)
//   }
// }

const handleSubmit = async () => {
  if (!user) return

  await addDoc(collection(db, "posts"), {
    uid: user.uid,   // 🔥 أهم سطر
    title: postTitle,
    body: postBody,
    time: fullTime,
    date: fullDate,
    createdAt: new Date()
  })

  setTitle("")
  setBody("")
  navigate("/")
}


  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postsList = posts.filter((post) => post.id !== id)
  //     setPost(postsList)
  //     navigate('/')
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "posts", id))
    setPost(posts.filter(post => post.id !== id))
    navigate("/")
  } catch (err) {
    console.log(err.message)
  }
}


  // const done = async (id) => {
  //   const postToEdit = posts.find(post => post.id === id)
  //   const updatedPost = {title:editTitle,body:editBody,time:postToEdit.time,date:postToEdit.date}

  //   if (!postToEdit) return

  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost)
  //     setPost(posts.map(post => post.id === id ? { ...response.data } : post))
  //     setEditTitle('')
  //     setEditBody('')
  //     navigate('/')
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`)
  //   }
  // }

const done = async (id) => {
  await updateDoc(doc(db, "posts", id), {
    title: editTitle,
    body: editBody
  })

  setEditTitle("")
  setEditBody("")
  navigate("/")
}

  if (loader) {
    return <Loader />
  }

  return (
    <>
      {loading && <Loading />}
      <Header search={search} setSearch={setSearch}/>
      {!loading && (
        <Routes>
          <Route path="/" element={error ? (<ErrorMsg error={error}/>) : (<Home posts={searchResults} />)} />
          <Route path="/post" element={<NewPost postBody={postBody} setBody={setBody} postTitle={postTitle} setTitle={setTitle} handleSubmit={handleSubmit} />} />
          <Route path="/post/:id" element={<PostPage done={done} posts={posts} handleDelete={handleDelete} setEditTitle={setEditTitle} setEditBody={setEditBody} editBody={editBody} editTitle={editTitle} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      )}
    </>
  )
}

export default App;
