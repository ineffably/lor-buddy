import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoot } from './app-root';

(window as any).appLoaded = true

const container = document.getElementById('app-root');
const element = React.createElement(AppRoot);
ReactDOM.createRoot(container).render(element);
