import React, {Component} from 'react'

class TestPage extends Component{

  componentDidMount()
  {
    console.log(this.props);
  }
  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default TestPage;
