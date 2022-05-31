import React from 'react';
import Routes from './routes/Routes';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);

