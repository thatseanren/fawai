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
        maxWidth: "300px",
        flexFlow: "column"
    }
}
function HigherOrderComponent(props) {
    const { classes, children, ...rest } = props;
    return <Grid className={classes.root} children={children} container={rest.container} justify={rest.justify}></Grid>
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const Grid_ = withStyles(styles)(HigherOrderComponent)


export default class Dataset extends React.Component {
    render() {
        return (
            <div style={{width:"calc(100% - 280px)", border:"1px solid black"}}>
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
                                color: "white",
                                display: "flex"
                            }}>
                                <div style={{ borderRight: "1px solid #fff", padding: "0 8px",verticalAlign:"middle",display: "flex",lineHeight: "30px" }} >
                                    <VideocamIcon />
                                </div>
                                <div style={{ verticalAlign:"middle", borderRight: "1px solid #fff", padding: "0 8px",display: "flex",lineHeight: "30px" }} >
                                    <BarChartIcon /> <i> {"C"}</i>
                                </div>
                                <div style={{display: "flex",lineHeight: "30px",paddingLeft:"8px"}}>
                                    <StorageIcon /> <i style={{}}> {"S"}</i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <div style={{
                        boxSizing: "border-box",
                        padding: "12px",
                        border: "1px solid #e9eef4",
                        borderTop: "none",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                    }}>
                        <span style={{
                            fontSize: "16px", fontWeight: 600,
                            marginBottom: "10px",
                            height: "18px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            display: "block",
                        }} >
                            {" Dataset Name"}
                        </span>
                        <span style={{
                            fontSize: "12px",
                            marginBottom: "10px",
                            height: "15px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            display: "block",
                        }}>
                            {"Category"}
                        </span>
                        <span style={{
                            fontSize: "12px",
                            marginBottom: "10px",
                            height: "15px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            display: "block",
                        }}>
                            {" tags"}
                        </span>
                        <span style={{ fontSize: "12px" }}>
                            {"Author"}
                        </span>
                    </div>

                </Grid_>
            </Paper >
            </div>)
    }
}