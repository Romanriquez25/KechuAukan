import React from "react";
import "../styles/BodyIndex.css";
import {Card} from "@nextui-org/card";
import {CardHeader} from "@nextui-org/card";
import {CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import Carrusel from "./Carrusel";

const BodyIndex = () => {
    const imgs = [
        { id: 1, src: '/img/image1.jpg', alt: 'imagen 1' },
        { id: 2, src: '/img/image2.jpg', alt: 'imagen 2' },
        { id: 3, src: '/img/image3.jpg', alt: 'imagen 3' },
        { id: 4, src: '/img/image4.jpg', alt: 'imagen 4' },
        { id: 5, src: '/img/image5.jpg', alt: 'imagen 5' },
        { id: 6, src: '/img/image6.jpg', alt: 'imagen 6' },
    ];

    return (
        <>
            <div className="cajaBodyIndex">
              index
            </div>
        </>
    );
};

export default BodyIndex;