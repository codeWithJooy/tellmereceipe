const path=require('path')
const express=require('express')
const app=express()

const buildPath=path.join(__dirname,'../build')
const publicPath=path.join(__dirname,'../public')

const port=process.env.PORT || 3000
app.use(express.static(buildPath))
app.use(express.static(publicPath))

app.listen(port,()=>{
    console.log('Server is UP')
})