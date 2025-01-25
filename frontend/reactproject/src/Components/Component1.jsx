import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Component1() {

const [moviename,setmoviename] = useState(0)
const[hero,sethero] = useState(0)
const[heroine,setheroine] = useState(0)
const[year,setyear] = useState(0)
const[rating,setrating] = useState(0)
const[genre,setgenre] = useState(0)

const apipostdata = async () => {

    try {
      const jsonobject =   await axios.post('http://127.0.0.1:3000/addmoviedata', {moviename, hero, heroine, year, rating, genre})
        console.log(jsonobject.data);
        alert("Data Added Successfully");
        
    } catch (error) {
        console.log(error);
        
    }
    

}

  return (
<>
    <h1>Movie Details</h1>
    <div className="App">
        <form> 
            <input type="text" placeholder='enter movie name' name="movie-name" id="moviename"
            onChange={(e) => setmoviename(e.target.value)} />

            <input type="text" placeholder='enter hero name' name="hero-name" id="heroname"
            onChange={(e) => sethero(e.target.value) }/>

            <input type="text" placeholder='enter heroine name' name="heroine-name" id="heroinename" 
            onChange={(e) => setheroine(e.target.value)}/>

            <input type="number" placeholder='year of release'  id="release"
            onChange={(e) => setyear(e.target.value)} />

            <input type="number" placeholder='rating'  id="rating"
            onChange={(e) => setrating(e.target.value)} />

            <input type="text" placeholder='enter movie genre'  id="genre"
            onChange={(e) => setgenre(e.target.value) }/>
            
            <input type="button" value='Add Data' onClick={apipostdata}></input>

        </form>
    </div>
</>)
}

export default Component1
  