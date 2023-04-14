

import React ,{lazy} from 'react'
import ReactDOM from 'react-dom/client'

const SpotifyWebPlayer = lazy(() => import('./index'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <div>hello</div>
    <SpotifyWebPlayer token="BQANpn7ja9bHu7K3lNUVEaaBrYvM3tKJ4jXKrYAjjzUoYlBmTv0cdfDbZvr6MEjYe-J1v70LzieyiXFXeoebpGYMrm1gYqn4w4lirErpreXySzw3XD9NSSQo4VYeWm1YoWfFDtToV9bH-Xlz6hNfhMsJ7s9Q8x5KE1wrDPqgdDVMqcwaoD5lKTnzHiPJwgNY7nQL3jb8AU6byJNkcqAXfO2t30hWY2mUW5PwZzHqFag6_BFwlSZX45ecJlzOIRP-Rz76UiYjbGzfDp4sUsJVbgCtzW_yRvtTiilYhIHfw1dZjoxlL3wDKYC5uQWjJkI5" uris="spotify:track:3zYpRGnnoegSpt3SguSo3W"/>
  </div>,
)
