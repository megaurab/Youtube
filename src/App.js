// import logo from './logo.svg';
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
// import { Children } from "react";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:"/",
      element:<MainContainer />
    },
    {
      path:"watch",
      element:<WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App h-screen w-screen hide-scrollbar overflow-auto">
        {/* <h1 className='bg-red-400'>Wanakkam gaurab!!!</h1> */}
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
