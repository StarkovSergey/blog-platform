import React, {
  ChangeEvent,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react'

import style from './Search.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type PropsType = DefaultInputPropsType & {
  label?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  className?: string
}

export const Search = forwardRef<HTMLInputElement, PropsType>(
  ({ label, onChangeText, onEnter, onKeyDown, className, ...props }, ref) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e)

      if (onEnter && e.key === 'Enter') {
        onEnter()
      }
    }

    return (
      <div className={className}>
        <label>
          {label}
          <input
            className={`${style.input}`}
            type="text"
            ref={ref}
            onChange={onChangeInputHandler}
            onKeyDown={onKeyDownHandler}
            placeholder="Search"
            {...props}
          />
        </label>
      </div>
    )
  }
)
