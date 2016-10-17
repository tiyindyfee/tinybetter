import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onChange = this.onChange.bind(this)
  }

  render() {
    const Items = props.data.map(record, i => <Item key={i} data={data} onChange={this.onChange} />)

    return <div>
      {Items}
    </div>
  }

  onChange(e) {
    this.setState({})
  }
}

export default List
