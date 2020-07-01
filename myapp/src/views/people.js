import React from 'react'
import useFetcher from "../useFetcher"

function People(){
    const {loading, data,error}= useFetcher(' http://localhost:4000/people')
    if(loading){
        console.log('loading')
    }
    if(error){
        console.log(error)
    }
    return (
        <>
            <div className="moviesPage">
                {data.map((datum)=>(
                    <div className="peopleCard">
                        <h1 style={{fontSize:"20px", margin:"10px 1px"}}>{datum.name}</h1> <hr></hr><br></br>
                        <p>{datum.birth_year}</p>
                        <p>{datum.eye_color}</p>
                        <button>See More</button>
                    </div>
                ))}
            </div>
        </>
    )

}

export default People