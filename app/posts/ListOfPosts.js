import Link from "next/link";
import LikeButton from "./LikeButton";

const baseURL = process.env.JSON_PLACEHOLDER_BASE_URL;
const postsPath = process.env.JSON_PLACEHOLDER_POSTS

const fetchPosts = async () => { // Ni useEffect, ni useState
  // return fetch(baseURL + postsPath) De esta forma, next.js me crea un posts.html estático, con los 5 primeros datos que recupera del fetch
  // El /posts me aparece con '○' por ser estático

  //return fetch(baseURL + postsPath, { cache: 'no-store' }) 
  // Si quiero que este fetch ocurra constantemente, cache: 'no-store' es algo nativo de la plataforma web
  // Básicamente le digo que esto no lo tiene que guardar en cache, o sea: que esto sea SSR. Con esta forma, el /posts me aparece con λ
  
  // Le hago acá también un timeout para apreciar el loading.js
  await new Promise(resolve => setTimeout(resolve, 2000));

  return fetch(baseURL + postsPath, {
    next: {
      revalidate: 60
    }
  })
  // Incremental Static Regeneration, cada 60 segs, si recibió una request, revalidaría y haría otro fetch para regenerar
  // el archivo estático. Ahora volvió a ser '○', justamente por ser estático
    .then(res => res.json());
}

export async function ListOfPosts() { // Ya no voy a poner el useEffect llamando a las funciones async
  // El fetching de datos cambia mucho porque esta page.js funciona con SSR, no la renderizo en el cliente
  // Esta page.js está en el servidor, se renderiza ahí. Entonces que sea async porque tiene que esperar
  // A la respuesta del otro svr, el de jsonPlaceholder
  const posts = await fetchPosts();

  return posts.slice(0, 10).map(post => (
    <article>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}> 
        <h2>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton
        id={post.id}
      />
    </article>
  ));
}
