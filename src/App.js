import {UserContext} from "./utils/UserContext";
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import Error from './components/Error'
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from './components/Cart';
// for providing the redux store to our react application | Notice - this Provider Component is coming from 'react-redux' library, that configureStore came from @redux/toolkit because those all are the job of the redux, now over here we are connecting our store with our application that is why the package name is react-redux
import { Provider } from 'react-redux';

import appStore from "./utils/redux/appStore";
import './App.css';
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";
const htmlRoot = document.querySelector("#root");
const reactRoot = ReactDOM.createRoot(htmlRoot);

/**
 *
 * Header
 * - Logo
 * - NavItems
 * Body
 * - Search
 * - Restaurant Container
 *      - Res Card
 * Footer
 * - Links
 * - Address
 * - Contact
 *
 *
 */

const Grocery = lazy(() => import("./components/Grocery"));

// const About = lazy(()=> import("./components/About"));

const AppLayout = () => {

  const [userName, setUserName] = useState();
  // authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Parth Gupta"
    }
    setUserName(data.name);
  }, [])


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="w-10/12 max-w-[1250px] mx-auto">
          {/* Header */}
          <Header />
          {/* body */}
          {/* <Body /> */}
          {/* Footer */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      }
      , {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<div>Loading....</div>}><Grocery /></Suspense>
      }
      ,{
        path : "/cart",
        element : <Cart/>
      }

    ]
  },

]);

reactRoot.render(<RouterProvider router={appRouter} />);
