import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '~/assets/logo.svg'

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatória.'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-email é obrigátorio'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres.')
    .required('A senha é obrigatória.'),
})

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
    <>
      <img src={logo} alt="Logo gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  )
}