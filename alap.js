function keres(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '45f565189bmsha9804b734bfe1c1p17d39cjsnd0082a9997a8',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    let evszam = document.getElementById("beev").value   
    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+evszam, options)
        .then(x => x.json())
        .then(y => kiir(y))
        .catch(err => console.error(err));
    document.getElementById("kiirashelye").innerHTML = ""    
    
}



function kiir(tomb){
    console.log(tomb)
    let szam = 1

    if (tomb.d.length == 0)
    {
        document.getElementById("kiirashelye").innerHTML = "Nincs találat!"
    }
    else
    for (const elem of tomb.d) {
        
        let div = document.createElement("div")
        document.getElementById("kiirashelye").appendChild(div)
        div.style.border = "1px solid blue"
        let kep = document.createElement("img")
        div.appendChild(kep)
        kep.setAttribute("src",elem.i.imageUrl)
        kep.style.width = "300px"
        kep.setAttribute("class","img-fluid")
        let p = document.createElement("p")
        div.appendChild(p)
        p.innerHTML =szam + ". találat: " + elem.l
        szam++
        let p2 = document.createElement("p2")
        div.appendChild(p2)
        p2.innerHTML = elem.s +" <br>"
        let p3 = document.createElement("p3")
        div.appendChild(p3)
        p3.innerHTML ="Értékelés: " + elem.rank +"<br>"
        let p4 = document.createElement("p4")
        div.appendChild(p4)
        if (typeof elem.y === "undefined")
        {
            p4.innerHTML = "Év: Nincs adat!"
        }
        else
        {
            p4.innerHTML = "Év: " + elem.y
        } 
        div.style.textAlign = "center"
        p.style.fontSize = "20px"
        p2.style.fontSize = "15px"
        p3.style.fontWeight = "bold"
        p4.style.fontStyle = "italic"
        div.style.marginBottom = "20px"
        div.style.boxShadow = "5px 5px 5px black"
        div.style.padding = "20px"
    }
    
}
