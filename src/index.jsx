import React, { Component } from 'react'
import { render } from 'react-dom'

class Test extends React.Component {
	render () {
		return (
			<h1>Moment</h1>
		)
	}
}

render(<Test />, document.getElementById('root'))