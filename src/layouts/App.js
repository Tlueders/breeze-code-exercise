import React from 'react';
import { Container, Header } from "semantic-ui-react";
import Navbar from '../components/Navbar/Navbar';

export const App = ({ children }) => (
    <Container style={{ margin: 20 }}>
      <Header as="h3"><span role="img" aria-label="logo">⛵️</span> Breeze Church Management</Header>
      <Navbar />
      {children}
    </Container>
);