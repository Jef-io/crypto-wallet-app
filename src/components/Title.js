import React from 'react';

export default function Title ({value, variant, color}) {

    const checkColor = color ? color : "primary" ;

    // const style = {
    //     color: checkColor,
    // }
  
    const CustomTag = `h${variant}`

    return (
        <CustomTag color={checkColor} className="Title">{value}</CustomTag>
    );

}
