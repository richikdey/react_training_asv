import React from 'react'

class FormComponent extends React.Component {

    constructor() {
        super()
        this.playWithSubmit = this.playWithSubmit.bind(this)
    }

    playWithSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(this.input.value);
    }
    playControlled(){

    }
    render() {
        return (
            <div>
                <form onSubmit={this.playWithSubmit}>
                    Name:  <input type="text" ref={(input) => this.input = input} />
                    <input type="submit" />
                </form>
                <form onSubmit={this.playControlled}>
                <input/>
                </form>
            </div>
        );
    }
}

export default FormComponent;