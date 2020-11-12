import React from 'react';
import styles from './OneEntryDesc.module.css';
import GreyText from "components/Text/GreyText/GreyText";


const OneEntryDesc = (props) =>{

    const {children} = props

    return (
        <center>

        <GreyText>
            {children}
        </GreyText>
        
        </center>
      );

}

export default OneEntryDesc;