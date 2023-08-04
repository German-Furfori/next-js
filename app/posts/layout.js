import React from 'react'

export default function PostsLayout({children}) {
  return (
    <div>
      <h1>Este es el layout de los posts</h1>
      {children}
    </div>
  )
}
