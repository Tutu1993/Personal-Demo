import Btn from 'componentDir/calc/Btn.js'

require('cssDir/calc/index.css')

const calcFunc = (temporary, sum, symbol) => {
	switch(symbol) {
		case "%":
			return Number(sum) * 0.01
		break
		case "+":
			return Number(temporary) + Number(sum)
		break
		case "-":
			return Number(temporary) - Number(sum)
		break
		case "×":
			return Number(temporary) * Number(sum)
		break
		case "÷":
			return Number(temporary) / Number(sum)
		break
	}
}

class Calc extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sum: 0,
			temporary: 0,
			symbol: null,
		}
		this.handleClear = this.handleClear.bind(this)
		this.handleNegate = this.handleNegate.bind(this)
		this.handleNum = this.handleNum.bind(this)
		this.handleSymbol = this.handleSymbol.bind(this)
		this.handlePercent = this.handlePercent.bind(this)
		this.handleResult = this.handleResult.bind(this)
	}
	handleClear() {
		this.setState({
			sum: 0,
			temporary: 0,
			symbol: null,
		})
	}
	handleNegate() {
		this.setState({
			sum: - this.state.sum,
		})
	}
	handleNum(e) {
		console.log(this.state)
		const html = e.target.innerHTML
		if (typeof this.state.sum !== "number") {
			this.setState({
				sum: this.state.sum + html,
			})
		} else {
			html !== "0" ? (html !== '.' ? this.setState({ sum: html }) : this.setState({ sum: 0 + html })) : this.setState({ sum: 0 })
		}
	}
	handleSymbol(e) {
		this.setState({
			sum: Number(this.state.sum),
			temporary: Number(this.state.sum),
			symbol: e.target.innerHTML
		})
	}
	handlePercent() {
		this.setState({
			sum: calcFunc(this.state.temporary, this.state.sum, "%"),
			temporary: this.state.sum,
		})
	}
	handleResult() {
		console.log(typeof calcFunc(this.state.temporary, this.state.sum, this.state.symbol))
		this.setState({
			sum: calcFunc(this.state.temporary, this.state.sum, this.state.symbol),
		})
	}
	render() {
		const btnList = [
			{
				val: "C",
				style: "btn-gray",
				click: this.handleClear,
			},
			{
				val: "+/-",
				style: "btn-gray",
				click: this.handleNegate,
			},
			{
				val: "%",
				style: "btn-gray",
				click: this.handlePercent,
			},
			{
				val: "÷",
				style: "btn-orange",
				click: this.handleSymbol,
			},
			{
				val: "7",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "8",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "9",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "×",
				style: "btn-orange",
				click: this.handleSymbol,
			},
			{
				val: "4",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "5",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "6",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "-",
				style: "btn-orange",
				click: this.handleSymbol,
			},
			{
				val: "1",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "2",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "3",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "+",
				style: "btn-orange",
				click: this.handleSymbol,
			},
			{
				val: "0",
				style: "btn-black-special",
				click: this.handleNum,
			},
			{
				val: ".",
				style: "btn-black",
				click: this.handleNum,
			},
			{
				val: "=",
				style: "btn-orange",
				click: this.handleResult,
			},
		]
		const btnArray = btnList.map((val, index) => {
			return (
				<Btn style={ val.style } val={ val.val } click={ val.click } key={ index } />
			)
		})
		return (
			<div className="calc-box">
				<p>{ this.state.sum }</p>
				{ btnArray }
			</div>
		)
	}
}

export default Calc
