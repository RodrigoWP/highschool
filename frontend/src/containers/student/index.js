import React from 'react'
import { State } from 'react-powerplug'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

import StudentList from './list'
import StudentForm from './form'

const styles = theme => ({
  container: {
    height: '70px',
    display: 'flex',
    alignItems: 'center'
  },

  addIcon: {
    marginRight: theme.spacing.unit
  }
})

const Student = ({ classes }) => (
  <State initial={{ isFormOpen: false }}>
    {({ state, setState }) => {
      const openForm = () => setState({ isFormOpen: true })
      const closeForm = () => setState({ isFormOpen: false })

      return (
        <>
          <div className={classes.container}>
            <Typography
              variant='display1'
              style={{ flex: 1 }}>
              Alunos
            </Typography>
            <Button
              variant='outlined'
              color='primary'
              onClick={openForm}>
              <AddIcon
                className={classes.addIcon}
              />
              Novo aluno
            </Button>
          </div>
          <StudentForm
            open={state.isFormOpen}
            onClose={closeForm}
          />
          <StudentList />
        </>
      )
    }}
  </State>
)

export default withStyles(styles)(Student)
