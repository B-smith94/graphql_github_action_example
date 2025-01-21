import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import './index.css'
import App from './App.tsx'


const rickAndMortiAPI: string = 'https://rickandmortyapi.com/graphql' // must have a backend built out already

const client = new ApolloClient({  // specifies the uri and the cache to store data
  uri: rickAndMortiAPI,
  cache: new InMemoryCache
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}> {/* App wrapped by ApolloProvider, provide client */}
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
