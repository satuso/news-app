import { Link } from 'react-router-dom'

const Sidebar = ({ articles, category }) => {
  return (
    <div className='sidebar'>
      <h2 className='sidebar-header'>Recent News</h2>
      <h3 className='sidebar-subheader'>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <hr/>
      {articles.map(article => 
        <p key={article.id}>
          <Link to={`/${article.id}`}>{article.webTitle}</Link>
        </p>
      )}
    </div>
  )
}
export default Sidebar