import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import ncard from './ncard';
import Netflix from './Netflix';
import Amazon from './Amazon';


const App = () =>{

    return (
        <div>
        <h1 className="heading_style">List of top 3 Netflix Series in 2020</h1>
            {Sdata.map((val) =>(
    
            <Card 
         imgSrc={val.imgSrc}
         title={val.title}
         name={val.name}
         link={val.link}
             />
            ))};
        </div>
    
        )}
        


export default App;