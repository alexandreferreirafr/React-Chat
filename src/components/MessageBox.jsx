import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase'

var {Card} = mui;

class MessageBox extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			message: ''
		}

		this.firebaseRef = new Firebase('https://af-react-stack.firebaseio.com/messages');

	}

	onChange(evt) {
		this.setState({
			message: evt.target.value
		});
	}

	onKeyUp(evt) {
		if (evt.keyCode === 13 && trim(evt.target.value) != '') {
			evt.preventDefault();

			this.firebaseRef.push({
				message: this.state.message
			})

			this.setState({
				message: ''
			});
		}
	}

	render() {
		return (
			<Card style={{
				maxWidth: 1200,
				width: '100%',
				margin: '30px auto',
				padding: 30
			}}>
				<textarea 
					value={this.state.message}
					onChange={this.onChange.bind(this)}
					onKeyUp={this.onKeyUp.bind(this)}
					style={{
						width: '100%',
						borderColor: '#D0D0D0',
						borderRadius: 3,
						resize: 'none',
						minHeight: 50,
						color: '#555',
						fontSize: 14,
						outline: 'auto Opx'
				}} />
			</Card>
			)
	}
}

export default MessageBox;