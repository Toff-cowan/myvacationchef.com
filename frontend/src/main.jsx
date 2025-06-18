import react, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

//console.log("All env vars:", import.meta.env);  Log all environment variables for debugging
//console.log("Publishable Key:", PUBLISHABLE_KEY);  Log the specific variable to check its value
//console.log("Vite Test:", import.meta.env.VITE_TEST);  Log the Vite test variable

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key'); // Ensure the publishable key is set
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);