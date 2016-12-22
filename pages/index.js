import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch('http://swapi.co/api/people')
    const { results } = await res.json()
    return { people: results }
  }

  render () {
    return (
      <div>
        <h1>People</h1>
        <ul>
          {this.props.people.map((r, i) => (
            <li key={r.created}>
              <Link href={`/person?id=${i + 1}`} as={`/person/${i + 1}`}>
                <a>{r.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Index
