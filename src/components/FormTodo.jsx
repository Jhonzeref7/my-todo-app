import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FormTodo(props) {

    const [description, setDescription] = useState("");
    const { handleAddItem } = props;

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
            <Grid container spacing={1}>
                <Grid xs={6} md={12}>

                    <TextField fullWidth label="tarea" id="tarea" value={description} onChange={e => setDescription(e.target.value)} />
                </Grid>
                <Grid xs={6} md={12}>


                    <Button variant="contained" disabled={description ? "" : "disabled"} fullWidth onClick={handleSubmit} size="large">Agregar</Button>
                </Grid>
            </Grid>
        </form>
    )
}
