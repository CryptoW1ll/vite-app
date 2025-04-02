import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'


export default function RecipeSearch() {
    //const [data, setData] = useState(recipeData)
    //const [intervalValue, setIntervalValue] = useState(0.01);

    const [data, setData] = useState(null) //const [data, setData] = useState("")


    // Function to fetch a random recipe
    const fetchRecipe = async () => {
        try 
        {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const result = await response.json();
            setData(result);
        } 
        catch (error) 
        {
            console.error("Error fetching data:", error);
        }
    };

    const fetchSpecificRecipe = async () => {
        try 
        {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i={52772}');
            const result = await response?.json();
            setData(result);
        }
        catch(error) 
        {
            console.error("Error fetching data:", error);
        }
    }

    //useEffect(() =>{}, []);
    useEffect(() => {
        // call fetch
        fetchRecipe();

    },[]) //[data] it calls indefinitely

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-4xl font-semibold tracking-tight text-white">Find a Recipe</h2>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <input
                    id="search"
                    name="search"
                    type="text"
                    required
                    placeholder="Enter Keyword"
                    className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Search
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  <dt className="mt-4 text-base font-semibold text-white">Random Recipe</dt>
                  <dd className="mt-2 text-base/7 text-gray-400">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                  </dd>
                  <button
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={fetchRecipe} // Now properly calls the function
                  >
                    I'm Feeling Lucky
                  </button>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  <dt className="mt-4 text-base font-semibold text-white">Recipe of the day!</dt>
                  <dd className="mt-2 text-base/7 text-gray-400">
                  {data && data.meals && data.meals.length > 0 ? (
                  <div className="mt-6 text-white">
                    <h3 className="text-2xl font-bold">{data.meals[0].strMeal}</h3>
                    {/* <p className="mt-2">Meal ID: {data.meals[0].idMeal}</p> */}
                    {/* <p className="mt-2">{data.meals[0].strInstructions.substring(0, 100)}...</p> */}
                  </div> ) : (<p>Loading recipe...</p>)}
                  </dd>
                  <button
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={fetchRecipe} // Now properly calls the function
                  >
                    Fetch This Meal!
                  </button>
                </div>
              </dl>
            </div>
          </div>
        </div>
      );
    }