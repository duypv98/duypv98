import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import './App.scss';
import { appBaseName, routerObjects } from "./pages";

const router = createBrowserRouter(routerObjects, { basename: appBaseName });

function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
}

export default App;
