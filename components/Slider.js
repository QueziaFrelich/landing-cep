import React from "react";
import Image from 'next/image'
import Slide1 from '../public/images/slider/slide1.png';

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          
          <Image src={Slide1}  layout="responsive" alt='d-block w-100' className='Slide 1'></Image>
        </div>
        <div className="carousel-item">
        <Image src={Slide1} layout="responsive" alt='d-block w-100' className='Slide 1'></Image>
        </div>
        <div className="carousel-item">
        <Image src={Slide1} layout="responsive" alt='d-block w-100' className='Slide 1'></Image>
        </div>
      </div>

      {/* Botões de navegação */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Slider;
