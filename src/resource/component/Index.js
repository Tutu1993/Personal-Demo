import { Link } from 'react-router-dom'

class Index extends React.Component {
	render() {
		return (
			<div>
				<Link to="/calc">计算器</Link>
			</div>
		)
	}
}

export default Index
