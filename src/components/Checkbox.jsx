import React, { Fragment } from 'react'

export default function Checkbox(props) {

    const {

        data: { id, description, done },
        onChange
    } = props;


    return (
        <Fragment>
            <label>
                <input
                    name={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange}
                />
                <div>{description}</div>
            </label>
        </Fragment>
    )
}
