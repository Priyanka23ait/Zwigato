import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import  RestaurantMenu  from './components/RestaurantMenu.js';


const App=()=>{

    return <div>
        <div className='header'>
            <Header/>
        </div>

        <div className='body'>
          <Outlet/>
        </div>

        <div className='footer'>

        </div>       
        
    </div>
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
       
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/> 
            },  
            {
                path: '/contact',
                element: <Contact/>
            },
             {
                path: '/restaurant/:resid',
                element: <RestaurantMenu/>
            }],

        errorElement: <Error/>,

        },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={appRouter} />);