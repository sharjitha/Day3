import React from 'react'

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'
import {Button,Table} from '@mui/material';



// const rows = [
//  {
    
//     MOVIENAME:"1. The Shawshank Redemption",
//     CATEGORY:"Drama",
//     DIRECTOR:"Frank Darabont",
//     YEAR:1994,
//     RATING:9.4,
//     POSTOR:"https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg"

//   },
//   {
//     MOVIENAME:"2. The Godfather",
//     CATEGORY:"Crime,Drama",
//     DIRECTOR:"Francis Ford Coppola",
//     YEAR:1972,
//     RATING:9.2,
//     POSTOR:"data:image/jpeg;base64,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"

//   },
//   {
//     MOVIENAME:"3. The Dark Knight",
//     CATEGORY:"Action,Crime,Drama",
//     DIRECTOR:"Christopher Nolan",
//     YEAR:2008,
//     RATING:9.0,
//     POSTOR:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"

//   },
//   {
//     MOVIENAME:"4. The Godfather Part II",
//     CATEGORY:"Crime,Drama",
//     DIRECTOR:"Francis Ford Coppola",
//     YEAR:1974,
//     RATING:9.0,
//     POSTOR:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"

//   },
//   {
//     MOVIENAME:"5. 12 Angry Men",
//     CATEGORY:"Crime,Drama",
//     DIRECTOR:"Sidney Lumet",
//     YEAR:1957,
//     RATING:9.0,
//     POSTOR:"https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"

//   }
// ];


const Filim =() => {
  const [rows,setRows]=useState([])
  useEffect(()=>{
      axios.get('http://localhost:4000/movies').then((res)=>{
          console.log(res);
          setRows(res.data);
      })
  },[])
  return (
    
       
        <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 ,backgroundColor:'grey'}} aria-label="simple table">
      <TableHead> 
        <TableRow sx={{ '& td, & th' : { border: 2 } }}> 
          <TableCell><b>movieName</b></TableCell>
          
          <TableCell align="right"><b>movieDirector</b></TableCell>
          <TableCell align="right"><b>category</b></TableCell>
          <TableCell align="right"><b>releaseYear</b></TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.movieName}
            sx={{ '&:last-child  td , &:last-child th ': { border : 0} }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.movieDirector}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            <TableCell align="right"><Button variant="contained" color="secondary">Edit</Button></TableCell>
            <TableCell align="right"><Button variant="contained" color="error">Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Filim