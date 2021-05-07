import Grid from "@material-ui/core/Grid"
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"
import BarChartIcon from '@material-ui/icons/BarChart';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import StorageIcon from '@material-ui/icons/Storage';
const styles = {
    root: {
        width: "100px"
    }
}
function HigherOrderComponent(props) {
    const { classes, children, ...rest } = props;
    console.log(props)
    return <Grid className={classes.root} children={children} container={rest.container} justify={rest.justify}></Grid>
}
HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};
const Grid_ = withStyles(styles)(HigherOrderComponent)

export default class Dataset extends React.Component {
    render() {
        return (
            <Paper elevation={1}>
                <Grid_ container justify="center" >
                    <Grid style={{ position: "relative" }} item >
                        <img style={{ backgroundColor: "white", width: "300px", height: "200px" }} />

                        <div className={"MiniLabel"} style={{ position: "absolute", bottom: "8px", right: "8px", zIndex: 1 }} >
                            <div className={"briefInfo"} style={{
                                marginRight: "8px",
                                background: "rgba(0,0,0,.8)",
                                padding: "6px 12px",
                                alignItems: "center",
                                borderRadius: "4px",
                                color: "white"
                            }}>
                                <span style={{ borderRight: "1px solid #fff", padding: "0 8px" }} >
                                    <VideocamIcon />
                                </span>
                                <span style={{ borderRight: "1px solid #fff", padding: "0 8px" }} >
                                    <BarChartIcon /> <i> {"C"}</i>
                                </span>
                                <span>
                                    <StorageIcon /> <i> {"S"}</i>
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Typography gutterBottom variant="subtitle1">
                        {" Dataset Name"}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {"Category"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {" tags"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {"Author"}
                    </Typography>
                </Grid_>
            </Paper >)
    }
}