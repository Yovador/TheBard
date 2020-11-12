import React from 'react';
import WhiteText from 'components/Text/WhiteText/WhiteText';
import PlaylistAddButton from './PlaylistAddButton/PlaylistAddButton';
import styles from './SongInfo.module.css';
import SongNumber from './SongNumber/SongNumber';


const SongInfo = (props) =>{

    const {number, name, artist, length} = props

    return(
        <div>
            <SongNumber> {number} </SongNumber>
            <WhiteText> {name} </WhiteText>
            <WhiteText> {artist} </WhiteText>
            <WhiteText> {length} </WhiteText>
            <PlaylistAddButton/>
        </div>
    )

}

export default SongInfo;
