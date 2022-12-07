import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import './App.scss';
import { routerObjects } from "./pages";

const router = createBrowserRouter(routerObjects);

function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
}

export default App;
