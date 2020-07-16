import React from 'react';
import style from '../app.module.css'
import PropTypes from 'prop-types'

function Filter ({filter}) {
        return(
            <form className={style.contactForm}>
                <label>Find Contacts by Name:
                <input onChange={(e) => filter(e.target.value)}></input>
                </label>
            </form>
        )
    }
export default Filter

Filter.propTypes = {
    filter: PropTypes.func
}