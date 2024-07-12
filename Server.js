const express=require('express')
const app=express()

const PORT=process.env.PORT || 6800

//Middleware
app.set('view engine','ejs')

app.get('/',(req,resp)=>{
    resp.render('index.ejs')
})


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})