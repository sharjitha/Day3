const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sharjith_ambadi:sharjith_ambadi@cluster0.ytiwyis.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>(
    console.log('DB is connected')
)).catch((res)=>{
    console.log('DB not connected')
})