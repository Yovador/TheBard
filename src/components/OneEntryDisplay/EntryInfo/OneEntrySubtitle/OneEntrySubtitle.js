import React from 'react';
import styles from './OneEntrySubtitle.module.css';
import WhiteText from "components/Text/WhiteText/WhiteText";


const OneEntrySubtitle = (props) =>{

    const {children} = props

    return (
        <center>

        <WhiteText>
            {children}
        </WhiteText>
        
        </center>
      );

}

export default OneEntrySubtitle;