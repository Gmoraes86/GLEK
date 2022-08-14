import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps{
    primary: boolean
}

const Button = ({ primary }: ButtonProps) => {
  return (
    <ButtonContainer>Button</ButtonContainer>
  )
}

export default Button