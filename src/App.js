import React from 'react';
import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle'; // ✅ เพิ่มตรงนี้

export default function App() {
  return (
    <>
      <GlobalStyle /> {/* ✅ เพิ่มตรงนี้ */}
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}


