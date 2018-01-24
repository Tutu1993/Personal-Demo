import Btn from 'componentDir/calc/Btn.js'

require('cssDir/calc/index.css')

const log = console.log.bind(console)
const btnList = [
	{
		val: "C",
		style: "btn-gray",
	},
	{
		val: "+/-",
		style: "btn-gray",
	},
	{
		val: "%",
		style: "btn-gray",
	},
	{
		val: "÷",
		style: "btn-orange",
	},
	{
		val: "7",
		style: "btn-black",
	},
	{
		val: "8",
		style: "btn-black",
	},
	{
		val: "9",
		style: "btn-black",
	},
	{
		val: "×",
		style: "btn-orange",
	},
	{
		val: "4",
		style: "btn-black",
	},
	{
		val: "5",
		style: "btn-black",
	},
	{
		val: "6",
		style: "btn-black",
	},
	{
		val: "-",
		style: "btn-orange",
	},
	{
		val: "1",
		style: "btn-black",
	},
	{
		val: "2",
		style: "btn-black",
	},
	{
		val: "3",
		style: "btn-black",
	},
	{
		val: "+",
		style: "btn-orange",
	},
	{
		val: "0",
		style: "btn-black-special",
	},
	{
		val: ".",
		style: "btn-black",
	},
	{
		val: "=",
		style: "btn-orange",
	},
]
const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolArray = ["+", "-", "×", "÷"]
const symbolFunc = (first, last, symbol) => {
	switch (symbol) {
		case "+":
			return first + last
		break
		case "-":
			return first - last
		break
		case "×":
			return first * last
		break
		case "÷":
			return first / last
		break
	}
}
const keyArray = [...numArray, ...symbolArray, ".", "=", "C"]

class Calc extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: 0,
			first: null,
			last: null,
			symbol: null,
		}
		this.handleClick = this.handleClick.bind(this)
		window.addEventListener('keydown', e => {
			const obj = {
				target: {
					innerHTML: e.key,
				}
			}
			if (e.key === 'Escape') {
				obj.target.innerHTML = "C"
			}
			if (e.key === "Enter") {
				obj.target.innerHTML = "="
			}
			if (e.key === '*') {
				obj.target.innerHTML = "×"
			}
			if (e.key === "/") {
				obj.target.innerHTML = "÷"
			}
			if (keyArray.indexOf(obj.target.innerHTML) >= 0) {
				this.handleClick(obj)
			}
		})
	}
	handleClick(e) {
		const content = e.target.innerHTML
		const { show, first, last, symbol } = this.state
		if (content in numArray) {
			if (content === "0" && show === 0) {
				return
			}
			this.setState({
				show: typeof show === "number" ? content : show + content,
			})
		}
		if (symbolArray.indexOf(content) >= 0) {
			// if (typeof show === "string") {
			// 	if (first !== null) {
			// 		this.setState({
			// 			show: symbolFunc(first, Number(show), symbol),
			// 			first: symbolFunc(first, Number(show), symbol),
			// 			symbol: content,
			// 		})
			// 	} else {
			// 		this.setState({
			// 			show: Number(show),
			// 			first: Number(show),
			// 			symbol: content,
			// 		})
			// 	}
			// } else {
			// 	this.setState({
			// 		symbol: content,
			// 	})
			// }
			this.setState({
				show: typeof show === "string" ? (first !== null ? symbolFunc(first, Number(show), symbol) : Number(show)) : show,
				first: typeof show === "string" ? (first !== null ? symbolFunc(first, Number(show), symbol) : Number(show)) : show,
				symbol: content,
			})
		}
		if (content === "C") {
			this.setState({
				show: 0,
				first: null,
				last: null,
				symbol: null,
			})
		}
		if (content === "+/-") {
			if (show !== 0) {
				this.setState({
					show: String(- show),
				})
			}
		}
		if (content === ".") {
			if (String(show).indexOf(".") < 0) {
				this.setState({
					show: show + content,
				})
			}
		}
		if (content === "%") {
			this.setState({
				show: Number(show) * 0.01
			})
		}
		if (content === "=") {
			if (first !== null) {
				this.setState({
					show: symbolFunc(first, typeof show === "string" ? (last === Number(show) ? last : Number(show)) : (last === null ? show : last), symbol),
					first: symbolFunc(first, typeof show === "string" ? (last === Number(show) ? last : Number(show)) : (last === null ? show : last), symbol),
					last: last === null ? Number(show) : (typeof show === "string" ? Number(show) : last),
				})
			}
		}
	}
	render() {
		const btnArray = btnList.map((val, index) => {
			return (
				<Btn style={ val.style } val={ val.val } click={ this.handleClick } key={ index } />
			)
		})
		return (
			<div className="calc-box">
				<p>{ this.state.show }</p>
				{ btnArray }
			</div>
		)
	}
}

export default Calc
