import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Meal from './Meal';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const FeaturedMeal = () => {
    const [meal, setMeal] = useState(undefined);
    
    useEffect(() => {
    async function getMeal(){
        const res = await fetch(API_URL);
        const data = await res.json();

        setMeal(data.meals[0]);
    }

    getMeal();

    }, [])

    if(!meal) return null;

    return(
        <section className="container">
        <Meal meal = {meal} />
        </section>
    )
}

export default FeaturedMeal;