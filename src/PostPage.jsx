import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function PostPage({
  posts,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
  handleDelete,
  done
}) {
  const { id } = useParams()
  const navigate = useNavigate()

  const post = posts.find(post => post.id === id)

  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])

  if (!post) {
    return (
      <p className="text-center text-red-500 mt-20">
        Post not found
      </p>
    )
  }

  return (
    <div className="mt-50 m-auto w-80 rounded shadow p-4 bg-white">
      <form>
        <label className="text-xs font-bold">Title</label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full p-2 mb-3 mt-1 border rounded focus:ring-2 focus:ring-sky-500"
        />

        <label className="text-xs font-bold">Body</label>
        <textarea
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          className="w-full h-32 p-2 mb-3 mt-1 border rounded resize-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          type="button"
          onClick={() => done(post.id)}
          className="w-full bg-sky-500 text-white p-2 rounded font-bold hover:bg-sky-400 mb-2"
        >
          Done
        </button>

        <button
          type="button"
          onClick={() => {
            handleDelete(post.id)
            navigate("/")
          }}
          className="w-full bg-red-500 text-white p-2 rounded font-bold hover:bg-red-400"
        >
          Delete post
        </button>
      </form>
    </div>
  )
}

export default PostPage
