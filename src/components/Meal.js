import React from "react";
import ReactDOM from "react-dom";
import {useRef} from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { PDFExport } from "@progress/kendo-react-pdf";

const Meal = ({ meal }) => {

    const divRef = React.useRef();
    const printRef = React.useRef();

    if(!meal) return null;

    const {
        strMealThumb,
        strMeal,
        strInstructions,
        strCategory,
        strArea,
        strTags,
        strYoutube,
        strSource,
        strIngredient1,
        strMeasure1,
        strIngredient2,
        strMeasure2,
        strIngredient3,
        strMeasure3,
        strIngredient4,
        strMeasure4,
        strIngredient5,
        strMeasure5,
        strIngredient6,
        strMeasure6,
        strIngredient7,
        strMeasure7,
        strIngredient8,
        strMeasure8,
        strIngredient9,
        strMeasure9,
        strIngredient10,
        strMeasure10,
        strIngredient11,
        strMeasure11,
        strIngredient12,
        strMeasure12,
        strIngredient13,
        strMeasure13,
        strIngredient14,
        strMeasure14,
        strIngredient15,
        strMeasure15,
        strIngredient16,
        strMeasure16,
        strIngredient17,
        strMeasure17,
        strIngredient18,
        strMeasure18,
        strIngredient19,
        strMeasure19,
        strIngredient20,
        strMeasure20
    } = meal;

    const recipe = () => {
        //alert('The button was clicked.');
        divRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const downloadPdfDocument = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('export.pdf');
    };

    return(
        
        <div className="container">
            <div className="meal-head">
                <h1 className="meal-title">{strMeal}</h1>
                <img className = "meal-image" src={strMealThumb} alt={strMeal}/>
                <div className="buttons">
                    <button onClick={recipe} className="btn">VIEW RECIPE  {/* <i className="fas fa-long-arrow-alt-right"></i> */}
                    </button>    
                    <button onClick={() => {
                            if (printRef.current) {
                                printRef.current.save();
                            }
                        }} className="btn" >DOWNLOAD RECIPE  {/* <i className="fas fa-arrow-down-to-line"></i> */}
                    </button>    
                    <button onClick={() => window.location.reload(false)} className="btn" >NEW RECIPE  {/* <i className="fas fa-long-arrow-alt-right"></i> */}
                    </button> 
                    <button className="btn link-btn"><a href={strYoutube} >WATCH VIDEO  {/* <i className="fas fa-long-arrow-alt-right"></i> */}</a></button>
                </div>
            </div>
        <PDFExport paperSize="A4" margin="0.7cm" font-size="0.5em" ref={printRef}>
            <div className="meal-details" ref={printRef} id="meal--details">
                <h2 className="meal-title" style={{padding: "20 0px"}}>{strMeal}</h2>
                <div className="meal-details-1">
                    <div className="ingredients" >
                        <h2 className="heading">Ingredients</h2>
                        <ul>
                        {strIngredient1 && strMeasure1 ? <li><strong>{strIngredient1}</strong> : {strMeasure1}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient2 && strMeasure2 ? <li><strong>{strIngredient2}</strong> : {strMeasure2}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient3 && strMeasure3 ? <li><strong>{strIngredient3}</strong> : {strMeasure3}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient4 && strMeasure4 ? <li><strong>{strIngredient4}</strong> : {strMeasure4}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient5 && strMeasure5 ? <li><strong>{strIngredient5}</strong> : {strMeasure5}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient6 && strMeasure6 ? <li><strong>{strIngredient6}</strong> : {strMeasure6}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient7 && strMeasure7 ? <li><strong>{strIngredient7}</strong> : {strMeasure7}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient8 && strMeasure8 ? <li><strong>{strIngredient8}</strong> : {strMeasure8}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient9 && strMeasure9 ? <li><strong>{strIngredient9}</strong> : {strMeasure9}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient10 && strMeasure10 ? <li><strong>{strIngredient10}</strong> : {strMeasure10}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient11 && strMeasure11 ? <li><strong>{strIngredient11}</strong> : {strMeasure11}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient12 && strMeasure12 ? <li><strong>{strIngredient12}</strong> : {strMeasure12}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient13 && strMeasure13 ? <li><strong>{strIngredient13}</strong> : {strMeasure13}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient14 && strMeasure14 ? <li><strong>{strIngredient14}</strong> : {strMeasure14}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient15 && strMeasure15 ? <li><strong>{strIngredient15}</strong> : {strMeasure15}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient16 && strMeasure16 ? <li><strong>{strIngredient16}</strong> : {strMeasure16}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient17 && strMeasure17 ? <li><strong>{strIngredient17}</strong> : {strMeasure17}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient18 && strMeasure18 ? <li><strong>{strIngredient18}</strong> : {strMeasure18}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient19 && strMeasure19 ? <li><strong>{strIngredient19}</strong> : {strMeasure19}</li> : null }
                        </ul>
                        <ul>
                            {strIngredient20 && strMeasure20 ? <li><strong>{strIngredient20}</strong> : {strMeasure20}</li> : null }
                        </ul>
                    </div>
                    <div className="tags-inst">
                        <div className="tags">
                            <ul className="meal-info" >
                                <li>
                                    CUISINE <strong>{strArea}</strong>
                                </li>
                                <li>
                                    TAGS <strong>{strCategory},{strTags}</strong>
                                </li>
                                <li>
                                    YOUTUBE <a href={strYoutube} className="links">{strMeal}</a>    BLOG <a href={strSource} className="links">{strMeal}</a>
                                </li>                       
                            </ul>
                        </div>
                        <div className="instructions" ref={divRef}>
                            <h2 className="heading">Instructions</h2>
                            <p className="meal-instructions">{strInstructions}</p>
                        </div>
                    </div>
                </div>

            </div>
            </PDFExport>
        </div>
        

        /*
        <div className="info" id="meal" ref={cRef}>
            <h1 className="meal-title" ref={printRef}>{strMeal}</h1>
            <div className = "meal">
                <div className="meal-img" >
                    <img src={strMealThumb} alt={strMeal}/>
                </div>
                <div className="meal-details" ref={printRef}>
                    <ul className="meal-info" >
                        <li>
                            CATEGORY <strong>{strCategory}</strong>
                        </li>
                        <li>
                            AREA <strong>{strArea}</strong>
                        </li>
                        <li>
                            TAGS <strong>{strTags}</strong>
                        </li>
                        <li>
                            YOUTUBE LINK <a href={strYoutube} className="links">{strMeal}</a>
                        </li>
                        <li>
                            SOURCE <a href={strSource} className="links">{strMeal}</a>
                        </li>                        
                    </ul>
                    <button onClick={recipe} className="btn" >VIEW RECIPE  <i className="fas fa-long-arrow-alt-right"></i>
                    </button>    
                    <button onClick={downloadPdfDocument} className="btn" >DOWNLOAD RECIPE  <i className="fas fa-long-arrow-alt-right"></i>
                    </button>    
                    <button onClick={recipe} className="btn" >NEW RECIPE  <i className="fas fa-long-arrow-alt-right"></i>
                    </button>    
                </div>
                
            </div>
            <div className="meal-instructions-div" ref={printRef} //ref={(el)=> {divRef(el); printRef(el);}}>
                <h2>Ingredients</h2>
                <ul>
                    {strIngredient1 && strMeasure1 ? <li><strong>{strIngredient1}</strong> : {strMeasure1}</li> : null }
                </ul>
                <ul>
                    {strIngredient2 && strMeasure2 ? <li><strong>{strIngredient2}</strong> : {strMeasure2}</li> : null }
                </ul>
                <ul>
                    {strIngredient3 && strMeasure3 ? <li><strong>{strIngredient3}</strong> : {strMeasure3}</li> : null }
                </ul>
                <ul>
                    {strIngredient4 && strMeasure4 ? <li><strong>{strIngredient4}</strong> : {strMeasure4}</li> : null }
                </ul>
                <ul>
                    {strIngredient5 && strMeasure5 ? <li><strong>{strIngredient5}</strong> : {strMeasure5}</li> : null }
                </ul>
                <ul>
                    {strIngredient6 && strMeasure6 ? <li><strong>{strIngredient6}</strong> : {strMeasure6}</li> : null }
                </ul>
                <ul>
                    {strIngredient7 && strMeasure7 ? <li><strong>{strIngredient7}</strong> : {strMeasure7}</li> : null }
                </ul>
                <ul>
                    {strIngredient8 && strMeasure8 ? <li><strong>{strIngredient8}</strong> : {strMeasure8}</li> : null }
                </ul>
                <ul>
                    {strIngredient9 && strMeasure9 ? <li><strong>{strIngredient9}</strong> : {strMeasure9}</li> : null }
                </ul>
                <ul>
                    {strIngredient10 && strMeasure10 ? <li><strong>{strIngredient10}</strong> : {strMeasure10}</li> : null }
                </ul>
                <ul>
                    {strIngredient11 && strMeasure11 ? <li><strong>{strIngredient11}</strong> : {strMeasure11}</li> : null }
                </ul>
                <ul>
                    {strIngredient12 && strMeasure12 ? <li><strong>{strIngredient12}</strong> : {strMeasure12}</li> : null }
                </ul>
                <ul>
                    {strIngredient13 && strMeasure13 ? <li><strong>{strIngredient13}</strong> : {strMeasure13}</li> : null }
                </ul>
                <ul>
                    {strIngredient14 && strMeasure14 ? <li><strong>{strIngredient14}</strong> : {strMeasure14}</li> : null }
                </ul>
                <ul>
                    {strIngredient15 && strMeasure15 ? <li><strong>{strIngredient15}</strong> : {strMeasure15}</li> : null }
                </ul>
                <ul>
                    {strIngredient16 && strMeasure16 ? <li><strong>{strIngredient16}</strong> : {strMeasure16}</li> : null }
                </ul>
                <ul>
                    {strIngredient17 && strMeasure17 ? <li><strong>{strIngredient17}</strong> : {strMeasure17}</li> : null }
                </ul>
                <ul>
                    {strIngredient18 && strMeasure18 ? <li><strong>{strIngredient18}</strong> : {strMeasure18}</li> : null }
                </ul>
                <ul>
                    {strIngredient19 && strMeasure19 ? <li><strong>{strIngredient19}</strong> : {strMeasure19}</li> : null }
                </ul>
                <ul>
                    {strIngredient20 && strMeasure20 ? <li><strong>{strIngredient20}</strong> : {strMeasure20}</li> : null }
                </ul>
                <h2>Method</h2>
                <p className="meal-instructions">{strInstructions}</p>
            </div>
        </div>*/
    )
}

export default Meal;