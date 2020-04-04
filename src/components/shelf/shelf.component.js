import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {CardComponent} from "..";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: "50px",
    },

    expanded: {
        paddingTop: "20px",
        minHeight: "600px"
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export const ShelfComponent = (props) => {

    const classes = useStyles();

    const {title, books, moveBook, shelves} = props;

    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls={title}
                    id={title + "-shelf"}
                >
                    <Typography variant={'h4'}>{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expanded}>
                    <Grid className="item" container spacing={4}>
                        {books.map((book) => (
                            <Grid key={book.id} item xs={12} sm={6} md={4} lg={3} xl={4}>
                                <CardComponent
                                    shelves={shelves}
                                    book={book}
                                    moveBook={(destination) => moveBook(book, destination)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
