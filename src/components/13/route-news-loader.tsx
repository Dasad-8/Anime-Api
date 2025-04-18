
import ContentLoader from "react-content-loader"

const RouteNewsLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#bababa"
    foregroundColor="#a6a6a6"
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="400" />
  </ContentLoader>
)

export default RouteNewsLoader