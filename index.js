let cars=["amaruthia","hyundai","atata","audia","kia","toyota","ahonda","bmw","ford","askoda"];

for(let i=0;i<=cars.length;i++){
   let first=cars[i].slice(0,1);
   let last=cars[i].slice(-1);
   
 if (first==="a"&&last==="a") {
    document.getElementById("demo").innerHTML+=cars[i]+"<br>";
      
}
}








  // document.getElementById("demo").innerHTML+=cars[i] + "<br>";
// //  console.log(cars[i]);
// }
// document.getElementById("demo").innerHTML+=cars[i].slice(-1) + "<br>"
