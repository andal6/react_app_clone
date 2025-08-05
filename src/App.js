import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Contact from "./component/Contact.js";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { lazy,Suspense} from "react";
import Shimmer from "./component/Shimmer.js";
import Usercontext from "./component/UserContext.js";
import { Provider } from "react-redux";
import appstore from "./utils/appstore.js";
import Cart from "./component/Cart.js";


console.log(<Body/>);

const About=lazy(()=>import("./component/About.js"))
const Contact=lazy(()=>import("./component/Contact.js"))

const AppLayout=()=>{
   const[username,setusername]=useState();

   useEffect(()=>{
const data={
   name:"Andal"
}
setusername(data.name)
   },[])

   return ( 
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Provider store={appstore}>
      <Usercontext.Provider value={{loggedinuser:username,setusername}}>
      <div className="app">
      <Header/>
     <Outlet/>
    </div>
    </Usercontext.Provider>
    </Provider>
    </div>

   )
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
       errorElement:<Error/>,
     
      children:[
         {
            path:"/",
            element:<Body/>

         },

         {
           path:"/about",
           element:<Suspense fallback={"This is About Page, Loading.... please wait"}><About/></Suspense>,
         },

         {
      path:"/contact",
      element:<Suspense fallback={<h1>Loading.....</h1>}><Contact/></Suspense>,
   },
{
path:"/restaurants/:resId",
element:<RestaurantMenu/>
   },
   {
path:"/cart",
element:<Cart/>
   },
],

     }
    
]);
const r=ReactDOM.createRoot(document.getElementById("root"))
r.render(<RouterProvider router={appRouter}/>);




//dynamically passin a data 
//pass in as props 
//how the data from backend comes to us
//conflit 

//control our
//we written our UI once and acc to the data which is coming from backend ,my Ui is getting changed -congif driven UI

//UI is configured by data

//dont use index as keys

//not using keys not accceptable


// const Title=()=>(
    
// <h1 className="head" tabIndex="5">
//     Namaste React using JSX
// </h1>)



// const heading=React.createElement("h1",{id:"heading"},"Namaste React");
// console.log(heading)
  
// //jsx is not html ,its html like syntax
// //babel compiles it to react.craeteelement
// const jsxheading=<h1 id="heading">Namaste React</h1>;
// //const root=ReactDOM.createRoot(document.getElementById("root"));

// const Headingcomponent=()=>(
//     <div id="container">
//     <Title/>
//     <h1>Namaste React Functional Component</h1>
    
//     </div>
// );


// r.render(<Headingcomponent/>);

