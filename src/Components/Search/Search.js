import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import debounce from 'lodash.debounce';

import configureBlogStore from '../../hooks-store/blogs';
import { useStore } from '../../hooks-store/store';

configureBlogStore();

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

const Search = () => {
    const [state, dispatch] = useStore();

    let baseUrl =
        'https://pixabay.com/api/?key=16674951-af46aa453f0d4615c730ee60d';

    const [term, setTerm] = useState('');

    useEffect(() => {
        handleSearch();

        window.onscroll = debounce(() => {
            handleScroll();
        }, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            handleSearch(false, 'APPEND_BLOGS');
        }
    };

    const classes = useStyles();

    const handleSearch = (init = true, method = 'FETCH_BLOGS') => {
        let searchTerm = term ? baseUrl + `&q=${term}` : baseUrl;

        searchTerm += '&page=' + state.searchPage;

        if (!state.blogsLoaded || !init) {
            axios.get(searchTerm).then((response) => {
                console.log(response);
                dispatch(method, response.data.hits ? response.data.hits : []);
            });
        }
    };

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Blogs"
                inputProps={{ 'aria-label': 'search blogs' }}
                onChange={(event) => {
                    setTerm(event.target.value);
                }}
                onKeyDown={(event) => {
                    if (event.keyCode == 13) {
                        event.preventDefault();
                        handleSearch(false);
                        return false;
                    }
                }}
            />
            <IconButton
                className={classes.iconButton}
                aria-label="search"
                onClick={() => {
                    handleSearch(false);
                }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Search;
