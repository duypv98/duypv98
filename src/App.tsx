import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import './App.scss';
import { routerObjects } from "./pages";

const router = createBrowserRouter(routerObjects, { basename: "/duypv98" });

function App() {
  return (<>
    <RouterProvider router={router} />
  </>);
}

export default App;
