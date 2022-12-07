import { PropsWithChildren, useEffect } from "react";
import { Link, useMatches } from "react-router-dom";
import { routerObjects } from "../../pages";
import "./layout.scss";

const Layout = (props: PropsWithChildren) => {
  const matches = useMatches();
  useEffect(() => {
    const routerObject = routerObjects.find((e) => e.path === matches[0]?.pathname);
    document.title = routerObject?.title ?? "";
    return () => {
      document.title = "";
    }
  }, [matches]);

  return <div className="main-layout">
    <div className="main-layout-nav">
      {routerObjects.map((e) => <div className="main-layout-nav-item" key={e.path}>
        <Link to={e.path!}>{e.title}</Link>
      </div>)}
    </div>
    <div className="main-layout-content">
      {props.children}
    </div>
  </div>
}

export default Layout