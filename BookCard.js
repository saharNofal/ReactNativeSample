import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {formatDate , getCountdownParts} from './api.js'

const styles = StyleSheet.create({

});

export default function BookCard ({event}){
return(<view style={styles.card}>
    <view style={styles.cardHeader}>
        <text style={styles.date}>{formatDate(event.date)}</text>
        <text style={styles.title}>{event.title}</text>
    </view>
</view>);
}

BookCard.prototype={
    event:prototypes.shape(
        {
            title:PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date)
        }
    ),
};