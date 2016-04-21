import React from 'react'
import {ListGroup} from'react-bootstrap'
import {Talk, TalkPojso} from './talk.js'

/**
 * Displays a group of talks (Upcoming / Past).
 */
class TalkGroup extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'TalkGroup';
        
        this.state = {
            
            /**
             * Array of the talks in this group.
             * @type {TalkPojso[]}
             */
            //TODO get talks from store
            talks: [new TalkPojso('t1', 'u1', 'd1'), new TalkPojso('t2', 'u2', 'd2')]}
    }

    render() {
         var talkComponents = []
         this.state.talks.forEach((talk) => {
            talkComponents.push(<Talk talk={talk} />)
         })

         return (
                <div className='talk-group'>
                    <div className='talk-group-title'>{this.props.title}</div>
                    <ListGroup>{[talkComponents]}</ListGroup>
                </div>)
    }
}

TalkGroup.propTypes = {

    /** Title of the group (Upcoming / Past). */
    title: React.PropTypes.string
}

export default TalkGroup