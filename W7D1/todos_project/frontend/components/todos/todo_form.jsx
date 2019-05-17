import React from 'react';
import { uniqueId } from '../../util/utilities'


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            completed: false,
            id: uniqueId()
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    updateTitle(event) {
        this.setState({title: event.currentTarget.value});
    }

    updateBody(event) {
        this.setState({body: event.currentTarget.value});
    }

    render(){
        return (
            <form>
                <label> Title
                    <input onChange={this.updateTitle}  type="text" value={this.state.title}/>
                </label>


                <label> Body:
                    <input onChange={this.updateBody} type="text" value={this.state.body}/>
                </label>

                <button>Submit</button>
            </form>
        )
    }
}