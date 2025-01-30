import ContentLoader from "react-content-loader";

const AnimeInfoLoader = (props : any) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={460}
    viewBox="0 0 520 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="260" cy="127" r="127" /> 
    <rect x="200" y="265" rx="0" ry="0" width="120" height="30" /> 
    <rect x="220" y="310" rx="0" ry="0" width="80" height="40" />
  </ContentLoader>
)

export default AnimeInfoLoader;