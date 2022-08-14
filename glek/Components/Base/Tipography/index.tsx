import React from 'react'
import { 
    TypographyBaseH1,
    TypographyBaseH2,
    TypographyBaseH3,
    TypographyBaseH4,
    TypographyBaseH5,
    TypographyBaseH6
} from './styles'

interface TypographyProps {
    variant?: 'Heading1' | 'Heading2' | 'Heading3' | 'Heading4' | 'Heading5' | 'Heading6' ;
    children: string
}

const Typography = ({ variant, children }: TypographyProps) => {

  const renderComponentBase = () =>{
    switch (variant){
        case 'Heading1': return (<TypographyBaseH1>{children}</TypographyBaseH1>);
        case 'Heading2': return (<TypographyBaseH2>{children}</TypographyBaseH2>);
        case 'Heading3': return (<TypographyBaseH3>{children}</TypographyBaseH3>);
        case 'Heading4': return (<TypographyBaseH4>{children}</TypographyBaseH4>);
        case 'Heading5': return (<TypographyBaseH5>{children}</TypographyBaseH5>);
        case 'Heading6': return (<TypographyBaseH6>{children}</TypographyBaseH6>);
    }
  }

  return (
    <>{renderComponentBase()}</>
  )
}

export default Typography