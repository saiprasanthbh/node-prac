const request=require('request')

const Geocode=(location,callback)=>{

    request({url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoicHJhc2FudGhzYWkiLCJhIjoiY2s1aHo2M2VnMDk2ZTNsbXNwdnBocmR4diJ9.aKLuAxO9K2TeK-FDBX_nWg`},(error,response)=>{
     

    if(error)
    {
        return console.log('No Internet Connection')
    }

    const data=JSON.parse(response.body)


if(data.features.length==0)
{
    return console.log('Error:Invalid search location')
}


        location=(data.features[0].place_name)
         longitude=data.features[0].center[0]
         latitude=data.features[0].center[1]
         console.log("Latitude:"+latitude)
        console.log("Longitude:"+longitude)
    callback(latitude,longitude,location)
      })

}

module.exports=Geocode