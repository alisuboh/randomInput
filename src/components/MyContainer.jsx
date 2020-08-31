import React,{ Component } from 'react';
import TextInput from './TextInput';

class MyContainer extends Component {
    constructor(from) {
        super(from);
        this.state = {
            items : [{
                "id":0,
                "value":"",
                "isDisabled":false
            }]

        }
    }
    updateValue = (id , value) => {

        let items = [...this.state.items];
        let newValue = {...items[id].value};
        newValue = value;
        items[id].value = newValue;
        this.setState({items});

    }
    addInput = ()=>{
        var max = 10;
        var min = 1;
        var rand =  Math.random() * (max - min) + min;
        for (let i = 1; i < rand ; i++) {
            this.setState(prevState => ({
                items: [...prevState.items, { id: i, value: "" ,"isDisabled":true }]
            }));
        };
    }

    enableNext = (index)=>{

        let items = [...this.state.items];
        if(index !== this.state.items.length - 1){
            items[index + 1].isDisabled = false;
            items[index + 1].value = items[index].value;
        }
        this.setState({items});

    }


    render(){
        return(
            <>
                <div>
                    <button onClick={this.addInput} >Generate Input</button>
                <br/>
                   
                    {this.state.items.length > 1 ?
                        <div>
                            {this.state.items.map((item, i) => (
                                <TextInput key={i} id={i} value={item.value} isDisabled={i==0 ?false: this.state.items[i].isDisabled } onchange={this.updateValue} onblr={this.enableNext} />
                                )   
                            )}
                        </div>: null}
                </div>

            </>
        )
    }
}
export default MyContainer;