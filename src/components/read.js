import { useEffect } from "react";
import Movies from "./movies";
import axios from 'axios';  

const Read = () => {
    const data = [];
    const [movies, setMovies] = useState(); // this can be used to set the state of the movies

    useEffect(
      () =>{
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') // get the data from the URL
        .then((response)=>{// function to say if the data is retrieved, then do something
        console.log(response.data)
        setMovies(response.data.movies); 
      })

        .catch(()=>{}); // function to say if the data is not retrieved, then do something
      }
    );

    return (
        <div>
            <h3>Hello from read component!</h3>
            <Movies myMovies={data}/>
        </div>
    );
}

export default Read;
//