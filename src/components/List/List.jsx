import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('Products');
    const [price, setPrice] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant="h4">Popular items in your local area</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value={"Products"}>Products</MenuItem>
                    <MenuItem value={"Services"}>Services</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Price</InputLabel>
                <Select value={price} onChange={(e) => setPrice(e.target.value)}>
                    <MenuItem value={"Highest"}>Highest</MenuItem>
                    <MenuItem value={"Lowest"}>Lowest</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default List;