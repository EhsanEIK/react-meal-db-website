import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;