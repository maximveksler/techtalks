import React from 'react'
import TalkGroup from './talk_group.js'

/**
* The entire app.
*/
class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    render() {
    	return <div>
	    		<TalkGroup title="Upcoming Talks" />
	    		<TalkGroup title="Past Talks" />
    		</div>
    }
}

export default App
