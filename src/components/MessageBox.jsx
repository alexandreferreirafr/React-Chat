import React from 'react';
import mui from 'material-ui';

var {Card} = mui;

class MessageBox extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<Card style={{
				maxWidth: 1200,
				width: '100%',
				margin: '30px auto',
				padding: 30
			}}>
				<textarea style={{
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