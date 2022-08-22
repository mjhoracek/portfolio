import { Box, createStyles } from '@mantine/core'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { colors } from '../styles/colors'


const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: colors.black
  }
}))

const Home: NextPage = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.container}>
      <Navbar />
    </Box>
  )
}

export default Home
