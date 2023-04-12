

import React ,{lazy} from 'react'
import ReactDOM from 'react-dom/client'

const SpotifyWebPlayer = lazy(() => import('./index'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    {/* <SpotifyWebPlayer token={''} uris={''}    /> */}
  </div>,
)
