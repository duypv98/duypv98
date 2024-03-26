import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Helmet } from "react-helmet";

export type SiteContextProps = {
  title?: string;
  setTitle(_title: string): void;
}

const SiteContext = createContext<SiteContextProps>({
  setTitle(_title) {

  }
});

export const  SiteContextProvider = (props: PropsWithChildren<{}>) => {
  const [title, setTitle] = useState<string>()

  return <SiteContext.Provider value={{
    title,
    setTitle
  }}>
    <Helmet
      title={title}
      defaultTitle="Jerry Feng"
      titleTemplate="%s - Jerry Feng"
    />
    {props.children};
  </SiteContext.Provider>
}

export const useSiteContext = () => {
  return useContext(SiteContext)
}