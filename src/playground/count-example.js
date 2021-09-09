class Counter extends React.Component {
  //bind methods in constructor fx
  constructor(props){
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count')
      const count = parseInt(json, 10)
      if (count && !isNaN(count)){
        this.setState(() => ({count}))
      }
      console.log("fetching data")
    } catch (e) {
      //do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count){
      const json = parseInt(this.state.count)
      localStorage.setItem("count", json)
      console.log("saving data")
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {count: prevState.count-1}
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'))

// let count = 0
// let plusOne = () => {
//   count++
//   // console.log('plusOne', count)
//   renderCounterApp()
// }
// let minusOne = () => {
//   // console.log('minusOne')
//   count--
//   renderCounterApp()
// }
// let reset = () => {
//   // console.log('reset')
//   count = 0
//   renderCounterApp()
// }
// const template2 = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={plusOne}>+1</button>
//     <button onClick ={minusOne}>-1</button>
//     <button onClick ={reset}>Reset</button>
//   </div>
// )

// const appRoot = document.getElementById('app')

// // ReactDOM.render(template, appRoot)
// ReactDOM.render(template2, appRoot)

// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={plusOne}>+1</button>
//       <button onClick ={minusOne}>-1</button>
//       <button onClick ={reset}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(template2, appRoot)
// }
// renderCounterApp()