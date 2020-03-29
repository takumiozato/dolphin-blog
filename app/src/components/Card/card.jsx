import React from "react"
import cardStyle from "./style.module.css"

const Card = ({ key, title, createdAt }) => {
  return (
    <article key={key} className={cardStyle.card}>
      <span className={cardStyle.createdAt}>{createdAt}</span>
      <p className={cardStyle.title}>{title}</p>
    </article>
  )
}

export default Card
