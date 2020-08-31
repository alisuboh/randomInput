import React,{ Component } from 'react';

class TextInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value || "",
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({ text: this.props.value });
        }
    }
    render(){
        return (
            <>
                <input type="text"  value={this.state.text}  onChange={(e) => this.props.onchange(this.props.id, e.target.value)} disabled ={this.props.isDisabled} onBlur={(e) => this.props.onblr(this.props.id)}/>
                <br/>
            </>
        )
    }
}

export default TextInput;