const request=require('request')
const Forecast=(latitude,longitude,location,callback)=>{

    request({url:`https://api.darksky.net/forecast/73d889d4b7631eefd9ba9f31d27d135b/${latitude},${longitude}?units=si`},(error,response)=>{

    if(error)
    {
      return console.log('No Internet Connection')
    }

  
         const data=JSON.parse(response.body)
if(data.error)
{
  return console.log(data.error)
}


         const forecasteddata="It is Currently " +data.currently.temperature +" degrees out there.And there is " +data.currently.precipProbability +" % chance of rain." 
callback(forecasteddata,data,location)
    
      
    })
}

module.exports=Forecast