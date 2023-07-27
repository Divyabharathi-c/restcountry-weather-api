const loadCountryAPI = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const countriesHTML = countries.map(country => getcountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}

const getcountry = (country) =>{
    console.log(country)
    return  `
    <div>
    <img src="${country.flags.png}">
    <h5>${country.name.common}</h6><br>
    <h6>Capital:${country.capital}</h6>
    <h6>Region:${country.region}</h6>
    <h6>Population:${country.population}</h6>
    <h6>Country Code:${country.idd.root}</h5>
    <button class="btn btn-primary" onclick="loadweather(${country.latlng[0]},${country.latlng[1]})">Cilck to Weather</button>

    </div> `
  }
 function loadweather(land,land1){

    
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${land}&lon=${land1}&appid=00fda11cf400fad84b33896ea4303e61`)
    .then(response => response.json())
    .then(data =>alert(data.main.temp))
 }

 
loadCountryAPI()




