class Calc extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			num: 0,
		}
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDel = this.handleDel.bind(this)
	}
	handleAdd() {
		this.setState({
			num: this.state.num + 1
		})
	}
	handleDel() {
		this.setState({
			num: this.state.num - 1
		})
	}
	render() {
		return (
			<div>
				<p>{ this.state.num }</p>
				<button onClick={ this.handleAdd }>+</button>
				<button onClick={ this.handleDel }>-</button>
			</div>
		)
	}
}

export default Calc
