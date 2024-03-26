import 'bootstrap/dist/css/bootstrap.min.css';
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
    <a href="#content" className="skip-to-content">Skip to Content</a>
    <div id="content">
      <main className="main-content">
        <RouterProvider router={router} />
      </main>
    </div>
  </SiteContextProvider>);
}

export default App;
