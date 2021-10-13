// import { useState } from 'react'
import styled from 'styled-components/macro'

import { ButtonSquare, InputSquared, TextAreaSquared } from 'components/shared'

const ContainerForm = styled.form`
  padding: 1rem;
  margin: 0 0.75rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.secondary};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
`

const ContactFormContainer = () => {
  // const [state, setState] = useState(initalState)

  // const handleInput = (e) => {
  //   const inputName = e.currentTarget.name
  //   const value = e.currentTarget.value
  //   setState((prev) => ({ ...prev, [inputName]: value }))
  // }

  return (
    <ContainerForm>
      <InputSquared placeholder="Subject" type="text" />

      <TextAreaSquared placeholder="Message" />

      <ButtonSquare type="submit">Send Message</ButtonSquare>
    </ContainerForm>
  )
}

export default ContactFormContainer
