import React from 'react';

export const Menu = ({ items }) => {
    return (
        <React.Fragment>
            <div className="m-10 w-full max-w-sm sm:max-w-xl lg:max-w-full mx-auto lg:grid lg:grid-cols-2 gap-x-20">
                {
                    items.map(item => {
                        return (
                            <div 
                                key={item.id} 
                                className="sm:flex sm:justify-between mt-12"
                            >
                                <img 
                                    src={item.img} 
                                    alt="food"
                                    className="w-full sm:w-52 h-48 object-cover border-clr1 border-4 rounded max-w-sm"
                                 />
                                <div 
                                    className="mt-5 sm:mt-0 divide-y divide-gray-300 sm:ml-3 max-w-sm"
                                >
                                    <div 
                                        className="flex justify-between pb-1"
                                    >
                                        <h3 className="font-semibold md:text-lg">
                                            {item.title}
                                        </h3>
                                        <h3 className="text-clr1 md:text-lg font-semibold">${item.price}</h3>
                                    </div>
                                    <p className="text-sm md:text-base pt-3 text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}
