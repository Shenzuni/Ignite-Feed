import React, { useState } from "react"

import { format } from "date-fns"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Comment } from "./Comment"

import { commentsMock } from "../utils/local"

import "../assets/styles/Post.css"

interface PostProps {
  id: number
  author: {
    name: string
    description?: string
    img: string
  }
  content: {
    type: string
    text: string
  }[]
  publishedAt: Date
}

export function Post({ id, author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(commentsMock)
  const [writingComment, setWrittingComment] = useState("")

  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )
  const publishedSince = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleWriteComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("")
    setWrittingComment(e.currentTarget.value)
  }

  const handleInvalidWriteComment = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.target.setCustomValidity("Esse campo é obrigatório")
  }

  const onCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setComments([
      ...comments,
      {
        id: comments.length,
        content: writingComment,
        author: {
          name: "Shenzuni",
          img: "https://github.com/shenzuni.png",
        },
        publishedAt: new Date(),
      },
    ])
    setWrittingComment("")
  }
  const onCommentDelete = (id: number) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => id !== comment.id
    )
    setComments(commentsWithoutDeletedOne)
  }

  const isNotWritingComment = writingComment === "" ? true : false

  return (
    <div className="post">
      <div>
        <header className="post-header">
          <div className="post-author">
            <img className="post-author-img" src={author.img} alt="" />
            <div className="post-author-info">
              <h1 className="post-author-name">{author.name}</h1>
              <h2 className="post-author-description">{author.description}</h2>
            </div>
          </div>
          <time
            title={publishedAtFormatted}
            dateTime={publishedAt.toISOString()}
            className="post-published-at"
          >
            {publishedSince}
          </time>
        </header>
        <div className="post-content">
          {content.map(({ type, text }) => {
            if (type === "paragraph") {
              return <p key={text}>{text}</p>
            }
            if (type === "anchor") {
              return (
                <a key={text} href={text} className="anchor-text">
                  {text}
                </a>
              )
            }
          })}
        </div>
      </div>
      <form className="post-comment-form" onSubmit={onCommentSubmit}>
        <h1>Deixe seu feedback</h1>
        <textarea
          onChange={handleWriteComment}
          onInvalid={handleInvalidWriteComment}
          value={writingComment}
          name="comment"
          placeholder="Seu comentário..."
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={isNotWritingComment}>
            Publicar
          </button>
        </footer>
      </form>
      <section className="post-comment-section">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            {...comment}
            onCommentDelete={onCommentDelete}
          />
        ))}
      </section>
    </div>
  )
}
