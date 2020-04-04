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

const useStyles = makeStyles((theme) => ({
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
    const imageLink = book.imageLinks.thumbnail;
    const subTitle = "By " + (authors && authors.length ? authors.join(", ") : "unknown author");

    const options = Object.keys(shelves).filter((key) => (key !== book.shelf)).map((key) => (shelves[key].title));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        moveBook(option);
        setAnchorEl(null);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="options" onClick={handleClick} disabled={!options.length}><MoreVertIcon/></IconButton>
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
                    <MenuItem key={option} onClick={() => handleClose(option)}>
                        {option}
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
