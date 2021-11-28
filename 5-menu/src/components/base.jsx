import React, { useState } from 'react';
import Categories from './categories';
import Menu from './menu';
import items from './data';


const tempCategories = new Set( items.map((item) => {
    return item.category
}))
const allCategories = ["all" , ...tempCategories]

const Base = () => {
    const [menuItems , setMenuItems] = useState(items);
    const [categories , setCategories] = useState(allCategories);
    const filterItems = (category) => {
        if(category === "all"){
            setMenuItems(items)
            return;
        }
        const newItems = items.filter((item) => {
            return item.category === category
        })
        setMenuItems(newItems) 
    }
    return ( <main>
        <section className="container">
            <div className="title">
                <h2>Our Menu</h2>
                <div className="underline"></div>
            </div>
            <Categories categories ={categories} filterItems= {filterItems} />
            <Menu items={menuItems} />
        </section>
    </main> );
}
 
export default Base;