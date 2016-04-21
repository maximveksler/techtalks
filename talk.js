import React from 'react'
import {Panel} from'react-bootstrap'

/**
 * Contains basic info about a talk.
 */
class TalkPojso {
    
    /**
     * @param  {[String]} title - a short title of the talk
     * @param  {[String]} user - who is giviing the talk
     * @param  {[String]} - a more detailed description of the talk
     */
    constructor(title, user, description) {
        this.title = title
        this.user = user
        this.description = description
      }
}

class Talk extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'Talk';
        
        this.state = {
        
            /** Wether to also show talk description, or just metadata (title, user, etc.) */
            expanded: false
        }
    }

    /**
     * Displays talk metadata (title, user, etc.) and description.
     * You can click on the metadata to show/hide the desription (expand/collapse).
     * The default is collapsed.
     */
    render() {

        //FIX rounded corners
        return <div className='talk'>
            <Panel className='talk-panel' onClick={ ()=> this.setState({ expanded: !this.state.expanded })}>
                <div className='talk-title'>{this.props.talk.title}</div>
                <div>{this.props.talk.user}</div>
            </Panel>
            <Panel className='talk-panel' collapsible expanded={this.state.expanded}>
                <div>{this.props.talk.description}</div>
            </Panel>
        </div>
    }
}

Talk.propTypes = {

    /** Contains the talk basic info. */
    talk: React.PropTypes.instanceOf(TalkPojso)
}


module.exports = {Talk, TalkPojso}