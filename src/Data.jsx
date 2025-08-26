import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const Data = () => {
    const [data, setData] = useState([])

    const apiData = async () => {
        const Api = await axios.get('https://dummyjson.com/recipes')
        setData(Api.data.recipes)
    }

    useEffect(() => {
        apiData()
    }, [])
    console.log(data)
    

    return (
        <>
            <Nav />
            <h1>Food Dishes Recipes</h1>
            <div style={{ display: "flex",flexWrap:"wrap",gap:"40px",justifyContent:"center"}}>
                {data && data.map((item) =>
                    <div style={{border:"2px solid"}}>
                        <img src={item.image} style={{ width: "250px" }} />
                        <h4>{item.name}</h4>
                    </div>
                )}
            </div>

        </>
    )
}

export default Data
