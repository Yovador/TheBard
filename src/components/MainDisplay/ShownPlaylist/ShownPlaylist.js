import React from 'react';
import styles from './ShownPlaylist.module.css';
import Item from 'components/MainDisplay/Item/Item'
import PlaylistTitle from 'components/MainDisplay/PlaylistTitle/PlaylistTitle'
import Separator from "components/MainDisplay/Separator/Separator";

const ShownPlaylist = (props) =>{



    const {Info, children} = props

    return (
        <center>
            <div>
                <PlaylistTitle>{children}</PlaylistTitle>
                <Separator imgPath={'https://tinyurl.com/y3dwf39d'}/>
                <Item imgPath={Info[0].imgPath} info={Info[0].elementSub}> {Info[0].elementName}</Item>
                <Item imgPath={Info[1].imgPath} info={Info[1].elementSub}> {Info[1].elementName}</Item>
                <Item imgPath={Info[2].imgPath} info={Info[2].elementSub}> {Info[2].elementName}</Item>
            </div>
        </center>
      );

}

export default ShownPlaylist;