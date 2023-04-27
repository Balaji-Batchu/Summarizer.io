import React from 'react';

export default function Navbar(){
    return (
        <div className='flex justify-around align-center py-3 '>
            <p className="text-2xl font-semibold text-orange-400 hover:text-orange-500 hover:cursor-pointer">A.I GEN</p>
            <button className="px-3 py-1 bg-gray-500 rounded-lg text-white text-lg hover:bg-gray-600 shadow-lg">GitHub</button>
        </div>
    )
}