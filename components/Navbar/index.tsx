import React from 'react'
import { Navbar as MantineNavbar, createStyles, Box, } from '@mantine/core';
import { NavLink } from './NavLink';
import { colors } from '../../styles/colors';

type Props = {}

const useStyles = createStyles((theme) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0 35px',
        backgroundColor: colors.lightBlack
    },
    logoContainer: {
        position: 'absolute',
        height: '100%',
        left: 35,
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.lightBlue,
        fontSize: 30,
        fontWeight: 500,
    }
}))
export const Navbar = (props: Props) => {
    const { classes } = useStyles()

    return (
        <MantineNavbar
            height={65}
            className={classes.container}
        >
            <Box className={classes.logoContainer}>
                mh{'>'}
            </Box>
            <NavLink label="About" />
            <NavLink label="Experience" />
            <NavLink label="Projects" />
            <NavLink label="Contact Me" special />


        </MantineNavbar>
    )
}