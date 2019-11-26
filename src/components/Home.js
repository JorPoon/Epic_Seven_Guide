import React, {useState, useEffect} from "react";
import axios from "axios"

const Home = () => {
    const [data, setData] = useState([]);
    const epicUrl = "https://api.epicsevendb.com/api/"
    const fetchCharacters = () => {
        axios.get(`${epicUrl}hero`)
        .then(res => {
            console.log(res.data.results)
            setData(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchCharacters();
    },[])
    console.log("Data from api....", data)
    return (
        <div>
            <h1>Hello</h1>
            {data.map(character => {
                return (
                    <div key={character._id}>
                        <h3>{character.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Home