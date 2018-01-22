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

class Calc extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			num: 0,
			symbol: null,
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e) {
		log(e.target.innerHTML)
	}
	render() {
		const btnArray = btnList.map((val, index) => {
			return (
				<Btn style={ val.style } val={ val.val } click={ this.handleClick } key={ index } />
			)
		})
		return (
			<div className="calc-box">
				<p>{ this.state.num }</p>
				{ btnArray }
			</div>
		)
	}
}

export default Calc
