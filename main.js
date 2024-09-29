const key = "db5b1c1269e0933f5311111536a3f3ba"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector(".search input")
const search_btn = document.querySelector(".search button")
const w_icon = document.querySelector(".weather")
const info1 = document.querySelector(".info1")
const date = new Date()
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${key}`)
    let data = await response.json()

    console.log(data);

    document.querySelector(".location").innerHTML = data.name
     document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°"
     document.querySelector(".hum_procent").innerHTML = data.main.humidity + "%"
     document.querySelector(".w_pr").innerHTML  = Math.round(data.wind.speed) + "km/h"
     document.querySelector(".abjective").innerHTML = data.weather[0].main
     document.querySelector(".week_day").innerHTML = arr[date.getDay()]
     document.querySelector(".date").innerHTML = date.toLocaleDateString()

     if(data.weather[0].main == "Clouds") {
      info1.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sL8VneefCT5KjOVa2bVZgWtDdC4VxR7qXg&s')"
      w_icon.src = "https://cdn-icons-png.flaticon.com/512/6122/6122561.png"
     }
    else if(data.weather[0].main == "Clear") {
      info1.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJPr6qVG7dVdgnyOBADz_88T-dOEu8UURmQ&s')"
        w_icon.src = "https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-sun-icon-png-image_3773474.jpg"
       }
     else  if(data.weather[0].main == "Rain") {
      info1.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/12/29/22/50/rain-drop-4728348_1280.jpg')"
        w_icon.src = "https://cdn-icons-png.flaticon.com/512/7038/7038403.png"
       }
      else if(data.weather[0].main == "Drizzle") {
        info1.style.backgroundImage = "url('https://www.shutterstock.com/shutterstock/photos/2176486433/display_1500/stock-photo-transparent-umbrella-under-heavy-rain-against-water-drops-splash-background-rainy-weather-concept-2176486433.jpg')"
        w_icon.src = "https://cdn-icons-png.flaticon.com/512/2412/2412691.png"
       }
      else if(data.weather[0].main == "Mist") {
        info1.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Mv45Sotpq8sDn4Nq6Aq1fHpxqAj8JtWBvQ&s')"
        w_icon.src = "https://cdn-icons-png.freepik.com/512/2264/2264658.png"
       } else if(data.weather[0].main == "Snow") {
        info1.style.backgroundImage = "url('https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=612x612&w=0&k=20&c=LKQgMoqdgHP5PkelvEMdwXhCMG_M1XhGoFT27-Hjrk4=')"
        w_icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXOCKEwL1qBLhBCEc10VR-zjqaQcl8QersQ&s"
       } 

document.querySelector(".info1").style.display = "block"
document.querySelector(".procent").style.display = "flex"
}  
search_btn.onclick = () => {
    checkWeather(search.value)
}