import { Box, createStyles, Text } from '@mantine/core'
import React from 'react'
import { colors } from '../../styles/colors'

type Props = {
  label: string
  special?: boolean
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '125px',
    height: '100%',
    color: colors.grey,
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',
  },
  specialLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    color: colors.lightBlack,
    backgroundColor: colors.lightBlue,
    width: '125px',
    height: '30px',
    borderRadius: '18px',

  }

}))

export const NavLink = ({ label, special, ...props }: Props) => {
  const { classes } = useStyles()

  if (special) {
    return (
      <Box className={classes.specialLink}>
        <p>{label}</p>
      </Box>
    )
  } else {
    return (
      <Box className={classes.container}>
        <p>{label}</p>
      </Box>
    )
  }

}