import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createListItem = (list, user) => {
  // console.log('This is list', list)
  return axios({
    url: apiUrl + '/lists',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { list: list }
  })
}

// SHOW user list
export const listIndexUser = user => {
  return axios({
    url: apiUrl + '/lists',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// DELETE list item
export const listItemDelete = (id, user) => {
  return axios({
    url: apiUrl + '/lists/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
