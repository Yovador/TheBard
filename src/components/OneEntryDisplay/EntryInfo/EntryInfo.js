import React from 'react';
import styles from './EntryInfo.module.css';
import OneEntryTitle from './OneEntryTitle/OneEntryTitle'
import WhiteText from 'components/Text/WhiteText/WhiteText'
import GreyText from 'components/Text/GreyText/GreyText'
import MainImage from './MainImage/MainImage'

const EntryInfo = (props) =>{

    const {imgPath, title, subtitle, desc} = props

    return(
        <div>

            <MainImage imgPath = {imgPath} />
            <OneEntryTitle> {title} </OneEntryTitle>
            <WhiteText> {subtitle} </WhiteText>
            <GreyText> {desc} </GreyText>

        </div>
    )

}

export default EntryInfo;
