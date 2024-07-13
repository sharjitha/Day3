import React, { useState , useEffect} from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import axios from 'axios';
import { useLocation} from 'react-router-dom';

const Add =()=> {
  const [form,setForm]=useState(
    {
    movieName:'' ,
    movieDirector: '',
    category:'' ,
    releaseYear:''
  }
)
const location=useLocation()
  function valueFetch(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    if(location.state!=null){
    
    axios.post('http://localhost:4000/newmovie'+location.state.val._id,form).then((res)=>{
      alert('Data added')
    }).catch((error)=>{
      console.log(error)
    })
  }else{
    axios.post('http://localhost:4000/newmovie',form).then((res)=>{
      alert('Data added')
    }).catch((error)=>{
      console.log(error)
    })
  }
}
useEffect(()=>{
  if(location.state!=null){
    setForm({...form,
      movieName:location.state.val.movieName,
      movieDirecor:location.state.val.movieDirector,
      category:location.state.val.category,
      releaseYear:location.state.val.releaseYear,
    })
  }
},[])
  return (
    
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="MovieName"
          variant="standard"
          name="movieName"
          value={form.movieName}
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
           required
           id="standard-required"
           label="movieDirector"
           variant="standard"
           name="movieDirector"
          value={form.movieDirector}
          onChange={valueFetch}
          />
          </div>
          <div>

        
        <TextField
           required
           id="standard-password-input"
           label="Category"
           variant="standard"
           name="category"
          value={form.category}
          onChange={valueFetch}
          />
           </div>
           <div>
        
        <TextField
           required
           id="standard-password-input"
           label="releaseYear"
           variant="standard"
           name="releaseYear"
          value={form.releaseYear}
          onChange={valueFetch}
          
        />
        </div>
        
       <div>
        <Button variant='contained' onClick={valueAdd}>ADD</Button>
       </div>
    </Box>
    
  )
}
export default Add