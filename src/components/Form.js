import React from 'react';

class Form extends React.Component {

    state = {
        bagel: ""
    }
    
    handleUserBagel(event) {
        this.setState({
            bagel: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.submitBagel(this.state.bagel)
        this.setState({
            bagel: ""
        })
    }
    
    render() {
        return (
        <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input 
                    type="text" 
                    name="bagel" 
                    value={this.state.bagel} 
                    onChange={(event) => this.handleUserBagel(event)}/>
                <button type="submit">submit</button>
            </form>
        </React.Fragment>
        );
    }
}


export default Form;