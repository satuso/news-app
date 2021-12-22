import Card from './Card'

const Article = ({ article }) => {
  let text = article.fields.bodyText
  if (text.length > 400){
    text = `${text.substring(0, 400)}...`
  }
  const content = text.split('. ')
  function parseDate(date) {
    var d = date.split(/\D+/);
    return new Date(Date.UTC(d[0], --d[1], d[2], d[3], d[4], d[5], d[6]))
  }
  const parsedDate = parseDate(article.webPublicationDate).toString()
  const date = parsedDate.split('G')
  return (
    <div className='card'>
      <Card article={article} />
      <p className='card-author'>{article.fields.byline} <span>{date[0]}</span></p>
      <div className='filter'>
        {content.map((paragraph, index) => <p key={index}>{paragraph}.</p>)}
      </div>
      <p className='card-read'>
        <a href={article.webUrl} target='blank'>Read the full article at Guardian.com</a>
      </p>
    </div>
  )
}
export default Article