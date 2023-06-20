import React, { useState } from "react";
import { ButtonSend, Container, Form, InputField, Title } from "./Products.style";

export default function Products(){
    const [nome, setNome] = useState('')
    const [icone, setIcone] = useState('')

    return(
        <Container>
            <Title>Adicione um Produto</Title>
            <Form>
                <InputField placeholder="Nome" value={nome} onChange={() => setNome}/>
                <InputField placeholder="Icone" value={icone} onChange={() => setIcone}/>
            </Form>
            <ButtonSend>Enviar</ButtonSend>
        </Container>
    )
}