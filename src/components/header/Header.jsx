import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import searchIcon from './images/search-icon.png'
import cart from './images/cart.png'

function Header() {
  return (
    <div className="outer-wrapper"> 
		<header className="header-wrapper">
			<div className="internal-wrapper"> 
				<div className="header-links-wrapper">
					<ul>
						<li className="logo-link"><a href="/"><img src={logo} /></a></li>
						<li><a href="/mac/">Mac</a></li>
						<li><a href="#">iphone</a></li>
						<li><a href="#">ipad</a></li>
						<li><a href="#">watch</a></li>
						<li><a href="#">tv</a></li>
						<li><a href="#">Music</a></li>
						<li><a href="#">Support</a></li>
						<li className="search-link"><a href="/search/"><img src={searchIcon} /></a></li>
						<li className="cart-link"><a  href="/cart/"><img src={cart} /></a></li>
					</ul>					
				</div>
			</div>
        </header>
</div>
  )
}

export default Header;
