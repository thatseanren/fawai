import Grid from "@material-ui/core/Grid"
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"
import BarChartIcon from '@material-ui/icons/BarChart';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import StorageIcon from '@material-ui/icons/Storage';
import clsx from "clsx";
import Link from 'next/link'
const useStyles = makeStyles({
    briefInfo: {
        marginRight: "8px",
        background: "rgba(0,0,0,.8)",
        padding: "6px 12px",
        alignItems: "center",
        borderRadius: "4px",
        color: "white",
        display: "flex",
        lineHeight: "17px"
    },
    img: {
        backgroundColor: "yellow",
        width: "100%",
        height: "200px",
        "&:hover": {
            "transform": "scale(1.1)"
        }
    },
    miniLabel: {
        position: "absolute", bottom: "10px", right: "8px",
    },
    miniLabel_icon: {
        fontSize: "16px", display: "block", margin: "auto 6px auto 0"
    },
    miniLabel_Span: {
        fontSize: "16px", paddingRight: "6px", borderRight: "1px solid white", display: "flex"
    },
    metaData: {
        boxSizing: "border-box",
        padding: "12px",
        border: "1px solid #e9eef4",
        borderTop: "none",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
    },
    metaData_Div: {
        marginBottom: "10px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "block",
    },
    metaData_Span: {
        "&:after": {
            position: "absolute",
            content: '""',
            display: "block",
            right: 0,
            top: "2px",
            width: "1px",
            height: "10px",
            background: "#000",
            marginRight: "5px"
        }
    },
    // box-shadow for hovering over element. 
    paper_hover: {
        "&:hover:after": {
            position: "absolute",
            content: '""',
            display: "block",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            boxShadow: "5px 5px 18px 0 rgb(123 127 155 / 20%)",
            opacity: 1,
            // zIndex: -1,
            borderRadius: "5px",
            transition: "opacity .3s!important",
            willChange: "auto"
        }
    }
})
export default function Dataset(props) {
    const {data} = props
    console.log(data);
    console.log(1);
    
    const classes = useStyles();
    var tags = [];
    var sample = new Array(100);
    ["3d", "2d", "4d", "3d", "2d", "4d", "3d", "2d", "4d", "3d", "2d", "4d"].forEach(element => {
        tags.push(
            <span
                className={classes.metaData_Span}
                style={{
                    fontSize: "12px",
                    height: "15px",
                    position: 'relative',
                    paddingRight: "15px"
                }}>
                {element || "tags"}
            </span>
        )
    });
    useEffect(() => {
        
    })
    return (
        <div className={"first_Dataset_Div"} style={{ width: "calc(100% - 280px)", display: "flex", paddingTop: "15px", flexWrap: "wrap" }}>
            {tags.map(value =>
                <Link href ="/dataDetailed"  as={`/fork/${"rensiyang"}/1`} >
                    <a style={{ cursor: "pointer", width: "calc((100% - 32px)/3)", height: "fit-content", marginRight: "10px", marginBottom: "16px", position: "relative" }}>
                        <Paper className={clsx(classes.paper_hover, "second_Dataset_Div")} style={{ height: "fit-content", marginRight: "10px", marginBottom: "16px", position: "relative" }} elevation={1} >
                            <Grid container justify="center" style={{ Width: "calc(100% - 32px)", flexFlow: "column" }} >
                                <Grid item className={"forth_Dataset_Div_Grid_item"} style={{ position: "relative", overflow: 'hidden' }}  >
                                    <img className={classes.img} />
                                    <div className={classes.miniLabel} >
                                        <div className={classes.briefInfo}>
                                            <span className={classes.miniLabel_Span} >
                                                {props.type === "video" ? <VideocamIcon className={classes.miniLabel_icon} /> : <ImageIcon className={classes.miniLabel_icon} />}
                                            </span>
                                            <span className={classes.miniLabel_Span} >
                                                <BarChartIcon
                                                    className={classes.miniLabel_icon} />
                                                <i style={{ fontSize: "12px" }}> {props.count || "C"}</i>
                                            </span>
                                            <span style={{ fontSize: "16px", paddingRight: "6px", paddingLeft: "6px", display: "flex" }}>
                                                <StorageIcon
                                                    className={classes.miniLabel_icon} />
                                                <i style={{ fontSize: "12px" }}> {props.size || "S"}</i>
                                            </span>
                                        </div>
                                    </div>
                                </Grid>
                                <div className={classes.metaData}>

                                    <div className={classes.metaData_Div}>
                                        <span
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                height: "18px",
                                            }} >
                                            {props.name || "Dataset Name"}
                                        </span>
                                    </div>
                                    <div className={classes.metaData_Div}>
                                        <span
                                            style={{
                                                fontSize: "12px",
                                                height: "15px",
                                            }}>
                                            {props.category || "Category"}
                                        </span>
                                    </div>
                                    {<div className={classes.metaData_Div} > {tags}</div>}
                                    <div className={classes.metaData_Div}>
                                        <span style={{ fontSize: "12px" }}>
                                            {props.author || "Author"}
                                        </span>
                                    </div>
                                </div>
                            </Grid>

                        </Paper >
                    </a>
                </Link>)}
        </div>)
}