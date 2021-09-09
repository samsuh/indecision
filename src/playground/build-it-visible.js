class Visible extends React.Component {
  constructor(props){
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
    this.state = {
      visibility: false
    }
  }
  handleVisibilityToggle(){
    this.setState((prevState) => {
      return {visibility: !prevState.visibility}
    })
  }
  render(){
    return (
      <div>
       <h1>Visibility Toggle</h1>
       <p hidden={!this.state.visibility}>Message Goes here</p>
       <button onClick={this.handleVisibilityToggle}>
         {this.state.visibility ? "Hide details" : "Show details"}</button>
       {this.state.visibility && <div>
         <p>This should also be visible</p>
      </div>}
     </div>
    )
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'))


// const app = {
//   visible: false
// }

// const onMakeVisible = () => {
//   app.visible = !app.visible
//   renderVisibleApp()
// }

// const appRoot = document.getElementById('app')

// const renderVisibleApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <p hidden={!app.visible}>Message Goes here</p>
//       <button onClick={onMakeVisible}>
//         {app.visible ? "Hide details" : "Show details"}</button>
//       {app.visible && <div>
//         <p>This should also be visible</p>
//         </div>}
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }

// renderVisibleApp()