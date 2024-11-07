//PIERWSZY KRAJ
let ctr1Place=document.getElementById("lup")
let img1=document.getElementById("country1")
let left=document.getElementById("left")
//DRUGI KRAJ
let ctr2Place=document.getElementById("rup")
let img2=document.getElementById("country2")
let right=document.getElementById("right")

//OGOLNE
let opcja=document.getElementById("Flags")
let next=document.getElementById("next")

let population1=document.getElementById("pop1")
let population2=document.getElementById("pop2")

var ctr1=0
var ctr2=0

async function getData(){
    const data=await fetch("https://restcountries.com/v3.1/region/europe")
    const json=await data.json()

    console.log(json)

    return json
}
getData()

async function game() {
    const data=await getData()

     ctr1=Math.floor(Math.random()*data.length)
    //console.log(ctr1)
    ctr2=Math.floor(Math.random()*data.length)
    //console.log(ctr2)
    while(ctr1==ctr2){
        ctr2=Math.floor(Math.random()*data.length)
        console.log("WYSTAPILO POWTRZORZENIE KRAJOW MEGA RARE EVENT")
    }
    img1.setAttribute("src", data[ctr1].flags.png)
    img2.setAttribute("src", data[ctr2].flags.png)

    //KOLEJNE LOSOWANIE
    next.addEventListener("click", function(){
        ctr1=Math.floor(Math.random()*data.length)
            ctr2=Math.floor(Math.random()*data.length)
        while(ctr1==ctr2){
            ctr2=Math.floor(Math.random()*data.length)
            console.log("WYSTAPILO POWTRZORZENIE KRAJOW MEGA RARE EVENT")
        }
        img1.setAttribute("src", data[ctr1].flags.png)
        img2.setAttribute("src", data[ctr2].flags.png)
        console.log("Wylosowano pomsylnie")
            left.style.backgroundColor="gray"
            right.style.backgroundColor="gray"
            console.log(data[ctr1].population)
            console.log(data[ctr2].population)
            population1.innerHTML=""
            population2.innerHTML=""
    })

    //Dobrze czy zle
    function wynikWyboru(which){
        if(which=="left" && data[ctr1].population>data[ctr2].population){
            console.log("masz racje kraj po lewo jest wiekszy")
            left.style.backgroundColor="lime"
            right.style.backgroundColor="darkred"
            population1.innerHTML=data[ctr1].population
            population2.innerHTML=data[ctr2].population
        }
        if(which=="left" && data[ctr1].population<data[ctr2].population){
            console.log("no niestety nie miales racji po lewej nie jest wieksza")
            left.style.backgroundColor="red"
            right.style.backgroundColor="darkgreen"
            population1.innerHTML=data[ctr1].population
            population2.innerHTML=data[ctr2].population
        }
        if(which=="right" && data[ctr1].population>data[ctr2].population){
            console.log("no niestety nie miales racji po prawej jest mniejszy")
            left.style.backgroundColor="darkgreen"
            right.style.backgroundColor="red"
            population1.innerHTML=data[ctr1].population
            population2.innerHTML=data[ctr2].population
        }
        if(which=="right" && data[ctr1].population<data[ctr2].population){
            console.log("masz racje kraj po prawej jest wiekszy")
            left.style.backgroundColor="darkred"
            right.style.backgroundColor="lime"
            population1.innerHTML=data[ctr1].population
            population2.innerHTML=data[ctr2].population
        }

    }
        //KLIKNIECIE LEWO LUB PRAWO
        left.addEventListener("click",function(){
            wynikWyboru("left")
        })
        right.addEventListener("click",function(){
            wynikWyboru("right")
        })

    // opcja.addEventListener("click",function(){
    //     choice()
    // })
}
game()