import React from 'react';
import styles from './EntryInfo.module.css';
import OneEntryTitle from './OneEntryTitle/OneEntryTitle'
import WhiteText from 'components/Text/WhiteText/WhiteText'
import GreyText from 'components/Text/GreyText/GreyText'
import MainImage from './MainImage/MainImage'

const EntryInfo = (props) =>{

    const {imgPath, title, subtitle, desc} = props

    return(
        <div className={styles.prez}>

            <div>
                <MainImage imgPath = {imgPath}/>
            </div>
            <div className={styles.infos}>
                <div>
                    <OneEntryTitle> {title} </OneEntryTitle>
                    <WhiteText> {subtitle} </WhiteText>
                </div>
                <GreyText className={styles.grey} > {desc} </GreyText>
            </div>

        </div>
    )

}

export default EntryInfo;
