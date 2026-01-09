import blogs from '../assets/dataFiles/Blog.Data.json'


function BlogSection({ className }) {
  return (
    <div className={`${className} py-6 flex items-center  h-full px-6`}>
        {/* main section */}
        <div className='w-[70%]'>

      <h2 className='text-4xl font-Merienda mx-auto mb-3 font-bold tracking-[5px] w-fit'>
        BLOGS
      </h2>
      {/* blog section */}
      <section >
      {blogs.slice(0,2).map((blog, index) => (
        <div key={index} className=' p-2 cursor-pointer'>
            <div className='aspect-video overflow-hidden rounded-2xl mb-0.5'>
              <img className='w-full h-full object-cover' src={blog.thumbnail} alt={blog.title} />
            </div>
          <h3 className='text-sm font-semibold mb-1.5 '>{blog.title}</h3>
            <p className='text-[10px] text-gray-300 mb-1 max-h-7.5 line-clamp-2'>{blog.description}</p>
        </div>
      ))}
      </section>
      {blogs.length > 2 && (
        <div className='text-center '>
          <a href="/blogs" className='text-xs font-medium rounded-3xl border border-white px-10 py-3 inline-block hover:border-cyan-300 hover:text-cyan-300'>See All Blogs <span className=''>&gt;</span> </a>
        </div>
      )}
      </div>
    </div>
  )
}

export default BlogSection
