    //Tid objektet
    const e = new Date();
    e.setDate(e.getDate() + 0);
    document.getElementById("klokkeslet").innerHTML = e;

    //Funktion for navn
    document.getElementById('navn').innerHTML = "<h4> Resturant Ciao Bella</h4>";
    //Funktion for adresse
        document.getElementById('adresse').innerHTML = "<h5> Adresse: Volden 73 8000 Aarhus C </h5>";
    //Funktion for telefonnummer
        document.getElementById('telefonnummer').innerHTML = "<h5> Tlf: 21727478</h5>";


    
    //For at få kvitteringen frem
    visliste.innerHTML = localStorage.getItem("liste")







    // Vejret     
    $(document).ready(function() {
    
    // get the weather data via query URI
    fetch("http://api.openweathermap.org/data/2.5/weather?q=maldives&lang=da&units=metric&appid=79dae5576f9b00d2e57efecb7798550a").then(response => {
        return response.json();
    }).then(data => {
    
        // Work with JSON data here
        console.log(data); // show what's in the json
        //Sådan hentes beskrivelser
        console.log(data.weather[0].description)
    
    
        //Solnedgang
        var sunsetMs = data.sys.sunset * 1000
        var sunset = new Date(sunsetMs)
        
        var minutter = sunset.getMinutes()    
        var minutterVis
    
        if (minutter <10) {
        minutterVis ="0" + minutter;
        }
        else {
            minutterVis = minutter;
        }
    
        //Solnedgang
         var sunsetTime = sunset.getHours() + ":" + minutterVis;
    
        //Solopgang
        var sunriseMs = data.sys.sunrise * 1000; // dato-objektet har brug for millisek. Derfor * 1000
        var sunrise = new Date(sunriseMs);
    
        // Minutter - tilføj 0 foran tal under 10
        var sunriseMinutter = sunrise.getMinutes()
        var sunriseMinutterVis
    
        if (sunriseMinutter<10){
          sunriseMinutterVis = "0" + sunriseMinutter;
        }
        else {
          sunriseMinutterVis = sunriseMinutter;
        }
    
        // Minutter - tilføj 0 foran tal under 10
        var sunriseTimer = sunrise.getHours()
        var sunriseTimerVis
    
        if (sunriseTimer<10){
          sunriseTimerVis = "0" + sunriseTimer;
        }
        else {
          sunriseTimerVis = sunriseTimer;
        }
    
        // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
        var sunriseTime = sunriseTimerVis + ":" + sunriseMinutterVis;
    
    
        //Vis på skærm
        honolulu.innerHTML = `
            <img id="ikon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="ikon"/>
            <p> ${data.weather[0].description} </p>
            <p> Temperatur: ${data.main.temp} </p>
            <p> Føles som: ${data.main.feels_like} </p>
            <p> Solnedgang: ${sunsetTime} </p>
            <p> Solopgang: ${sunriseTime} </p>
    
        `
    
    }).catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });
    
    }); 