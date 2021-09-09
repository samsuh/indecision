import React from 'react'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOptions from './AddOptions'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  }

  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // })
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    // alert(option)
    this.setState(() => ({
      selectedOption: option,
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists'
    }
    // this.setState((prevState)=> {
    //   return {
    //     options: prevState.options.concat(option)
    //   }
    // })
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }))
  }

  handleClearModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
      console.log('fetching data')
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('saving data')
    }
  }

  render() {
    const subtitle = 'Choose for me'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearModal={this.handleClearModal}
        />
      </div>
    )
  }
}
