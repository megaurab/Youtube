// import logo from './logo.svg';
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1 className='bg-red-400'>Wanakkam gaurab!!!</h1> */}
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
