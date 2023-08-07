const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000)); // La pag, haciendole enter desde la url, va a tardar 3 segs en cargar

  // throw new Error("Error"); Acá puse esto para ver el error.js

  return fetch(process.env.JSON_PLACEHOLDER_BASE_URL + process.env.JSON_PLACEHOLDER_POSTS + `/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json());
}

export default async function CommentsComponent({ id }) {
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#D8D9D9' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.email}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
