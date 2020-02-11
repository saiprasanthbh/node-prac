  
 const express=require('express')
 const request=require('request')
 const app=express()
 const path=require('path')
 const hbs=require('hbs')
 const Forecast=require('./utils/Forecast')
 const Geocode=require('./utils/Geocode')

 const port=process.env.PORT || 3000

 app.use(express.static(path.join(__dirname,'../public')))

 app.set('view engine','hbs')


 hbs.registerPartials(path.join(__dirname,'../partials'))

app.get('',(req,res)=>{

    res.render('index',{title:'Weather',error:res.error})
})


 app.get('/weather',(req,res)=>{
    
     if(!req.query.address)
     {
     return  res.send('Address needs to be provided')
     }

 Geocode(req.query.address,(latitude,longitude,location)=>{
     if(res.error)
     {
       return  res.send({error:'Invalid Search location'})
     }
    
     Forecast(latitude,longitude,location,(forecasteddata,data,location)=>{

 res.send({forecasteddata:forecasteddata,temperature:data.currently.temperature,location:location,title:'Weather'})
     })
 })

 })    


 app.get('/help',(req,res)=>{
     res.render('help',{title:'Help',temperature:20,name:'Prasanth'})
 })


 app.get('/about',(req,res)=>{
    
     res.render('about',{title:'About',temperature:20,name:'Prasanth',address:req.query.address})
 })

 app.listen(port,(error,response)=>{console.log('server is running on port'+port)})


