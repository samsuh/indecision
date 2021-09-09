console.log("App.js is running!")

//JSX - Javascript XML 
const  appObject = {
  title: "Indecision App",
  subtitle: "Randomly selected decisions",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  console.log("Form Submited")

  const option = e.target.elements.option.value
  if (option) {
    appObject.options.push(option)
    e.target.elements.option.value = ''
    renderOptionApp()
  }
}

//Challenge: create "Remove All" button; set appObject.options to empty then rerender. 


const appRoot = document.getElementById('app')
// const numbers = [55,1010,1000]
  const onRemoveAll = () => {
    appObject.options = []
    renderOptionApp()
  }

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length)
  // console.log(randomNum)
  const option = appObject.options[randomNum]
  alert(option) // temp choice 
}
 
  const renderOptionApp = () => {
    const template =
      <div>
        <h1>{appObject.title}</h1>
        {appObject.subtitle && <p>{appObject.subtitle}</p>}
        <p>{appObject.options.length > 0 ? "Here are your options" : "No options"}</p>
        {/* <p>There are {appObject.options.length} Options to Choose From</p> */}
        <button disabled={appObject.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
          {appObject.options.map((option) => <li key={option}>Option: {option}</li>)}
          </ol>
        <form onSubmit={onFormSubmit} >
        <input type="text" name="option"/>
        <button>Add Option</button>
        {/* {[99,98,97, "mike smith"]}
        {[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]}
        {numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })} */}
        </form>
      </div>
    ReactDOM.render(template, appRoot)
  }

renderOptionApp()