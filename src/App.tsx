import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.scss';
import { SiteContextProvider } from "./context/SiteContext";
import { appBaseName, routerObjects } from "./pages";

const router = createBrowserRouter(routerObjects, { basename: appBaseName });

function App() {
  return (<SiteContextProvider>
    <RouterProvider router={router} />
  </SiteContextProvider>);
}

export default App;
