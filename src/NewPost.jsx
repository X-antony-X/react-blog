function NewPost({ postBody, setBody, postTitle, setTitle, handleSubmit }) {
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/4 mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md mt-50">
      
      <h2 className="text-2xl font-bold text-white mb-6">New Post</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">
            Title
          </label>
          <input
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">
            Post
          </label>
          <textarea
            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white resize-none"
            rows="4"
            required
            value={postBody}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white py-2 font-bold rounded-md hover:opacity-80"
        >
          ADD POST
        </button>
      </form>
    </div>
  )
}

export default NewPost
