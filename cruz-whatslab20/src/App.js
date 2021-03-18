import React from 'react';
import styled from 'styled-components';
import {ChatBox} from "./Components/Chatbox/Chatbox"

const Container = styled.div`
border: 1px solid black;
height: 100vh;
width: 500px;
margin: auto;
display: flex;
flex-direction: column-reverse;
`

class App extends React.Component {
    render() {
        return (
            <Container>
                <ChatBox/>
            </Container>
        )
    }
}

export default App;