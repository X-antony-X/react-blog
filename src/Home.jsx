import { Link } from "react-router-dom"

function Home({posts}) {
    return (
<div className="flex flex-wrap gap-5 p-4 align-center justify-center mt-45">
        {posts.length ? ( posts.map((post) =>
            <Link to={`/post/${post.id}`}>
                <div key={post.id} class="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
                    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#000000" fill="none" viewBox="0 0 24 24" class="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400" xmlns="http://www.w3.org/2000/svg"> <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect> <line y2="21" x2="16" y1="21" x1="8"></line> <line y2="21" x2="12" y1="17" x1="12"></line></svg>

                    <p class="font-bold text-2xl group-hover:text-white text-black/80">
                        {post.title}
                    </p>

                    <p class="text-gray-400 text-sm break-all whitespace-normal">{
                        (post.body).length <= 25
                        ? post.body
                        : `${(post.body).slice(0,60)} ......`
                    }</p>

                    <p style={{WebkitTextStroke: "1px gray",WebkitTextFillColor: "transparent"}} className="text-sm font-bold self-end">
                        <p>{post.time}</p>
                        <p>{post.date}</p>
                    </p>
                </div> 
            </Link>
        ) ): (<p className="text-center mt-10 text-[#0f0] font-bold text-lg mt-50">There is no posts to display</p>)
        }
</div>
    )
}

export default Home