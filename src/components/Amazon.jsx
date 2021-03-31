import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon = () => {
return(
    <Card 
imgSrc= {Sdata[1].imgSrc}
name={Sdata[1].name}
title={Sdata[1].title}
link={Sdata[1].link}
/>
);
}

export default Amazon;