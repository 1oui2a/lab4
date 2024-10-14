import {useState} from 'react';

const Create = ()=>{

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

const handleSubmit = ()=>{
    e.preventDefault();
    console.log(title);
}

    return (
        <div>
          <h3>This is my Create Component.</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Movie Title: </label>
              <input 
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => { 
                    setTitle(e.target.value) 
                }}
                ></input>
            </div>

            <div>
              <label>Movie Year: </label>
              <input 
                type="text"
                className="form-control"
                value={year}
                onChange={(e) => { 
                    setYear(e.target.value) 
                }}
                ></input>
            </div>

            <div>
            <input type="submit" value="Add Movie" />
            </div>
          </form>
        </div>
      );
    }
export default Create;