import { Component } from "react";

export class GroceryList extends Component{
    constructor(){
        super();
        this.state = {
            userText: '',
            groceryList: []
        }
    }

    changeInput(e){
        this.setState({userText: e});
    }

    addItem(input){
        if(input === ''){
            alert('Please, enter some info')
        }
        else{
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray , userText: ''})
            console.log(listArray)
        }
      
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
    
    onSubmitForm(e){
     e.preventDefault()
    }

    crossedItem(e){
        const bought = e.target;
        bought.classList.toggle('crossedItem');
    }




    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm}>
            <div className="container">
                <input type="text" placeholder="What do you need to buy?" 
                onChange={(e) => this.changeInput(e.target.value)}
                value={this.state.userText} />
            </div>
            <div className="container">
                <button className="btn btn-add" onClick={() => this.addItem(this.state.userText)}>Add</button>
            </div>

            <ul>
                {this.state.groceryList.map((item , index) => (<li  onClick={this.crossedItem} key = {index} >🛒 {item}</li>))}
            </ul>
            <div className="container">
                <button className="btn btn-delete" onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </form>
            </div>
        )
    }
}