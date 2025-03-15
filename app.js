const nameList = document.querySelector('.countries');
const searchInput = document.querySelector('.search-box input');
const regionSelect = document.querySelector('.sort select');

let countriesData = [];

const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countriesData = data;
    displayCountries(data);
};

const displayCountries = (data) => {
    nameList.innerHTML = "";
    data.forEach(country => {
        nameList.innerHTML += `
            <li class="country">
                <img src="${country.flags.png}" >
                <div class="country-info">
                    <p class="common">${country.name.common}</p>
                    <p class="population"><span>Population</span>: ${country.population}</p>
                    <p class="Region"><span>Region</span>: ${country.region}</p>
                    <p class="capital"><span>Capital</span>: ${country.capital}</p>
                </div>
            </li>
        `;
    });
};

const filterCountries = () => {
    const searchText = searchInput.value.toLowerCase();
    const selectedRegion = regionSelect.value.toLowerCase();
    
    let filteredCountries = countriesData.filter(country => 
        country.name.common.toLowerCase().includes(searchText)
    );
    
    if (selectedRegion && selectedRegion !== "") {
        filteredCountries = filteredCountries.filter(country => 
            country.region.toLowerCase() === selectedRegion
        );
    }
    
    displayCountries(filteredCountries);
};

searchInput.addEventListener("keyup", filterCountries);
regionSelect.addEventListener("change", filterCountries);

fetchData();