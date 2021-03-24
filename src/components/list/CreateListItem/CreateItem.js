import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ListForm from '../../ListForm/ListForm.js'

import { createListItem } from '../../../api/list.js'

class CreateItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: {
        text: '',
        resolved: false
      },
      createId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return {
        list: { ...state.list, [event.target.name]: event.target.value }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { list } = this.state

    createListItem(list, user)

      .then(res => {
        this.setState({ createId: res.data.list._id })
        return res
      })
      .then(res => msgAlert({
        heading: 'Created List Item Successfully',
        message: `Successfully Created ${res.data.list.text}`,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Failed to Create List Item',
        message: `Failed to Create with error: ${error.message}`,
        variant: 'danger'
      }))
  }

  render () {
    const { list, createId } = this.state

    if (createId) {
      return <Redirect to={`/lists/${createId}`} />
    }

    return (
      <div>
        <ListForm
          list={list}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default CreateItem
