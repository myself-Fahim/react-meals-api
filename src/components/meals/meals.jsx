import React, { use,  useEffect,  useState } from 'react';
import Meal from '../meal/meal';
import './meals.css'
import { addItemStorage, getFromStorage } from '../../utilities/localStorage';

const Meals = ({mealsFetch}) => {
    const mealsData = use(mealsFetch);
    const allMeals = mealsData.categories;
    const [ordered,setOrdered] = useState([])
    
useEffect(()=>{
    const totalFindData = [];
    const storedData = getFromStorage();
    for(const strCat of storedData){
        const findData = allMeals.find(meal  => meal.strCategory === strCat )
        totalFindData.push(findData);
    }

  
    setOrdered(totalFindData);


},[])
 
   
    

    const handleOrdered = (meal)=>{
        const newOrdered = [...ordered,meal]
        setOrdered(newOrdered);
        addItemStorage(meal.strCategory)
    }
    return (

        <>
        <h1 style={{textAlign:'center'}}>Available Meals Item</h1>
        <div className='meals-container'>
            {
                allMeals.map(meal => <Meal
                     key={meal.idCategory} 
                     meal={meal}
                     handleOrdered={handleOrdered}
                     isOrder = {ordered.some(order => order.strCategory === meal.strCategory)}
                     ></Meal>)
            }
        </div>

        <h1 style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            Ordered List
        </h1>

        <div>
            <div className='order-list'>
                {
                    ordered.map(order => <div key={order.strCategory} className='order-design'>
                        <img style={{width:'100%'}} src={order.strCategoryThumb}/>
                        <h3>{order.strCategory}</h3>
                    </div>)
                }

            </div>
        </div>
        </>
    );
};

export default Meals;