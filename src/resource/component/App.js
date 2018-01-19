import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'

import Index from 'componentDir/Index.js'
import Calc from 'componentDir/Calc.js'

class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
			    <ConnectedRouter history={ history }>
					<Switch>
						<Route exact path="/" component={ Index }/>
						<Route exact path="/calc" component={ Calc }/>
					</Switch>
			    </ConnectedRouter>
			</Provider>
		)
	}
}

export default App
