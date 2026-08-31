@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap'); 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --text:aliceblue;
    --black:black;
    --green:rgba(8, 136, 102, 0.948);
    --aqua:rgb(5, 227, 251);
    --ben:rgb(6, 250, 55);
}
nav{
    background-color: var(--black);
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    color: var(--text);
    justify-content: center;
   font-size: xx-large;


}
.box{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   


}
/* .box a{
    border: 2px solid ;
    border-radius: 15px;
    padding: 5px;
} */
.box1{
    display: flex;
    justify-content: space-evenly;
    gap: 30px;

}
body{
    font-family: 'Poppins', sans-serif;
    background-color: var(--green);
}
.back{
    display: flex;
}
.info{
    height: 70vh;
    width: 50%;
    font-size: 22px;
    font-weight: 500;
    color: aliceblue;
    border: 2px solid black;
    border-radius: 12px;
  
    background-color:rgba(0, 0, 0, 0.83);
    align-items: center;
    justify-content: center;
    margin: 10px;


}

.high{
      font-size: 70px;

}
.image{
    height: 70vh;
    width: 50%;
    display: flex;
   overflow-x: auto;
   
    scroll-behavior: smooth;
    scrollbar-width: none;
    gap: 20px;
    padding: 30px;

}
.place_card{
    
    
   
    
}
button{
    color: var(--ben);
    background-color: var(--black);
    border: 2px solid;
    border-radius: 12px;
    font-size: larger;
    font-weight: 700;
    padding: 20px;
}
.button{
    color: var(--aqua);
    background-color: var(--black);
    border: 2px solid;
    border-radius: 12px;
    font-size: larger;
    font-weight: 700;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
button a {
    color: var(--green);
}
.market{
    height: 80vh;
    width: 100%;
    border: 2px solid black;
    margin: 50px;
}
.market h1 {
    display: flex;
    justify-content: center;
    background-color:var(--black);
    border: 2px solid aliceblue;
    color: aliceblue;
    border-radius: 5px;
}
