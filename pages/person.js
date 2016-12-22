import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'

// Use forward/back buttons to switch between master detail,
// notice how `id` will be undefined in the GET requests.
class Person extends Component {
  static async getInitialProps({ query: { id } }) {
    const res = await fetch(`http://swapi.co/api/people/${id}/`)
    const person = await res.json()
    return { person }
  }

  render () {
    return (
      <div>
        <h1>{this.props.person.name}</h1>
      </div>
    )
  }
}

export default Person
