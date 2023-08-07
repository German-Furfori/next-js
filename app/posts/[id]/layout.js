import PostComponent from './PostComponent';

export default function PostLayout({ children, params }) {
  const { id } = params;

  return (
    <div>
      <PostComponent id={id}/>
      {children}
    </div>
  )
}
