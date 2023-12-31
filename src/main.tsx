import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/style.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from "react-router-dom"
import router from './router'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
