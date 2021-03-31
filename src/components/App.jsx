import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import ncard from './ncard';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = 'amazon';

// const Favs = () => {
//     if (favSeries === 'netflix'){
//         return(
//             <Netflix />
//         );
//     }else {
//     return(
//     <Amazon />
//     );

// }
// }
function App(){

    return (
    // Sdata.map(ncard)
    // <Favs />
    <>
    {favSeries === "netflix" ? <Netflix /> : <Amazon /> }
    </>
   
//   {/* <Card
//   imgSrc={val.imgSrc}
//   title={val.title}
//   name={val.sname}
//   link={val.link}
//    />
//   <Card
//   imgSrc={val.imgSrc}
//   title={val.title}
//   name={val.sname}
//   link={val.link} */}
//    {/* /> */}
//   </>
    )
    // like this way you can done also
    // Sdata.map(function ncard(val){
    //     return (
    //         <Card
    //         imgSrc={val.imgSrc}
    //         title={val.title}
    //         sname={val.sname}
    //         link={val.links}
    //         />
    //     );
    // }

    //Above thing can be written in fat arrow function like this way :
    // Sdata.map(val) => {
        //     return (
        //         <Card
        //         imgSrc={val.imgSrc}
        //         title={val.title}
        //         sname={val.sname}
        //         link={val.links}
        //         />
        //     );
        // }

    //
        
    


}

export default App;