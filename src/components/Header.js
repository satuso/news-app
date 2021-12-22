import { Link } from 'react-router-dom'

const Header = ({ setCategory, category }) => {
  const newdate = new Date()
  const date = newdate.toString().split('(')
  return (
    <div className='header'>
      <Link to='/'>
        <h1 onClick={() => setCategory('world')} aria-label='front page with world news'>
          News∙<span className='header-category'>{category}</span>
        </h1>
      </Link>
      <p className='header-date'>{date[0]}</p>
    </div>
  )
}
export default Header