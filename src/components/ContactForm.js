import React, {Component} from 'react';
import style from '../app.module.css';
import PropTypes from 'prop-types'

class ContactForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        const {name, phone} = this.state;
        e.preventDefault();
        this.props.onSubmit(name, phone);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        const {name, phone} = this.state
        return(
            <form className={style.contactForm}>
                <label>Name: <input type="text" name="name" value={name} onChange={this.handleChange}></input></label>
                <label>Phone: <input type="text" name="phone" value={phone} onChange={this.handleChange}></input></label>
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}

export default ContactForm

ContactForm.propTypes = {
    onSubmit: PropTypes.func
}