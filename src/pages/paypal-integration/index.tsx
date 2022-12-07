import { useMemo } from "react";
import { Link, useMatches } from "react-router-dom";
import { appBaseName, routerObjects } from "..";
import Layout from "../../components/Layout";
import MarkdownContent from "../../components/MarkdownContent";

const PayPalIntegrationPage = () => {
  const matches = useMatches();
  const {
    childRouters,
    src
  } = useMemo(() => {
    const route = routerObjects.find((e) => e.path === matches[0].pathname);
    return {
      childRouters: route?.children ?? [],
      src: matches[1]?.pathname?.slice(matches[0]?.pathname?.length ?? 0)
    }
  }, [matches]);

  return <Layout>
    <div className="page-toc">
      {childRouters.map((e) => <div className="page-toc-item" key={e.path}>
        {/* @ts-ignore */}
        <Link to={e.path!}>{e.title}</Link>
      </div>)}
    </div>
    <div className="page-content">
      {!!src && <MarkdownContent src={`${appBaseName}/docs/paypal-integration${src}.md`} />}
    </div>
  </Layout>;
}

export default PayPalIntegrationPage;