import React from 'react'
import  appwriteService  from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,content,imageFile}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-2xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img
  src={appwriteService.getFilePreview(imageFile?.$id || imageFile) || "/placeholder.png"}
  onError={(e) => (e.target.src = "/placeholder.png")}
  alt={title}
  className="rounded-xl w-full h-40 object-cover"
/>
            </div>
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
