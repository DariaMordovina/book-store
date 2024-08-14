import { useState } from "react";
import DataSlides from "./DataSlides";


const Slides =()=>{

    const[slides,setSlides]=useState(0);
    const{id,slogan,picture}=DataSlides[slides];

    const next =()=>{
        setSlides((slides=>{
            slides++;
            if(slides>DataSlides.length-1){
                slides=0;
            }
            return slides;
        }))
    }

    const back =()=>{
        setSlides((slides=>{
            slides--;
            if(slides<0){
              return DataSlides.length-1
            }
            return slides;
        }))
    }

    return( 
  
        
    <div className="parent">
        
        <div>
            
         <div className="parentBtn">
            <button className="icon btn" onClick={back}><img src="https://yaratam.design/img/svg/pagination-left-icon.svg" alt="icon" width="30px"/></button>
            <button className="icon btnTwo" onClick={next}><img src="https://yaratam.design/img/svg/pagination-right-icon.svg" alt="icon" width="30px"/></button>
    <img src={picture} alt="picture" width="850px" height="400px"/>


        </div>
        </div>
        <div className="parentOne" >
            <div className="container">
            <h3>ЧТО ПРИДУМАЛИ МОСЯН, ТУНСЮ и МАЙ?! </h3>
            <p> Узнайте в подборке новинок августа</p>
           
            </div>
            <div className="container">
            <h3>ЭКСКЛЮЗИВНО В НАШЕМ МАГАЗИНЕ! </h3>
            <p> Невозможно пропустить!</p>
           
            </div>
            <div className="container">
            <h3>ДАРИМ СКИДКУ! </h3>
            <p> Дарим скидку 30% на все книги обладателям подписки!</p>
           
            </div>
        </div>
        </div>
      
        
    )
}
export default Slides;