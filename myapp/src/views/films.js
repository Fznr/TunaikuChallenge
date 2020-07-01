import React from 'react'
import useFetcher from "../useFetcher"
// import Film from "../Components/film"

function Films(){
    const {loading, data,error}= useFetcher(' http://localhost:4000/films')
    if(loading){
        console.log('loading')
    }
    if(error){
        console.log(error)
    }
    return (
        <>
        <div className="moviesPage">
            {data.map((datum)=> (
                <div className="moviesCard">
                    <h1 style={{textAlign:"center"}}>{datum.title}</h1> <hr></hr> <br></br>
                    <h3>Episode :</h3>
                    <p>{datum.episode_id}</p>
                    <h3>Crawl :</h3>
                    <p>{datum.opening_crawl}</p>
                    <h3>Director :</h3>
                    <p>{datum.director}</p>
                    <h3>Producer :</h3>
                    <p>{datum.producer}</p>
                </div>
            ))}

        </div>
        </>
    )

}

export default Films