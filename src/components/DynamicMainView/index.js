import React, { Children } from 'react';
import style from "./DynamicMainView.module.css";

const DynamicMainView = (props) =>{
    const {children} = props;
    console.log("Children is : " + children)
    return (
        <div className = { style.dynamicMainView }>
            {children}
        </div>
      );


}

export default DynamicMainView;