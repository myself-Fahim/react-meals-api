import { Suspense } from 'react'
import './App.css'
import Meals from './components/meals/meals'


const mealsFetch = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then (res => res.json());




function App() {
  return (
    <>
    <Suspense  fallback={ <h3 >Meals Loading.....</h3>}>
      <Meals
       mealsFetch = {mealsFetch}
  
      ></Meals>
    </Suspense>
    
      
    </>
  )
}

export default App
