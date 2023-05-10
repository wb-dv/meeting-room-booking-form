import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Form from './components/Form/Form';
import Layout from './components/Layout/Layout';
import Container from './components/Container/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
    <Container>
      <Form />
    </Container>
  </React.StrictMode>
);

