import React, { Component } from 'react';

const Categories = (props) => {
    const{filterItems , categories} = props;
    console.log(categories);
    const handleClick = (type) => {
        filterItems(type)

    }
    return ( <div className="btn-container">
        {
            (categories.length > 0)
            ?(categories.map((item) => {
                return <button className="filter-btn" onClick={() => handleClick(item)}>{item}</button>
            }))
            :null
        }
        
    </div> );
}
 
export default Categories;