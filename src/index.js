import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Suspense } from 'react';
import Loader from './Componants/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Suspense fallback={<Loader/>}>
    <App />
    </Suspense>
);
