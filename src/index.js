import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App.js';

ReactDom.createRoot(
    document.querySelector('#root')
).render(<App />)