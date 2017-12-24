/* eslint-disable  no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './loading.css'
import loadingImage from './Spinner.svg'

function Loading(props) {
  return <img src={loadingImage} alt='' width="24" height="24"/>
} 

export default Loading