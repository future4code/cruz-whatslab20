import React from 'react';
import styled from 'styled-components';

const InputUsername = styled.input`
width: 20%;
`

const InputMessage = styled.input`
width: 60%;
`

const ChatBoxContainer = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column-reverse;
`

export class ChatBox extends React.Component {
    state = {
        messages: [],
        inputUsername: "",
        inputMessage: ""
    }
    onChangeUsername = (event) => {
        this.setState({
            inputUsername: event.target.value
        })
    }
    onChangeMessage = (event) => {
        this.setState({
            inputMessage: event.target.value
        })
    }
    submitMessage = () => {
        const messages = {
            username: this.state.inputUsername,
            message: this.state.inputMessage
        }
        const newMessage = [messages, ...this.state.messages]
        this.setState({messages: newMessage})
    }

    render() {
        return (
            <div>
                <ChatBoxContainer>
                    {this.state.messages.map((messages) => {
                            return <p>
                                {messages.username}: {messages.message}
                            </p>
                        }
                    )}
                </ChatBoxContainer>
                <InputUsername type="text" onChange={this.onChangeUsername} value={this.state.inputUsername}/>
                <InputMessage type="text" onChange={this.onChangeMessage} value={this.state.inputMessage}/>
                <button onClick={this.submitMessage}> Enviar</button>
            </div>
        )
    }
}