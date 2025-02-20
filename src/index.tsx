import AppProvider from 'providers/AppProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import SettingsPanelProvider from 'providers/SettingsPanelProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from 'Routes';
import ChatWidgetProvider from 'providers/ChatWidgetProvider';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <React.StrictMode>
 
      <AppProvider>
        <SettingsPanelProvider>
          <ChatWidgetProvider>
            <BreakpointsProvider>
              <RouterProvider router={router} />
            </BreakpointsProvider>
          </ChatWidgetProvider>
        </SettingsPanelProvider>
      </AppProvider>
   
  </React.StrictMode>
);
