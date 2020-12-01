import React, { useState } from 'react';
import './Main.css';
import { Categories } from './Categories';
import menu from './data';
import { Menu } from './Menu';
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <React.Fragment>
      <div className="py-20 px-5 w-full mx-auto">
        <h2 
          className="text-3xl md:text-4xl text-center tracking-wider font-bold text-gray-800">Our Menu
        </h2>
        <div className="flex justify-center">
            <div className="h-1 w-24 bg-clr1 my-3"></div>
        </div>
        <div className="mt-2">
          <Categories filterItems={filterItems} categories={categories} />
        </div>
        <Menu items={menuItems} />
      </div>
    </React.Fragment>
  );
}

export default App;
