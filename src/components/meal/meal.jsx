// import React, { useState } from 'react';
import './meal.css'


const Meal = ({meal,handleOrdered,isOrder}) => {
   const {strCategory,strCategoryThumb,strCategoryDescription} = meal;
//    const [orderDone,setOrderedDone] = useState(false); 
    return (
        <div className= {isOrder ? 'card-bg' : 'meal-card'}>
            <div>
                <img className='meal-img' src={strCategoryThumb}/>
                <h2>{strCategory}</h2>
                <p>{strCategoryDescription}</p>
                <button disabled={isOrder} onClick={() => {
                    handleOrdered(meal);
                    // setOrderedDone(true);
                }} style={{display:'block' ,margin:'0 auto'}}>
                    {
                        isOrder ? 'Ordered' : 'Order'

                    }
                </button>
            </div>
        </div>
    );
};

export default Meal;