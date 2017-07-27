import React from 'react'
import { css, StyleSheet } from 'aphrodite';

import ListItem from './ListItem'


const styles = StyleSheet.create({
  ulList: {
    padding: 0,
    margin: '0 auto',
    width: 700
  }
});

const DataListRender = ({ List }) => {
  const populateList = List.map((l,index) => <ListItem key={l.id} name={l.name} desc={l.desc} date={ l.created } size={l.size} />)
  return <ul className={css(styles.ulList)}>{populateList}</ul>
}

export default DataListRender
