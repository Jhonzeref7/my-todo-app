import React, { useState } from 'react'

export default function FormTodo(props) {

    const [ description, setDescription ] = useState("");
    const {handleAddItem} = props;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);

        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription("");
    };

    



    return (
        <form onSubmit={handleSubmit}> 
            <input type='text' value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button
                disabled={description ? "" : "disabled"}
            >
                Agregar
            </button>

        </form>
    )
}
