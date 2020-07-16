import React from 'react';
import style from '../app.module.css';
import PropTypes from 'prop-types'


export default function ListItem ({listElements, deleteItem}) {
    return(
        <>
            {listElements.map(listElement => <li key={listElement.id}>
                {listElement.name} - {listElement.phone}
                <button className={style.deleteBtn} onClick={() => deleteItem(listElement.id)}>Delete</button>
                </li>)}
        </>
    )
}
ListItem.propTypes = {
    listElement: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        id: PropTypes.string
    }),
    deleteItem: PropTypes.func
}

