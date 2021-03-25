import React, { Component } from 'react'

// import { Redirect, Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { listIndexUser, listItemDelete } from './../../../api/list'

class ShowUserList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: null,
      exists: true,
      deleted: false,
      lists: [],
      // updateReviewClicked: false,
      deleteItemClicked: false
    }
  }

  // handleUpdate = (event) => {
  //   this.setState({ updateReviewClicked: true })
  // }

  handleDelete = id => {
    const { user, msgAlert } = this.props

    listItemDelete(id, user)
      .then(() => this.fetchListItem())
      .then(() => msgAlert({
        heading: 'Deleted List Item Successfully!',
        message: 'Your List Item has been deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting List Item Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  fetchListItem = () => {
    const { msgAlert, user } = this.props
    // console.log('this is user', user)
    listIndexUser(user)
      .then(res => {
        // console.log('this is res', res)
        this.setState({ lists: res.data.lists })
      })
      .then(() => msgAlert({
        heading: 'Showing Your List Successfully',
        message: 'Here is your list!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing List Failed',
          message: `could not show your list with error: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  componentDidMount () {
    // console.log('this is this', this)
    this.fetchListItem()
  }
  render () {
    const { lists } = this.state
    if (!lists) {
      return 'Loading...'
    }

    // if (updateListClicked) {
    // //  console.log('this is wine _id', wines._id)
    //   return (
    //     <Redirect to={`/update-wine/${wines.id}`}/>
    //   )
    // }

    // if (deleteReviewClicked) {
    //   return (
    //     <Redirect to={'/wines/'}/>
    //   )
    // }

    const listJsx = lists.map(list => (
      <Card key={list._id} style={{ width: '100%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Text>{list.text}</Card.Text>
          <Button variant="danger" onClick={() => this.handleDelete(list._id)}>
              Delete
          </Button>
        </Card.Body>
      </Card>
    ))

    return (
      <div>
        <ul>
          {listJsx}
        </ul>
      </div>
    )
  }
}

export default ShowUserList
