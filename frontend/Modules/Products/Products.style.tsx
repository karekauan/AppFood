import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height: 100vh;
`
const Form = styled.form`
    display:flex;
    flex-grow: 1;
    flex-direction: column;
`
const ButtonSend = styled.button`
    height: 80px;
    width: 100px;
    border-radius: 5px;
    background-color: #40128B;
    transition: 0.3s;
    cursor: pointer;
    border: 0;
    color:#ffffff;
    :hover{
        background-color: #9336B4;
        color:#c9c7c7;
    }
`

const InputField = styled.input`
    height: 80px;
    width: 200px;
    border:0;
    border-radius: 5px;
`
const Title = styled.input`
    font-size: 18px;

`

export {
    ButtonSend,
    Container,
    Form,
    InputField,
    Title
}