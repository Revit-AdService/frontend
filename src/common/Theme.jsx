import { createTheme } from '@mui/material'
import React from 'react'

export const Theme = () => {
    const theme = createTheme ({
        pallete: {
            mode: 'dark',
            primary: {
                main: orange[500]
            }
        }
    })

  return (
    <div>Theme</div>
  )
}
