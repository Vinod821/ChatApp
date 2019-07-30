import React,{Component} from 'react'

export class ChatMessage extends Component {
    constructor(props){
        super(props)
    }

    changeView = (e)=>{
      this.props.changeView('signup')    
    }

    render(){
        return(
            <div>
                <button className="chat-button" onclick={this.changeView}>Send a message</button>
                </div>
        )
    }
}

export default ChatMessage