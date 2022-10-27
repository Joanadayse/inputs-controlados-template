import React from 'react'
import {MainContainer, Form, Input} from './styles'
import { useState } from 'react'

function MainPage() {

  const [nome , setNome]= useState ("")
  const [idade , setIdade]= useState (0)
  const [email , setEmail]= useState ("")

  const handleSubimitForm= ()=>{
    const novoForm={
      nome,
      idade,
      email
    }

    console.log(novoForm)

    setNome('')
    setEmail("")
    setIdade("")
  }

   
  

  const handInputNome=(event) =>{
    setNome(event.target.value)

    console.log(nome)
  }

  const handInputIdade=(event) =>{
    setIdade(event.target.value)
    console.log(idade)
  }

  const handInputEmail=(event) =>{
    setEmail(event.target.value)
    console.log(email)
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={handInputNome} value={nome}/>
        </label>
        <label>
          Idade:
          <Input  onChange={handInputIdade} value={idade} />
        </label>
        <label>
          E-mail:
          <Input onChange={handInputEmail} value={email}/>
        </label>
      <button onClick={handleSubimitForm} >Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage