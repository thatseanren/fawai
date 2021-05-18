import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Divider, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({

    icon: {
        fontSize: "16px",
        marginRight: "4px",
        color: "rgb(190,192,208)"
    },
    "& :after": {
        "backgroundColor": "rgb(4, 178, 238)",
        "caretColor": "rgb(4,178,238)",
        "fontSize": "13px",
        borderRadius: "50%",
        display: "inline-block",
        height: "100%",
        opacity: 0,
        pointerEvents: "none",
        position: "absolute",
        transform: "scale(1.3)",
        width: "100%",
        transition: "opacity .2s cubic-bezier(.4,0,.6,1)"
    }

})

export default function AnnotationTask(props) {
    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container id="AnnotationTasksContainer" style={{ position: "relative", top: "56px" }}>
            <Grid item container style={{ justifyContent: "space-between" }}>
                <div style={{ flexBasis: "347px" }}>
                    <Autocomplete
                        freeSolo
                        options={["fdsa", "dfsafsda"]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="请输入项目名称"
                                margin="normal"
                                variant="outlined"
                            />
                        )}
                    ></Autocomplete>
                </div>
                <div>
                    <Button color="primary" variant="text">
                        {" "}
            服务介绍
          </Button>
                    <Button color="primary" variant="outlined">
                        {" "}
            新建标注项目
          </Button>
                </div>
            </Grid>
            <Grid item >
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                    aria-label="myTabs">
                    <Tab label={`我的待标目标 (${2})`} />
                    <Tab label={`全部项目 (${3})`} />
                </Tabs>

            </Grid>
            <Grid item>
                <PaperLikeTask>

                </PaperLikeTask>
            </Grid>
        </Grid>
    );
}

function PaperLikeTask(props) {
    const classes = useStyles()
    return (
        <Paper>
            <Grid container style={{ padding: "20px 16px 12px" }}>
                <Grid item style={{ color: "rgb(75,57,83)", letterSpacing: "1px", fontWeight: "bold", marginBottom: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {"Name"}
                </Grid>
                <Grid item container style={{ marginBottom: "12px" }}>
                    <TagsWithin />
                </Grid>
                <Grid item container style={{ marginBottom: "8px" }}>
                    <div style={{ flexBasis: "56px", color: "#999", fontSize: "14px", boxFlex: "0" }} children="数据集" />
                    <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} children="一汽南京" />
                </Grid>
                <Grid item container>
                    <div style={{ flexBasis: "56px", color: "#999", fontSize: "14px", boxFlex: "0" }} children="数据量" />
                    <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} children="10000" />
                </Grid>
                <Grid item style={{ whiteSpace: "nowrap", marginBottom: "16px", padding: "0px 16px", textOverflow: "ellipsis", letterSpacing: "0.2px", color: "rgb(39, 42,66)", fontSize: "12px" }}>
                    < AssignmentIndIcon className={classes.icon} />
                    <span style={{ color: "rgb(39, 42,66))" }}> fdas</span>
                    <Divider />
                    < ScheduleIcon className={classes.icon} />
                    <span style={{ color: "rgb(39, 42,66))" }}> 2021-5-17 </span>
                </Grid>
                <Grid item container style={{ padding: "12px 16px" }}>
                    <div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}
function TagsWithin(props) {
    return (
        <div style={{ background: "rgba(90,60,255,0.063)", letterSpacing: "0.5px", fontSize: "12px", padding: "2px 8px", color: "rbg(90,60,255)", marginRight: "8px" }}>
            {"2D矩形"}
        </div>
    )
}