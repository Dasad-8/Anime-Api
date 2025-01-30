import ContentLoader from "react-content-loader";

const TabsLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={1420}
    height={42}
    viewBox="0 0 1420 42"
    backgroundColor="#5c5c5c"
    foregroundColor="#4b4949"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1300" height="30" /> 
    <rect x="1350" y="0" rx="0" ry="0" width="50" height="30" />
  </ContentLoader>
)

export default TabsLoader;