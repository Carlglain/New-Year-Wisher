import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WishContextProvider } from './Components/WishContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <WishContextProvider>
      <App />
    </WishContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
