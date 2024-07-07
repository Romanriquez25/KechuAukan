import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import BodyIndex from '../components/BodyIndex';
import Footer from '../components/Footer';
import FormularioReserva from '../components/FormularioReserva';

const Index = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.focus();
        }
    }, []);

    return (
      <> 
        <div ref={headerRef} tabIndex={-1}>
          <Header/>
        </div>
        <BodyIndex/>
        <FormularioReserva/>
        <Footer/>
      </>
    );
}

export default Index;