const express=require('express');
const app=new express();
const PORT=4000;
const cors=require ('cors');
const movieModel=require('./model/movieData')
require('./connection');
//to fetch the movie data
app.use(cors())
app.use(express.json())
app.get('/movies',async(req,res)=>{
    console.log('inside')
    try{
        const data= await movieModel.find();
        console.log(data)
        res.send(data)
    } catch(error) {
        console.log()
    }
})

app.post('/newmovie',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const saveddata=await datasave.save();
        res.send('post succesful');
    }catch(error){
        console.log(error)
    }
})
app.listen(PORT,()=>{
    console.log("server is running on PORT 4000")
})