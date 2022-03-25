const Card = ({ article }) => {
  return (
    <>
      <h2 className='card-header'>{article.webTitle}</h2>
      <p className='card-subheader' dangerouslySetInnerHTML={{__html: article.fields.trailText + "."}}></p>
      <img src={article.fields.thumbnail} alt={article.title}/>
      {article.media && <img src={article.media} alt={article.webTitle}/>}
    </>
  )
}
export default Card