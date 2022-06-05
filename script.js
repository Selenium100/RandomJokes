{/* <button id="mybutton">ClickIt</button>

    <p id="mypara">Nitya</p> */}


 let button=   document.getElementById("mybutton");
 let paragraph=document.getElementById("mypara");


 try {

    let randomjokes=async () =>{



    


        let convert={
    
          headers: {
    
            Accept: "application/json"
    
          }
    
    
        };
    
    
    
     let res= await fetch("https://icanhazdadjoke.com/" , convert);
      let data= await  res.json();
      paragraph.innerHTML=data.joke;
    
    
    
     };
    
    
    
     button.addEventListener("click", randomjokes);
     randomjokes();
        
} catch (error) {
    
    console.log(error);
}



 