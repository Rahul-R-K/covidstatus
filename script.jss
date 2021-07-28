let country
function display(){
    
    getData()
}

async function getData(){
        country = document.getElementsByClassName('myText')[0].value;
        country= `${country[0].toUpperCase()}${country.slice(1)}`
    document.getElementsByClassName('myText')[0].value ="";
    //document.getElementsByClassName('main').value ="";
    try{
        let resul = await fetch("https://covid-api.mmediagroup.fr/v1/vaccines?country="+country)

     let resp = await fetch("https://covid-api.mmediagroup.fr/v1/cases?country="+country);
    let data = await resp.json();
    let data1 = await resul.json();
    let capital1=data1.All.people_vaccinated; let continent2=data1.All.people_partially_vaccinated; let expancy=data1.All.life_expectancy;
    console.log(data1)

    let confirm = data.All.confirmed; let recover = data.All.recovered;  let deaths =data.All.deaths;  let popul = data.All.population; 
     let capital = data.All.capital_city; let updated = data.All.updated;
     let conti = data.All.continent; 
        document.getElementsByClassName('main')[0].innerHTML = "Continent: "+conti;
        document.getElementsByClassName('main')[1].innerHTML = "Country: "+country;
        document.getElementsByClassName('main')[2].innerHTML = "Capital: "+capital; 
        document.getElementsByClassName('main')[3].innerHTML = "Population: "+popul; 
        document.getElementsByClassName('main')[4].innerHTML = "Confirmed Cases: "+confirm;
        document.getElementsByClassName('main')[5].innerHTML = "Recovered Cases: "+recover;
        document.getElementsByClassName('main')[6].innerHTML = "Deaths: "+ deaths;
        document.getElementsByClassName('main')[7].innerHTML = "Vaccinated: "+ capital1;
        document.getElementsByClassName('main')[8].innerHTML = "Partialy Vaccinated: "+ continent2;
        document.getElementsByClassName('main')[9].innerHTML = "Life Expectancy: "+ expancy;
     
    }
    catch{
        alert("Invalid Name")
    }
}
