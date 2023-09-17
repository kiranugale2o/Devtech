import Reac from "react";
import './home.css';
import Card from "./Card";
export default function Home(){

    return(
        <>
              <div className="home">
                <div className="text-center p-3" id="p1" > {"<>Learn Programming Languages with Amazing Projects</>"}</div>
                <div className="container-fuild" id="cards">     
                           <Card></Card>
                           <br></br>
                           <Card></Card>
                           <br></br>
                           <Card></Card>
                           <br></br>
                           <Card></Card>
                </div>     
                </div>
 

       
       </>
    );
} 