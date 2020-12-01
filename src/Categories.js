import React from 'react';

export const Categories = ({ filterItems, categories }) => {
    return (
        <React.Fragment>
            <div className="w-full mx-auto max-w-xs text-center">
                {
                    categories.map((category, index) => {
                        return (
                            <button
                                type="button"
                                className="text-clr1 text-lg hover:bg-clr1 hover:text-white py-1 px-4 rounded cursor-pointer transition ease-in-out duration-500 btn" 
                                key={index} 
                                onClick={() => filterItems(category)}
                            >
                                {category}
                            </button>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}
