import React from 'react';
import { uniqueId } from '../../util/utilities'


export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };


        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(label, event) {
        this.setState({[label]: event.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state).then(
            () => {
                this.setState({ body: "", title: "" })
                this.props.clearErrors();
            }
        )
    }

    render(){
        return (
            
            <form onSubmit={this.handleSubmit}>
                <label> Title
                    <input onChange={ (e) => this.update('title', e)}  type="text" value={this.state.title}/>
                </label>


                <label> Body:
                    <input onChange={(e) => this.update('body', e)} type="text" value={this.state.body}/>
                </label>

                <button>Submit</button>
                {this.props.errors.errors.map(error => <div> {error} </div>)}
            </form>
        )
    }
}