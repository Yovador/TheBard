import React from 'react';
import styles from './ShownPlaylist.module.css';
import Item from 'components/MainDisplay/Item/Item'
import PlaylistTitle from 'components/MainDisplay/PlaylistTitle/PlaylistTitle'
import Separator from "components/MainDisplay/Separator/Separator";
import List from "components/List/List";

const ShownPlaylist = (props) =>{



    const {Info, children} = props

    return (
            <div>
                <PlaylistTitle>{children}</PlaylistTitle>
                <Separator imgPath={'https://tinyurl.com/y3dwf39d'}/>
                <List className={styles.list}>
                    <Item imgPath={Info[0].imgPath} info={Info[0].elementSub} viewId={Info[0].viewId}> {Info[0].elementName}</Item>
                    <Item imgPath={Info[1].imgPath} info={Info[1].elementSub} viewId={Info[1].viewId}> {Info[1].elementName}</Item>
                    <Item imgPath={Info[2].imgPath} info={Info[2].elementSub} viewId={Info[2].viewId} > {Info[2].elementName}</Item>
                </List>
            </div>
      );

}

export default ShownPlaylist;