import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Form, Container } from './styles'

export function SignIn() {

  
  

  return (
    <Container>
      <Logo />

      <div>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h1>Faça login</h1>
          <Input
            type={'email'}
            placeholder={'email'}
            label={'Email'}
            required
          />
          <Input
            type={'password'}
            placeholder={'senha'}
            label={'Senha'}
            
          />
          <Button title="Entrar"  />
        </Form>
        <Button
          title="Criar uma conta"
          isText
          isCenter
        />
      </div>
    </Container>
  )
}