import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRouter from '@/AppRouter'
import { store } from '@/store'
import fetcher from '@/api/fetcher'
import { SWRConfig } from 'swr'
import { Toaster } from 'react-hot-toast'
import '@/style/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
        <Toaster />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </SWRConfig>
    </Provider>
  </StrictMode>,
)
