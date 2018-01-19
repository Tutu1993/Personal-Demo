class Btn extends React.Component {
	render() {
		return (
			<button className={ this.props.style } onClick={ this.props.click }>{ this.props.val }</button>
		)
	}
}

Btn.propTypes = {
	val: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
	click: PropTypes.func.isRequired,
}

export default Btn
