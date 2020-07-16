import React from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types'

export default function ContactList ({contactList, deleting}) {
    return(
        <ul>
            <ListItem listElements={contactList} deleteItem={deleting}/>
        </ul>
    )
}
ContactList.propTypes = {
    contactList: PropTypes.array,
    deleting: PropTypes.func
}