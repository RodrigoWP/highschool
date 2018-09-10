import React, { Component } from 'react'
import { or, isNil, isEmpty, and } from 'ramda'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

class StudentForm extends Component {
  state = {
    name: '',
    code: '',
    errors: {
      name: null,
      code: null
    }
  }

  changeField = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
    this.clearFieldError(name)
  }

  testSubmit = () => {
    if (this.validateFields()) {
      console.log('state: ', this.state)
    }
  }

  validateFields = () => {
    const { code, name } = this.state

    const isNullOrEmpty = value => or(
        isNil(value),
        isEmpty(value)
      )

    const isInvalidCode = isNullOrEmpty(code)
    const isInvalidName = isNullOrEmpty(name)

    this.setState({
      errors: {
        code: isInvalidCode && 'Campo obrigatório',
        name: isInvalidName && 'Campo obrigatório'
      }
    })

    return and(!isInvalidCode, !isInvalidName)
  }

  closeForm = () => {
    this.props.onClose()
    this.clearAllFieldErrors()
    this.clearFields()
  }

  clearAllFieldErrors = () => {
    this.clearFieldError('code')
    this.clearFieldError('name')
  }

  clearFieldError = field => {
    this.setState(state => ({
      errors: {
        ...state.errors,
        [field]: null
      }
    }))
  }

  clearFields = () => {
    this.setState({
      code: null,
      name: null
    })
  }

  render () {
    const { errors } = this.state
    const { open } = this.props

    return (
      <Dialog
        open={open}
        onClose={this.closeForm}>
        <DialogTitle> Novo aluno </DialogTitle>
        <DialogContent>
          <TextField
            label='Nome completo'
            name='name'
            margin='dense'
            autoFocus
            fullWidth
            onChange={this.changeField}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label='Código'
            name='code'
            margin='dense'
            fullWidth
            onChange={this.changeField}
            error={!!errors.code}
            helperText={errors.code}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color='primary'
            onClick={this.closeForm}>
            Cancelar
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={this.testSubmit}>
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default StudentForm
