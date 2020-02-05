
// getData=(event)=>{

//    const res= document.getElementById("i1".value)
//    console.log(res)
// }


const weatherform=document.querySelector('form')
const res=document.querySelector('input')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const result=res.value
console.log(res.value)
    // fetch('http://localhost:3000/?address='+ result).then((response)=>{  

    //     response.json().then((data)=>{
    //     console.log(data.features[0].place_name)
    //     }
    //     )
    //     }
    //     )


    document.querySelector('#message-1').textContent='Loading....'
    document.querySelector('#message-2').textContent=''


    fetch('http://localhost:5000/weather/?address='+ result).then((response) => response.json()).then((data)=>{
if(data.error)
{
    document.querySelector('#message-1').textContent=data.error
    console.log(data.error)
}
else{
    console.log(data.forecasteddata)
    document.querySelector('#message-2').textContent='Forecast::  '+data.forecasteddata
    document.querySelector('#message-1').textContent='Location::  '+data.location
}

    })

})

