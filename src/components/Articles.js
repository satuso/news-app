import { Link } from "react-router-dom"
import Card from "./Card"

const Articles = ({ article }) => {
  const parseDate = (date) => {
    let d = date.split(/\D+/)
    return new Date(Date.UTC(d[0], --d[1], d[2], d[3], d[4], d[5], d[6]))
  }
  const parsedDate = parseDate(article.webPublicationDate)
  const now = new Date()
  const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000]]
  
  const timeAgo = (date) => {
    let diff = Math.round((now - date) / 1000)
    for (let i = 0; i < times.length; i++) {
      if (diff < times[i][1]) {
        if (i === 0) {
          return "Just now"
        } else {
          diff = Math.round(diff / times[i - 1][1])
          return diff + " " + times[i - 1][0] + (diff === 1?" ago":"s ago")
        }
      }
    }
  }
  const date = timeAgo(parsedDate).toString()
  return (
    <Link to={`/${article.id}`}>
      <div className='card' aria-label='read article'>
        <Card article={article} />
        <p className='card-date'>{date}</p>
      </div>
    </Link>
  )
}

export default Articles
