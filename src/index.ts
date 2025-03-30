import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoot } from './page/app-root';

// this is a simple way to flag that the bundle is loaded
// queried in github pages and loads the bundle if not set
(window as any).appLoaded = true

const container = document.getElementById('app-root');
const element = React.createElement(AppRoot);
ReactDOM.createRoot(container).render(element);
