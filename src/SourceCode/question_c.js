// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

class BigForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [false, false, false]
    }
    this.checkboxOnCheck = this.checkboxOnCheck.bind(this)
  }

  checkboxOnCheck(id) {
    return () => {
      const checked = this.state.checked.map((value, index) => {
        if (id === index) {
          return !value
        }
        return value
      })
      this.setState({ checked })
    }
  }

  render() {
    const checked = this.state.checked
    return (
      <div className='form'>
        <span>Checked boxes: {JSON.stringify(checked)}</span>
        <div className='checkbox-wrapper'>
          <span>checkbox 0</span>
          <input
            value={checked[0]}
            onChange={this.checkboxOnCheck(0)}
            type='checkbox'
          />
        </div>
        <div className='checkbox-wrapper'>
          <span>checkbox 1</span>
          <input
            value={checked[1]}
            onChange={this.checkboxOnCheck(1)}
            type='checkbox'
          />
        </div>
        <div className='checkbox-wrapper'>
          <span>checkbox 2</span>
          <input
            value={checked[2]}
            onChange={this.checkboxOnCheck(2)}
            type='checkbox'
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<BigForm />, document.getElementById('container'))
