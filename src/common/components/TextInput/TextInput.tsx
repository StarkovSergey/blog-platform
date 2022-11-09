import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type PropsType = DefaultInputPropsType & {}

export const TextInput = ({ ...props }: PropsType) => {
  return <div></div>
}
