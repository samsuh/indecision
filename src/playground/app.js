class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {options: []}
  }

componentDidMount() {
  try {
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)
    if (options){
      this.setState(() => ({options}))
    }
    console.log("fetching data")
  } catch (e) {
    //do nothing
  }
}
componentDidUpdate(prevProps, prevState) {
  if (prevState.options.length !== this.state.options.length){
    const json = JSON.stringify(this.state.options)
    localStorage.setItem("options", json)
    console.log("saving data")
  }
}


handleDeleteOptions() {
  // this.setState(() => {
  //   return {
  //     options: []
  //   }
  // })
  this.setState(() => ({ options: [] }))
}

handleDeleteOption(optionToRemove){
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }))
}

handlePick(){
  const randomNum = Math.floor(Math.random() * this.state.options.length)
  const option = this.state.options[randomNum]
  alert(option)
}

handleAddOption (option) {
  if (!option) {
    return 'enter valid option pls'
  } else if (this.state.options.indexOf(option) > -1) {
    return 'this option already exists'
  }
  // this.setState((prevState)=> {
  //   return {
  //     options: prevState.options.concat(option)
  //   }
  // })
  this.setState((prevState) => ({options: prevState.options.concat(option)}))
}

  render(){
    const subtitle = "Choose for me"
    
    return (
    <div>
      <Header subtitle={subtitle} />
      <Action 
        hasOptions={this.state.options.length > 0}
        handlePick = {this.handlePick}
      />
      <Options 
        options={this.state.options} 
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
      />
      <AddOptions 
        handleAddOption = {this.handleAddOption}
      />
    </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
  <div>
    <p>Options Component goes here</p>
    {props.options.map((option) => (
      <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length == 0 && <p>Options Array is empty</p>} 
  </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >Remove</button>
    </div>
    )
}

class AddOptions extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    // this.setState( () => {
    //   return {error}
    // })
    this.setState(()=>({error}))

    if (!error) {
      e.target.elements.option.value = ""
    }
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <p>AddOptions Goes here</p>
        <form onSubmit={this.handleAddOption} >
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
      )
  }
}

// const User = (props) => {
//   return (
//     <div>
//     <p>Name: {props.name}</p>
//     <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))