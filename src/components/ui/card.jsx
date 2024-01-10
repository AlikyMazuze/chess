import { cn } from '@/lib/utils'
import React from 'react'

function Card({title, body, src, className}) {
  return (
    <div className={cn (["card w-96 bg-transparent shadow-xl rounded-md", className])}>
      <figure><img src={src} alt="Imagem" /></figure>
      <div className="card-body bg-transparent">
        <h2 className="card-title text-zinc-900">{title}</h2>
        <p className='text-zinc-700'>{body}</p>
      </div>
    </div>
)
}

export default Card