import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'

import { theme } from '~shared/theme';

import { router } from './router';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode >,
)
