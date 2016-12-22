import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'

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
