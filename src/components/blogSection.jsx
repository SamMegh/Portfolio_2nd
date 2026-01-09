import blogs from '../assets/dataFiles/Blog.Data.json'


function BlogSection() {
  return (
    <div className='px-10 py-6 w-[20%] h-full overflow-hidden'>
      <h2 className='text-3xl mx-auto mb-4 font-bold tracking-[4px] w-fit'>
        BLOGS
      </h2>
      {blogs.slice(0,2).map((blog, index) => (
        <div key={index} className=' p-2 cursor-pointer'>
            <div className='aspect-video overflow-hidden rounded-2xl mb-0.5'>
              <img className='w-full h-full object-cover' src={blog.thumbnail} alt={blog.title} />
            </div>
          <h3 className='text-sm font-semibold mb-1.5 '>{blog.title}</h3>
            <p className='text-[10px] text-gray-300 mb-1 max-h-7.5 line-clamp-2'>{blog.description}</p>
        </div>
      ))}
      {blogs.length > 2 && (
        <div className='text-center '>
          <a href="/blogs" className='text-xs font-medium rounded-3xl border border-white px-10 py-3 inline-block hover:border-cyan-300 hover:text-cyan-300'>See All Blogs <span className=''>&gt;</span> </a>
        </div>
      )}
    </div>
  )
}

export default BlogSection
