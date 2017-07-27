import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Moment from 'moment'

const styles = StyleSheet.create({
  list: {
    padding: 0,
    margin: '20px 0px',
    listStyleType: 'none',
    width: '100%',
    textAlign: 'left',
    height: 157,
    maxHeight: 157,
    overflow: 'hidden'
  },
  details: {
    width: '70%',
    display: 'inline-block',
    padding: 20,
    backgroundColor: '#494949',
    color: 'white',
  },
  sizeContainer: {
    width: '30%',
    display: 'inline-block',
    height: 157,
    float: 'right',
    backgroundColor: '#ed1c2e',
    color: 'white',
    padding: '7.5%',
    textAlign: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    color: '#ed1c2e'
  },
  size: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  }
});

function formatBytes(a,b){if(0 == a)return"0 Bytes";var c=1e3,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

const ListItem = ({ name, desc, date, size}) => (
  <li className={css(styles.list)}>
    <div className={css(styles.details)}>
      <p className={css(styles.name)}> { name } </p>
      <p className={css(styles.desc)}> { desc } </p>
      <p className={css(styles.date)}> { Moment(date).format('dddd Do MMMM YYYY') } </p>
    </div>
    <div className={css(styles.sizeContainer)}>
      <p className={css(styles.size)}> { formatBytes(size, 2) } </p>
    </div>
  </li>
)

export default ListItem;
