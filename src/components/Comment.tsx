import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import "../assets/styles/Comment.css"

interface CommentProps {
  id: number
  author: {
    name: string
    img: string
  }
  content: string
  publishedAt: Date
  onCommentDelete: (id: number) => void
}

export function Comment({
  id,
  author,
  content,
  publishedAt,
  onCommentDelete,
}: CommentProps) {
  const [likes, setLikes] = useState(0)

  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )
  const publishedSince = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleLike = () => {
    setLikes((prev) => prev + 1)
  }

  const handleCommentDelete = () => {
    onCommentDelete(id)
  }

  return (
    <div className="post-comment-outer">
      <img className="post-comment-author-img" src={author.img} alt="" />
      <div className="post-comment-inner-outer">
        <div className="post-comment">
          <header>
            <h1>
              {author.name}
              {id}
            </h1>
            <button
              className="post-comment-delete"
              onClick={handleCommentDelete}
            >
              <Trash />
            </button>
          </header>
          <time
            title={publishedAtFormatted}
            dateTime={publishedAt.toISOString()}
            className="post-published-at"
          >
            {publishedSince}
          </time>
          <div className="post-comment-content">
            <p>{content}</p>
          </div>
        </div>
        <button className="post-comment-like" onClick={handleLike}>
          <ThumbsUp size={20} />
          <span>
            Aplaudir • <span>{likes}</span>
          </span>
        </button>
      </div>
    </div>
  )
}
