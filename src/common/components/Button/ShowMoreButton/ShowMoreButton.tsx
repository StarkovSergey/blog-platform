import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { Button } from '../Button'

import style from './ShowMoreButton.module.css'

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-button.svg'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type PropsType = DefaultButtonPropsType & {
  children: ReactNode
  className?: string
  variant?: 'outlined' | ''
}

export const ShowMoreButton = ({ className = '', ...restProps }: PropsType) => {
  return (
    <Button
      variant="outlined"
      className={`${style['show-more-button']} ${className}`}
      {...restProps}
    >
      Show more <ArrowIcon className={style.icon} />
    </Button>
  )
}
