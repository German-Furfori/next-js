import Link from "next/link";

const fetchSinglePost = (id) => {
    return fetch(process.env.JSON_PLACEHOLDER_BASE_URL + process.env.JSON_PLACEHOLDER_POSTS + `/${id}`, {
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json());
}

export default async function PostComponent({ id }) {
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/posts/[id]/comments" as={`/posts/${post.id}/comments`}>
        Ver comentarios...
      </Link>
    </article>
  )
}
