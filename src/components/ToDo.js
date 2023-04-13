import React from "react";
import ToDoItem from "./ToDoItem";
class ToDo extends React.Component{
    state = {
        elements: [
            {id: '12345', isCompleted: true, title: 'Zrobić zakupy'},
            {id: '23456', isCompleted: false, title: 'Opłacić serwer'}
        ],
        inputValue: ''
    }
    markCompleted(id){
        const index = this.state.elements
                                .findIndex(x=> x.id === id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true

        this.setState({elements: newElements})
    }

    addItem(){
        //dodawanie elementów
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]

        this.setState({elements: newElements})
        this.setState({inputValue: ''})
    }
    inputHandler(event){
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }
    render(){
        const elements = this.state.elements.map(e=> {
            return <ToDoItem element={e} markClicked={this.markCompleted.bind(this)}/>
        })
        return(
            <div>
                ToDo App
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}

export default ToDo