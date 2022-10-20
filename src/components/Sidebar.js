import { Link } from "react-router-dom"

const Sidebar = ({ articles, category }) => {
  return (
    <div className='sidebar'>
      <span className='sidebar-header'>Recent News • </span><span className='sidebar-subheader'>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
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