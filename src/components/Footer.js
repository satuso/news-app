const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='footer'>
      <p>© News {year}</p>
    </div>
  )
}
export default Footer