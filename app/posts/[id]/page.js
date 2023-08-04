import React from 'react'

export default function PostPage({ params }) { // Los params ya vienen por defecto
  const { id } = params;
  
  return (
    <h1>Esto es el post: {id}</h1>
  )
}
