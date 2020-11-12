import React from 'react';
import styles from './EntryInfo.module.css';
import OneEntryDesc from './OneEntryDesc/OneEntryDesc'
import OneEntrySubtitle from './OneEntrySubtitle/OneEntrySubtitle'
import OneEntryTitle from './OneEntryTitle/OneEntryTitle'
import MainImage from './MainImage/MainImage'

const EntryInfo = (props) =>{

    const {imgPath, title, subtitle, desc} = props

    return(
        <div>

            <MainImage imgPath = {imgPath} />
            <OneEntryTitle> {title} </OneEntryTitle>
            <OneEntrySubtitle> {subtitle} </OneEntrySubtitle>
            <OneEntryDesc> {desc} </OneEntryDesc>

        </div>
    )

}

export default EntryInfo;
