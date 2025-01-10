import { createBrowserRouter } from 'react-router-dom'
import { HelloWorld } from '../../modules/components/hello-world'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HelloWorld />,
    errorElement: <></>,
  },
])
