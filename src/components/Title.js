import React from 'react';

export default function Title ({value, variant, color}) {

    const checkColor = color ? color : "#41a9ee" ;

    const style = {
        color: checkColor,
    }
  
    const CustomTag = `h${variant}`

    return (
        <CustomTag style={style} className="Title">{value}</CustomTag>
    );

}
