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
    
// Menukort

menu = `{
    "Menu": [
    {
    "ID": 1,
    "Typeret": "Forret",
    "Titel": "Tartar",
    "Beskrivelse": "Hjemmerørt tartar med kapers og kartoffelchips",
    "Pris": 65,
    "billeder": "tartar.jpeg"
    },
    {
    "ID": 2,
    "Typeret": "Forret",
    "Titel": "Laks",
    "Beskrivelse": "Varmrøget laks med aspares og grønt",
    "Pris": 65,
    "billeder": "laks.jpeg"
    },
    {
    "ID": 3,
    "Typeret": "Hovedret",
    "Titel": "Langtidsbrasseret svinekæber",
    "Beskrivelse": "Tilberedt i 8 timer med bær og rødvinssovs",
    "Pris": 175,
    "billeder": "svin.jpeg"
    },
    {
    "ID": 4,
    "Typeret": "Hovedret",
    "Titel": "Entrecote",
    "Beskrivelse": "Lækker grillet entrecote med hjemmerørt bearnaise ",
    "Pris": 185,
    "billeder": "entrecote.jpeg"
    },
    {
    "ID": 5,
    "Typeret": "Dessert",
    "Titel": "Isbombe",
    "Beskrivelse": "Nyfortolkning af isdesserten med kiksebund, toppet med marengs",
    "Pris": 90,
    "billeder": "isbombe.jpeg"
    },
    {
    "ID": 6,
    "Typeret": "Dessert",
    "Titel": "Varm chokoladekage",
    "Beskrivelse": "Varm chokoladekage med frisk frugt og sorbet. ",
    "Pris": 70,
    "billeder": "choko.jpeg"
    },
    {
    "ID": 7,
    "Typeret": "Tilbehør",
    "Titel": "Fritter",
    "Beskrivelse": "Hjemmelavet fritter",
    "Pris": 20,
    "billeder": "fritter.jpeg"
    },
    {
    "ID": 8,
    "Typeret": "Tilbehør",
    "Titel": "Spidskål toppet med parmasan",
    "Beskrivelse": "Stegt spidskål toppet med revet parmasan",
    "Pris": 20,
    "billeder": "spids.jpeg"
    }
]
}`;

const xxx = JSON.parse(menu);
console.log(xxx.Menu[0].Titel);


for (let i=0; i<xxx.Menu.length; i++){

    if( xxx.Menu[i].Typeret == 'Forret' ){ //forret henviser til navnet i JSON under titlen "ret" 
          console.log('Desserter\n\n' + xxx.Menu[i].Titel) //bare console.log ikke noget vigtigt
          forret.innerHTML += `
            <div class="menuTing">
              <h3> ${xxx.Menu[i].Titel} </h3>
                <img class="billeder" src="images/${xxx.Menu[i].billeder}" alt="${xxx.Menu[i].Titel}">
                <p> ${xxx.Menu[i].Beskrivelse} </p>
              <p> ${xxx.Menu[i].Pris} kr. </p>
            </div>
          `
        }
  
        if( xxx.Menu[i].Typeret == 'Hovedret' ){
              console.log('forretter\n\n' + xxx.Menu[i].Titel)//bare console.log ikke noget vigtigt
              hovedret.innerHTML += `
                <div class="menuTing">
                  <h3> ${xxx.Menu[i].Titel} </h3>
                    <img class="billeder" src="images/${xxx.Menu[i].billeder}" alt="${xxx.Menu[i].Titel}">
                    <p> ${xxx.Menu[i].Beskrivelse} </p>
                  <p> ${xxx.Menu[i].Pris} kr. </p>
                </div>
              `
            }
  
            if( xxx.Menu[i].Typeret == 'Dessert' ){
                  console.log('Desserter\n\n' + xxx.Menu[i].Titel)//bare console.log ikke noget vigtigt
                  dessert.innerHTML += `
                    <div class="menuTing">
                      <h3> ${xxx.Menu[i].Titel} </h3>
                        <img class="billeder" src="images/${xxx.Menu[i].billeder}" alt="${xxx.Menu[i].Titel}">
                        <p> ${xxx.Menu[i].Beskrivelse} </p>
                      <p> ${xxx.Menu[i].Pris} kr. </p>
                    </div>
                  `
                }
      }


      //Kurv samt bestillingsknap
      let sum = 0

      //let gem = sessionStorage.setItem("test",23) //Denne bruges ved f.eks. en fastsat fragt. Den skal bruges som en variabel 

      //Forret - Tartar
      foto.addEventListener('click',
      function(){
          bestillinger.innerHTML += "<p> En forret af tartar er tilføjet til kurven</p>" //Ved denne linje er det teksten der bliver ført over i kurven 
          sum = sum + 90
          ialt.innerHTML = sum;
          //bestillinger.innerHTML += parseInt (sessionStorage.getItem("test")) + parseInt (sessionStorage.getItem("test")) //Når du skriver parsInt () så laver den en string om, så flere stinge kan blive lagt sammen
      })

      //Forret - Laks
      lakse.addEventListener('click',
      function(){
          bestillinger.innerHTML += "<p> En forret af laks er tilføjet til kurven</p>" //Ved denne linje er det teksten der bliver ført over i kurven 
          sum = sum + 90
          ialt.innerHTML = sum;
          //bestillinger.innerHTML += parseInt (sessionStorage.getItem("test")) + parseInt (sessionStorage.getItem("test")) //Når du skriver parsInt () så laver den en string om, så flere stinge kan blive lagt sammen
      })


      //Hovedret - Svinekæde
      ur.addEventListener('click',
      function(){
          bestillinger.innerHTML += "<p> En hovedret af svinekæbe er tilføjet til kurven</p>" //Ved denne linje er det teksten der bliver ført over i kurven
          sum = sum + 150
          ialt.innerHTML = sum;
      })


      //Hovedret - Entrecote
      entrecote3.addEventListener('click',
      function(){
          bestillinger.innerHTML += "<p> En hovedret af entrecote er tilføjet til kurven</p>" //Ved denne linje er det teksten der bliver ført over i kurven
          sum = sum + 150
          ialt.innerHTML = sum;
      })


      //Dessert - isbombe
      vejr.addEventListener('click',
      function(){
          bestillinger.innerHTML += "<p> En dessert af isbombe er tilføjet til kurven</p>" //Ved denne linje er det teksten der bliver ført over i kurven
          sum = sum + 50
          ialt.innerHTML = sum;
      })


      //Dessert - Chokoladekage
      choko3.addEventListener('click',
      function(){
          bestillinger.innerHTML += "<p> En dessert af varm chokoladekage er tilføjet til kurven</p>" //Ved denne linje er det teksten der bliver ført over i kurven
          sum = sum + 50
          ialt.innerHTML = sum;
      })


      // Translate knapper Engelsk
      function translation(){
        document.getElementById("betal").innerHTML = "Order to pay here"
        document.getElementById("forstetekst").innerHTML = "Starters"
        document.getElementById("tartar").innerHTML = "Tartar <br> Price: 90 DKK,-"
        document.getElementById("tartar2").innerHTML = "Homemade tartar with capers and chips"
        document.getElementById("laks").innerHTML = "Salmon <br> Price: 90 DKK,-"
        document.getElementById("laks2").innerHTML = "Hot smoked salmon with asparagus and greens"
        document.getElementById("translate3").innerHTML = "Main courses"
        document.getElementById("svin").innerHTML = "Long-breasted pork jaws <br> Price: 150 DKK,-"
        document.getElementById("svin2").innerHTML = "Cooked for 8 hours with berries and red wine sauce"
        document.getElementById("entrecote").innerHTML = "Entrecote <br> Price: 150 DKK,-"
        document.getElementById("entrecote2").innerHTML = "Delicious grilled entrecote with homemade bearnaise"
        document.getElementById("translate4").innerHTML = "Desserts"
        document.getElementById("isbombe").innerHTML = "Icebomb <br> Price: 50 DKK,-"
        document.getElementById("isbombe2").innerHTML = "Reinterpretation of the ice cream dessert with biscuit base, topped with meringue"
        document.getElementById("choko").innerHTML = " Chocolate cake <br> Price: 50 DKK,-"
        document.getElementById("choko2").innerHTML = "Hot chocolate cake with fresh fruit and sorbet"
        document.getElementById("kurv").innerHTML = "Basket"
        document.getElementById("samlede").innerHTML = "Your total amount:"
      } 

      // Translate knapper Dansk
      function getDanishTranslation(){
        document.getElementById("betal").innerHTML = "Gå til betaling"
        document.getElementById("forstetekst").innerHTML = "Forretter"
        document.getElementById("tartar").innerHTML = "Tartar <br> Pris: 90,-"
        document.getElementById("tartar2").innerHTML = "Hjemmerørt tartar med kapers og kartoffelchips"
        document.getElementById("laks").innerHTML = "Laks <br> Pris: 90,-"
        document.getElementById("laks2").innerHTML = "Varmrøget laks med aspares og grønt"
        document.getElementById("translate3").innerHTML = "Hovedretter"
        document.getElementById("svin").innerHTML = "Langtidsbrasseret svinekæber <br> Pris: 150,-"
        document.getElementById("svin2").innerHTML = "Tilberedt i 8 timer med bær og rødvinssovs"
        document.getElementById("entrecote").innerHTML = "Entrecote <br> Pris: 150,-"
        document.getElementById("entrecote2").innerHTML = "Lækker grillet entrecote med hjemmerørt bearnaise"
        document.getElementById("translate4").innerHTML = "Desserter"
        document.getElementById("isbombe").innerHTML = "Isbombe <br> Pris: 50,-"
        document.getElementById("isbombe2").innerHTML = "Nyfortolkning af isdesserten med kiksebund, toppet med marengs"
        document.getElementById("choko").innerHTML = "Chokoladekage <br> Pris: 50,-"
        document.getElementById("choko2").innerHTML = "Varm chokoladekage med frisk frugt og sorbet"
        document.getElementById("kurv").innerHTML = "Kurv"
        document.getElementById("samlede").innerHTML = "Dit samlede beløb:"
      } 

        //betal knap
        betal.addEventListener('click',function (){
          localStorage.setItem("liste",bestillinger.innerHTML)
      }) 