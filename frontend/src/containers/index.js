import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import Student from './student'
import Attendance from './attendance'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    }
  },

  toolbarTitle: {
    flex: 1,
  },

  layout: {
    width: 'auto',
    padding: '20px 10px 10px 10px',
    marginTop: 60
  },

  menuItem: {
    color: 'white'
  }
})

const Main = ({ classes }) => (
  <>
    <CssBaseline />
    <AppBar
      position='fixed'
      color='primary'>
      <Toolbar>
        <Typography
          variant='title'
          color='inherit'
          noWrap
          className={classes.toolbarTitle}>
          CEPV
        </Typography>
        <Button
          component={Link}
          to='/'
          className={classes.menuItem}>
          Alunos
        </Button>
        <Button
          component={Link}
          to='/chamada'
          className={classes.menuItem}>
          Chamada
        </Button>
      </Toolbar>
    </AppBar>
    <main className={classes.layout}>
      <Switch>
        <Route exact path='/' component={Student} />
        <Route path='/chamada' component={Attendance} />
      </Switch>
    </main>
  </>
)

export default withStyles(styles)(Main)
