import { NavLink } from "react-router-dom"
import { useState } from "react"
import Hamburger from "./Hamburger"

const Navbar = ({ setCategory }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className='navbar'>
      <div className='hamburger' onClick={handleClick} aria-label='open navigation menu'>
        <Hamburger />
      </div>
      <div className={toggle ? "navbar-links" : "navbar-links-hidden"}>
        <span 
          className='nav-link' 
          onClick={() => {
            setCategory("world")
            setToggle(!toggle)}}>
          <NavLink to='/world'>
            <i className="fas fa-globe-americas"></i> World
          </NavLink>
        </span>
        <span 
          className='nav-link'
          onClick={() => {
            setCategory("business")
            setToggle(!toggle)}}>
          <NavLink to='/business'>
            <i className='fas fa-briefcase'></i> Business
          </NavLink>
        </span>
        <span 
          className='nav-link' 
          onClick={() => {
            setCategory("technology")
            setToggle(!toggle)}}>
          <NavLink to='/technology'>
            <i className='fas fa-laptop'></i> Technology
          </NavLink>
        </span>
        <span 
          className='nav-link' 
          onClick={() => {
            setCategory("science")
            setToggle(!toggle)}}>
          <NavLink to='/science'>
            <i className='fas fa-flask'></i> Science
          </NavLink>
        </span>
        <span 
          className='nav-link' 
          onClick={() => {
            setCategory("culture")
            setToggle(!toggle)}}>
          <NavLink to='/culture'>
            <i className='fas fa-camera'></i> Culture
          </NavLink>
        </span>
        <span 
          className='nav-link'
          onClick={() => {
            setCategory("sport")
            setToggle(!toggle)}}>
          <NavLink to='/sport'>
            <i className='fas fa-basketball-ball'></i> Sport
          </NavLink>
        </span>
      </div>
    </div>
  )
}

export default Navbar