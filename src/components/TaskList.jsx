import React from 'react'
import Checkbox from './Checkbox'
import Button from '@mui/material/Button';

export default function TaskList(props) {

    const { list, setList } = props;



    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item =>
        ({
            ...item,
            done: item.id === name ? checked : item.done

        }));

        setList(updateList);

    };

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    }

    const chk = list.map(item =>
    (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />

    ));

    return (
        <div className="TackList">

            {list.length ? chk : "No hay tareas"}
            {list.length ?
                (<p>
                   
                    <Button variant="contained" fullWidth onClick={onClickRemoveItem} size="large" color="secondary"> Borrar todas las marcadas</Button>
                </p>) : null}
        </div>
    );
};



