
import { Form, Container } from './styles'
import logo from '../../assets/logo.svg'


import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'


export function SignUp() {
  

  
    
  

  return (
    <Container>
      <Logo src={logo} />

      <div>
        <Form >
          <h1>Crie sua conta</h1>
          <Input
            type={'text'}
            placeholder={'Exemplo: Marcos Barbosa'}
            label={'Seu nome'}
            
          />
          <Input
            type={'email'}
            placeholder={'Exemplo: exemplo@exemplo.com.br'}
            label={'Email'}
           
          />
          <Input
            type={'password'}
            placeholder={'No mínimo 6 caracteres'}
            label={'Senha'}
            
          />
          <Button title="Entrar"  />


          <Button
          title="Já tenho uma conta"
          isText
          isCenter
        />
            
        </Form>
        
      </div>
    </Container>
  )
}