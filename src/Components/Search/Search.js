import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Search = (props) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={props.placeholder}
                inputProps={{ 'aria-label': props.placeholder }}
                onChange={(event) => {
                    props.onChange(event.target.value);
                }}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                        props.handleSearch();
                        return false;
                    }
                }}
            />
            <IconButton
                className={classes.iconButton}
                aria-label="search"
                onClick={() => {
                    props.handleSearch();
                }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Search;
