function openBrewery(input) {
input.map((n)=> {
    document.body.innerHTML +=`<div class="nav-container">
    <div class="container">
       <p><span>Name:</span> ${n.name}</p>
       <p><span>Type:</span>${n.brewery_type}</p>
       <p><span>Address:</span>${n.address_2}</p>
       <p><span>Phone number:</span>${n.phone}</p>
       <p><span>Website Url:</span> 
      <a href=${n.website_url}>link</a></p>
    </div>
    </div>`
        
    });
}
async function getUser(){
   try{
      const data=await fetch("https://api.openbrewerydb.org/breweries",{
         method:"GET",
      });
      Const breweries=await data.json()
      console.log(openBrewery(breweries))
   } catch(rejected){
      console.log(rejected)
   }
}
getUser()
