

import React ,{lazy} from 'react'
import ReactDOM from 'react-dom/client'

const SpotifyWebPlayer = lazy(() => import('./SpotifyWebPlayer'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <SpotifyWebPlayer token='BQDTSGraQFTrATgiezQgs2x_lI2FMaWXBIt033meTvbijs_ITvWOzEQtWq2UFb7mUF9ZAxGsdxLU4cji-Wqi_q_1Lf-zdagVQJlZarnuUgovyewG6VyF8Iispw5RJMBAvz6bNPicH4yFx7rLNRQEGdf5Jv2revag57ZLbyIyznWlSL6zAPXUcEH9HwNxQC_0ix3l0_exMBpkvlhoL_HDgUBd9NCc9RQAbP6sZ8KKFSy6qAlADKe4SdtilWd49GNyps_L3ywxxWdWnWO2QBhXRpSj6EIvYe7tn1ewUeP9qLXix0hOxe6GizUq1l26SZ-Z'
    uris={["spotify:track:3zYpRGnnoegSpt3SguSo3W"]}  
    />
  </div>,
)
