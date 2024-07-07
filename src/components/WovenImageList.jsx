import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";

function ImageItem({ item, index }) {
  const ref = React.useRef(null);

  // Función para determinar la animación basada en el índice
  const getAnimationName = (index) => {
    const animations = ['slideInFromLeft', 'slideInFromRight', 'slideInFromTop', 'slideInFromBottom'];
    return animations[index % animations.length]; // Rota entre las animaciones
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ImageListItem
      ref={ref}
      sx={{
  "& img": {
    width: "100%",
    transition: "transform 0.5s ease, opacity 0.5s ease",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  "&.visible img": {
    animation: `${getAnimationName(index)} 1s ease forwards`,

    transform: "scale(1)",
    opacity: 1,
  },
}}

    >
      <img
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=161&fit=crop&auto=format`}
        loading="lazy"
        alt={item.alt}
      />
    </ImageListItem>
  );
}

export default function WovenImageList() {
  const imgs = [
    { img: "/KechuAukan/img/image2.jpg", alt: "parcela1" },
{ img: "/KechuAukan/img/image5.jpg", alt: "parcela2" },
{ img: "/KechuAukan/img/image6.jpg", alt: "parcela3" },
{ img: "/KechuAukan/img/image7.jpg", alt: "parcela4" },
{ img: "/KechuAukan/img/image8.jpg", alt: "parcela5" },
{ img: "/KechuAukan/img/image9.jpg", alt: "parcela6" },
{ img: "/KechuAukan/img/image10.jpg", alt: "parcela7" },
{ img: "/KechuAukan/img/image11.jpg", alt: "parcela8" },
{ img: "/KechuAukan/img/image12.jpg", alt: "parcela9" },
{ img: "/KechuAukan/img/image13.jpg", alt: "parcela10" },
{ img: "/KechuAukan/img/image14.jpg", alt: "parcela11" },
{ img: "/KechuAukan/img/image15.jpg", alt: "parcela12" },
  ];

  return (
    <>
      <ImageList sx={{ height:'auto', padding: "20px",
           backgroundImage: "url('img/image112.png')",

       }} variant="woven" cols={3} gap={8}>
        {imgs.map((item, index) => (
          <ImageItem key={item.img} item={item} index={index} />
        ))}
      </ImageList>
      <style jsx global>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInFromBottom {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
