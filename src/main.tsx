import React from 'react';
import  ReactDOM  from 'react-dom/client';


// import '@fontsource-variable/inter'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './providers/ToDoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
