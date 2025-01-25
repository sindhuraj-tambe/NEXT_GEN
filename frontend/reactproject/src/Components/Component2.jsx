import React from 'react'
import 
function Component2() {
  const getMovieData = async () => {
    try{
      const jsonobject=
      await axios,get ('http://127.0.0.1:3000/getmoviedata')
      console.log(jsonobject.data)

    }
    
  return (
    <div><h1>Get Movie Data</h1></div>
  )
}

export default Component2