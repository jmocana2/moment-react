import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './app.css'

class App extends React.Component {
	render () {
		return (
			<h1 className={styles.logo}>Moment</h1>
		)
	}
}

export default App