var url_data = fetch("https://restcountries.com/v3.1/all");
url_data.then((data)=>data.json()).then((data1)=>{
    console.log(data1)
    foo(data1)
   
})
var cont =document.createElement("div")
cont.className='cont'


function foo(data1){
    for(i=0;i<data1.length;i++){
        console.log(data1[i])
        var col = document.createElement("div")
        col.className="col"
        col.innerHTML+=`  <div class="card">
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Country:${data1[i].name.common}</h5>
          <h6 class="card-text">SubRegion:${data1[i].subregion}</h6>
          <h6 class="card-text">Population:${data1[i].population}</h6>
          <p class="card-text">Capital:${data1[i].capital[0]}</p>
        </div> `
        
        cont.append(col)
        document.body.append(cont)
    }
}