import React from 'react';
import { Image, ImageDiv } from './HomeImages.styled';
// import Artist1 from "/assets/artista-1.svg";

const HomeImages = (props) => {
  return (
    <>
        <ImageDiv>
            <Image margin="74px" src="/assets/artista-7.png"/>
            <Image margin="57px" src="/assets/artista-6.png"/>
            <Image margin="26px" src="/assets/artista-3.png"/>
            <Image src="/assets/artista-1.png"/>
        </ImageDiv>
    </>
  )
};

export default HomeImages;