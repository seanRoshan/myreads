import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
        maxHeight: 600
    }
}));

export const CardComponent = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const {book, moveBook, shelves} = props;
    const {title, authors} = book;
    const imageLink = book && book.imageLinks && book.imageLinks.thumbnail ?
        book.imageLinks.thumbnail : "https://www.southtabor.com/newsite/wp-content/themes/consultix/images/no-image-found-360x250.png";
    const subTitle = "By " + (authors && authors.length ? authors.join(", ") : "unknown author");

    const options = Object.keys(shelves).filter((key) => (key !== book.shelf)).map((key) => ({
        key,
        title: shelves[key].title
    }));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMove = (option) => {
        moveBook(option);
        handleClose();
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="actions" onClick={handleClick}
                                disabled={!options.length}><MoreVertIcon/></IconButton>
                }
                title={title}
                titleTypographyProps={{variant: 'h6'}}
                subheader={subTitle}
                subheaderTypographyProps={{variant: 'subtitle2'}}
            />
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem key="moveTo" selected disabled>
                    Move to
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.key} onClick={() => handleMove(option.key)}>
                        {option.title}
                    </MenuItem>
                ))}
            </Menu>
            <CardMedia
                className="book-image"
                component="img"
                src={imageLink}
                title={title}
            />
        </Card>
    );
};


CardComponent.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
    shelves: PropTypes.object.isRequired
};
