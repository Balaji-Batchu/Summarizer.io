import React from "react";
import Navbar from './Navbar';

export default function Hero(){
    return(
        <div className="mx-4">
            <Navbar />
            <h1 className="text-6xl font-bold leading-tight py-3">Summarize Articles with<br className="max-md:hidden"/> <span className="hover:underline decoration-purple-400 decoration-4 underline-offset-4 hover:cursor-pointer text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500">OpenAI GPT-4</span></h1>
            <p className="text-gray-600 font-semibold leading-relaxed">Don't spend lot of time on summarizing . . .<br/> Let us do it for You</p>
        </div>
    )
}