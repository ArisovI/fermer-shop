import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import { QueryClientProvider, QueryClient } from 'react-query'
import './index.css'

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
