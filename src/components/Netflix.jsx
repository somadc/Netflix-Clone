import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Netflix = () => {
return(
    <Card
imgSrc={Sdata[3].imgSrc}
name={Sdata[3].name}
title={Sdata[3].title}
link={Sdata[3].link}
/>
);
}

export default Netflix;