import CommentsComponent from "./CommentsComponent";

export default function CommentsPage({ params }) {
  const { id } = params;

  return (
    <div>
      <CommentsComponent id={id}/>
    </div>
  )
}