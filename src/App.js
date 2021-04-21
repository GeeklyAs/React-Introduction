import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Assma',
    age: 22
  },
  membre2: {
    nom: 'Abdel',
    age: 29
  },
  membre3: {
    nom: 'Khadija',
    age: 60
  },
  membre4: {
    nom: 'Even',
    age: 14
  }

}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    console.log(nom)
    famille[id].nom = nom
    this.setState({ famille })
  }

  cacherNom = id => {
  const famille = { ... this.state.famille }
  famille[id].nom = 'X'
  this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState( {isShow} )
  }

   
  render () {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null 

    if (isShow) {
      description = <strong> je suis un chat </strong>
    
    }

    const list = Object.keys(famille)
      .map(membre => (
        <Membre 
        key={membre}
        handleChange={event => this.handleChange(event, membre)}
        cacherNom={() => this.cacherNom(membre)}
        age={famille[membre].age}
        nom={famille[membre].nom} />

        )
      )
    console.log(famille)


    return (
      <div className='App'>
        <h1>{titre}</h1>
        { list }
        {/* <Membre 
          age={famille.membre4.age}
          nom={famille.membre4.nom}>
        {description}
        <button onClick={this.handleShowDescription}>
            {
              isShow ? 'Cacher' : 'Montrer'
            }
        </button>
        </Membre>
        <Button 
        vieillir={() => this.handleClick(2)}/> */}
      </div>
    )
  }
}

export default App
