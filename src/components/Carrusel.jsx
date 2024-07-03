import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carrusel.css'; // Asegúrate de importar los estilos CSS correctamente

const Carrusel = () => {
    const imgs = [
        { id: 1, src: '/img/image1.jpg', alt: 'imagen 1' },
        { id: 2, src: '/img/image2.jpg', alt: 'imagen 2' },
        { id: 3, src: '/img/image3.jpg', alt: 'imagen 3' },
        { id: 4, src: '/img/image4.jpg', alt: 'imagen 4' },
        { id: 5, src: '/img/image5.jpg', alt: 'imagen 5' },
        { id: 6, src: '/img/image6.jpg', alt: 'imagen 6' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
    };

    return (
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis. Facilis, corrupti consequatur assumenda inventore repellendus suscipit quaerat similique, natus amet asperiores non consectetur nam perferendis sit iste unde nulla?</p>
        </>
    );
};

export default Carrusel;
