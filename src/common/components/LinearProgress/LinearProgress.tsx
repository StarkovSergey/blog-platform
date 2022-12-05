import React from 'react'

import LinearProgressMUI from '@mui/material/LinearProgress'

type PropsType = {}

export const LinearProgress = ({}: PropsType) => {
  return (
    <LinearProgressMUI
      sx={{ position: 'fixed', top: '0', left: '0', width: '100vw', maxWidth: '100%', zIndex: 100 }}
    />
  )
}
