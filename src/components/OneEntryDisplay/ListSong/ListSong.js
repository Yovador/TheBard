import React from 'react';
import styles from './ListSong.module.css';
import SongInfo from './SongInfo/SongInfo';


const ListSong = (props) =>{

    const {listSong} = props
    const MusicToShow = []
    listSong.forEach(song => {
        MusicToShow.push(<SongInfo number={song.number} name={song.name} artist={song.artist} length={song.length} />)
    });

    return(
        <div>{MusicToShow}</div>
    )

}

export default ListSong;
