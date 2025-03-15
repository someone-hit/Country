const nameList = document.querySelector('.countries');

const fetchData = async () => {

const response = await fetch('https://restcountries.com/v3.1/all');

const data = await response.json();

console.log(data); 

data.forEach(country  => {

    nameList.innerHTML += 
    
    `
    
    
    <li class="country">
    
       <img src="${country.flags.png}" >
       
   
        <div class="country-info">
           <p class="common">${country.name.common}</p>
           <p class="population"><span>Population</span>: ${country.population}</p>
           <p class="Region"><span>Region</span>: ${country.region}</p>
           <p class="capital"><span>Capital</span>: ${country.capital}</p>
        
        
        </div>
    
    
    
    </li>
    
    
    `
});

}
fetchData()
