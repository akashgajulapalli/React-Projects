import React, { Component } from 'react';
import Review from './review';
import "./../App.css"

const Main = () => {
    return ( <main>
        <section className="container">
            <div className="title">
                <h2>Our Reviews</h2>
                <div className="underline"></div>
            </div>
            <Review />
        </section>
    </main> );
}
 
export default Main;