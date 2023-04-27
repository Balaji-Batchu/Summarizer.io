import React from "react";
import Loading from './Loading';
import {useState, useEffect} from "react";
import {BsSearch} from "react-icons/bs";
import {CiLocationArrow1} from "react-icons/ci";
import {FaAngleDoubleUp} from "react-icons/fa";
import {useLazyGetSummaryQuery} from '../services/article';

export default function Demo(){

    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();
    const [allArticles, setAllArticles] = useState([]);
    const [article, setArticle] = useState(
        {
            url:'',
            summary:'',
        }
    )

    useEffect(()=>{
        localStorage.setItem('articles',JSON.stringify([]));
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem('articles')
        )

        if(articlesFromLocalStorage){
            setAllArticles(articlesFromLocalStorage)
        }
    },[])

    //console.log(allArticles);

    async function handleSubmit(e){
        e.preventDefault();         
        const urlExists = allArticles.find(a => a.url === article.url);
        console.log(urlExists,"from manual")
        if(urlExists !== undefined){
            const data = JSON.parse(localStorage.getItem('articles',article.url)) 
            //console.log(data);
            getArticle(data);
        }
        else{
            const {data} = await getSummary({articleUrl: article.url});
            getArticle(data);
        }
    }

    function getArticle(data){
        if (data?.summary){
            const newArticle = {...article,summary: data.summary};
            const updatedArticle = [newArticle, ...allArticles];
            setArticle(newArticle);
            setAllArticles(updatedArticle);
            //console.log(newArticle,isFetching);
            localStorage.setItem('articles',JSON.stringify(updatedArticle));
        }
        else if(isFetching){
            console.log("data fetching please wait!!!");
        }
        else{
            console.log(error);
        }
    }

    function handleHistoryClick(url) {
        const article = allArticles.find(a => a.url === url);
        setAllArticles([article, ...allArticles.filter(a => a.url !== url)]);
    }

    return(
        <div className="font-">
            <div className="flex flex-col w-full gap-2 py-4 ">
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className="relative flex items-center w-full max-w-lg drop-shadow-xl">
                        <BsSearch className="absolute left-3 text-black" size="20"/>
                        <input
                        type="url"
                        placeholder="Enter a URL"
                        className="py-2 pl-10 pr-12 px-2 w-full rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-zinc-100 text-center h-10"
                        value={article.url} onChange={(e)=>setArticle({...article, url:e.target.value})}
                        />
                        <button type="submit" className="absolute right-3 h-8 w-8 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-pink-400 ">
                        <CiLocationArrow1 className="h-5 w-5 text-black hover:text-white" />
                        </button>
                    </div>
                </form>
                {/*Display results*/}
                {isFetching ? <Loading /> : 
                    <div className="backdrop-filter backdrop-blur-lg bg-opacity-10 mx-2 md:mx-36 leading-loose bg-sky-100 p-4 rounded-md self-center text-justify">
                {allArticles.length > 0 && <p className="font-bold text-3xl text-gray-700 self-start py-1">Article <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-sky-400 ">Summary</span></p>}
                        {
                             allArticles[0] && <div><p className="font-bold ">{allArticles[0].url}</p><p className="font-semibold text-zinc-800">{allArticles[0].summary}</p></div>
                        }
                    </div>
                }
                {/* history*/}
                <div className="z-0 bg-gray-100 bg-opacity-40 mx-6 md:mx-36 rounded-lg">
                    <p className="font-bold hover:underline hover:cursor-pointer text-orange-500 text-2xl underline-offset-2  decoration-violet-400">History : </p>
                    {allArticles.length == 0 && <p className="my-4 font-semibold text-gray-800">You haven't started your task yet</p>}
                    <div className="">
                        {allArticles.reduce((unique, article) => {
                            return unique.includes(article.url) ? unique : [...unique, article.url];
                        }, []).map((url, i) => {
                            const article = allArticles.find(a => a.url === url);
                            return (
                            <div key={i} className=" group bg-blue-100 hover:bg-sky-300 hover:text-gray-800 hover:cursor-pointer text-gray-600 mx-4 h-10 w-auto items-center justify-center pt-1 z-8 rounded-xl my-2" onClick={() => handleHistoryClick(url)}>
                        <h2 className="font-bold flex justify-center items-center gap-2 ">
                            {article.url.length > 45 ? (
                                <>
                                {article.url.slice(0, 45)}...
                                </>
                            ) : (
                                <>
                                {article.url}
                                </>
                            )}
                            <FaAngleDoubleUp className="group-hover:text-pink-400 group-hover:scale-125"/>
                            </h2>

                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>             
        </div>
    )
}