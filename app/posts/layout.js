import React from 'react'
import Counter from './Counter'

export default function PostsLayout({children}) {
  return (
    <div>
      <h1>Este es el layout de los posts</h1>
      <Counter/>
      <div>
        {children}
      </div>
    </div>
  )
}
