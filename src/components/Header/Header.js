import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <h2>Food Anda</h2>
                <div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </nav>
            <section className='header-container'>
                <div className='header-details'>
                    <h1>Welcome To <br />Food Anda App !!!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem placeat, eligendi animi assumenda beatae officiis obcaecati illum unde. Excepturi, iusto.</p>
                </div>
            </section>
        </header>
    );
};

export default Header;