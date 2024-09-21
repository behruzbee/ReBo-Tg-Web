import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';
import './main.scss'
import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode >,
)
