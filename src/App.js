import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('world')
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState(null)

  const API_KEY=process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`https://content.guardianapis.com/search?section=${category}&api-key=${API_KEY}&show-fields=all&page-size=30`)
      .then(data => {
        setArticles(data.data.response.results)
        setMessage(null)
      })
      .catch(err => setMessage(err.toString()))
  }, [API_KEY, category])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <ScrollToTop>
      <Header setCategory={setCategory} category={category} />
      <Navbar articles={articles} setCategory={setCategory}/>
      <div className='container'>
        <div className='content'>
          {message}
          <Routes>
            <Route path='/' element={<Navigate replace to="/world" />}/>
            {articles.map(article =>
            <Route path={`/${article.id}`} element={<Article article={article}/>} key={article.id}/>)}
            <Route path='/world' element={articles.map(article => <Articles key={article.id} article={article}/>)}/>
            <Route path='/business' element={articles.map(article => <Articles key={article.id} article={article}/>)}/>
            <Route path='/technology' element={articles.map(article => <Articles key={article.id} article={article}/>)}/>
            <Route path='/science' element={articles.map(article => <Articles key={article.id} article={article}/>)}/>
            <Route path='/culture' element={articles.map(article => <Articles key={article.id} article={article}/>)}/>
            <Route path='/sport' element={articles.map(article => <Articles key={article.id} article={article}/>)}/>
            </Routes>
        </div>
        <Sidebar category={category} articles={articles}/>
      </div>
      <Footer />
      <div className='scroll-up'>
        {isVisible && (
          <div onClick={scrollUp} aria-label='scroll to top of page'><i className="fas fa-arrow-up"></i></div>
        )}
      </div>
      </ScrollToTop>
    </>
  )
}

export default App