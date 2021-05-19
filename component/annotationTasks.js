import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Divider, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SearchIcon from "@material-ui/icons/Search";
import PagesIcon from "@material-ui/icons/Pages";
import { TabPanel, TabContext } from "@material-ui/lab";
const useStyles = makeStyles({
  Tasktag: {
    root: {
      background: "rgba(90,60,255,0.063)",
      letterSpacing: "0.5px",
      fontSize: "12px",
      padding: "2px 8px",
      color: "rgb(90,60,255)",
      marginRight: "8px",
    },
  },

  autocomplete: {
    root: { width: "343px" },
    '& div[class*="MuiFormControl-root"][class*="MuiTextField-root"]': {
      margin: 0,
      "& label": {
        fontSize: "14px",
        lineHeight: "7px",
      },
      '& div[class*="MuiInputBase-root MuiOutlinedInput-root MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd"]':
        {
          padding: 0,
        },
      '& div[class*="MuiInputBase-root"][class*="Mui-focused"]': {
        paddingBottom: "0",
        paddingTop: "0",
        "& input": { padding: "8px 0px 8px 12px" },
      },
      '&  div[class*="MuiInputBase-root"]': {
        "& input": { padding: "8px 0px 8px 12px" },
      },
    },
  },
  service: {
    '& span[class*="MuiButton-label"]': {
      marginRight: "16px",
      fontSize: "14px",
    },
  },
  annotation: {
    "& span": {
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "1.25px",
    },
  },
  icon: {
    fontSize: "16px",
    marginRight: "4px",
    color: "rgb(190,192,208)",
  },
  "& :after": {
    backgroundColor: "rgb(4, 178, 238)",
    caretColor: "rgb(4,178,238)",
    fontSize: "13px",
    borderRadius: "50%",
    display: "inline-block",
    height: "100%",
    opacity: 0,
    pointerEvents: "none",
    position: "absolute",
    transform: "scale(1.3)",
    width: "100%",
    transition: "opacity .2s cubic-bezier(.4,0,.6,1)",
  },
  my_tab: {
    "& div": {
      '& div[class*="MuiTabs-flexContainer"]': {
        "& button": {
          padding: "0px",
          "& span": {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            width: "auto",
          },
        },
      },
      "& span": {
        height: "3px",
      },
    },
  },
});

function Tasktag(props) {
  const classes = useStyles();
  return <div className={classes.Tasktag.root}>{props.tag || "2D矩形"}</div>;
}

export default function AnnotationTask(props) {
  const [value, setValue] = React.useState(1);
  const [tab, setTab] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTabChange = (e, v) => {
    setTab(v);
  };
  const classes = useStyles();
  return (
    <Grid
      container
      id="AnnotationTasksContainer"
      style={{
        position: "relative",
        top: "56px",
        flexDirection: "column",
        margin: "16px 8px",
        width: "initial",
      }}
    >
      <Grid
        item
        container
        style={{
          justifyContent: "space-between",
          margin: "16px",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          height: "40px",
          width: "initial",
        }}
      >
        <Grid item style={{ flexBasis: "347px" }}>
          <Autocomplete
            className={classes.autocomplete}
            freeSolo
            options={["fdsa", "dfsafsda"]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="请输入项目名称"
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: <SearchIcon style={{ fontSize: "24px" }} />,
                }}
              />
            )}
          ></Autocomplete>
        </Grid>
        <Grid item container style={{ width: "auto" }}>
          <Button color="primary" variant="text" className={classes.service}>
            <PagesIcon style={{ fontSize: "16px", marginRight: "8px" }} />
            服务介绍
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.annotation}
          >
            {" "}
            新建标注项目
          </Button>
        </Grid>
      </Grid>
      <Grid item component={"tags"}>
        <TabContext value={tab}>
          <Tabs
            value={tab}
            indicatorColor="primary"
            onChange={handleTabChange}
            aria-label="myTabs"
            className={classes.my_tab}
          >
            <Tab label={`我的待标目标 (${3})`} value={1} />
            <Tab label={`全部项目 (${6})`} value={2} />

            {/* <TabPanel value={2} /> */}
          </Tabs>
          <TabPanel
            style={{
              flexFlow: "nowrap",

              display: "flex",
              margin: "8px",
              padding: "0px",
            }}
            value={1}
            children={
              <>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
              </>
            }
          />
          <TabPanel
            style={{
              display: "flex",
              margin: "8px",
              padding: "0px",

              flexFlow: "nowrap",
            }}
            value={2}
            children={
              <>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
                <PaperLikeTask></PaperLikeTask>
              </>
            }
          />
        </TabContext>
      </Grid>
    </Grid>
  );
}

function PaperLikeTask(props) {
  const classes = useStyles();
  return (
    <Paper style={{ margin: "8px" }}>
      <Grid container style={{ padding: "20px 16px 12px" }}>
        <Grid
          item
          style={{
            color: "rgb(75,57,83)",
            letterSpacing: "1px",
            fontWeight: "bold",
            marginBottom: "12px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {"Name"}
        </Grid>
        <Grid item container style={{ marginBottom: "12px" }}>
          <Tasktag />
        </Grid>
        <Grid item container style={{ marginBottom: "8px" }}>
          <div
            style={{
              flexBasis: "56px",
              color: "#999",
              fontSize: "14px",
              boxFlex: "0",
            }}
            children="数据集"
          />
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              paddingLeft: "16px",
              fontSize: "14px",
            }}
            children="一汽南京"
          />
        </Grid>
        <Grid item container>
          <div
            style={{
              flexBasis: "56px",
              color: "#999",
              fontSize: "14px",
              boxFlex: "0",
            }}
            children="数据量"
          />
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              paddingLeft: "16px",
              fontSize: "14px",
            }}
            children="10000"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{
          whiteSpace: "nowrap",
          marginBottom: "16px",
          padding: "0px 16px",
          textOverflow: "ellipsis",
          letterSpacing: "0.2px",
          color: "rgb(39, 42,66)",
          fontSize: "12px",
        }}
      >
        <AssignmentIndIcon className={classes.icon} />
        <span style={{ color: "rgb(39, 42,66))" }}> fdas</span>
        <span style={{ margin: "0px 6px" }}> | </span>
        <ScheduleIcon className={classes.icon} />
        <span style={{ color: "rgb(39, 42,66))" }}> 2021-5-17 </span>
      </Grid>

      <Divider light />
      <Grid
        item
        container
        style={{
          padding: "12px 16px",
        }}
      >
        <i>
          <FiberManualRecordIcon
            style={{ color: "rgb(4,178,238)", fontSize: "14px" }}
          ></FiberManualRecordIcon>
        </i>

        <span
          style={{
            marginLeft: "12px",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            color: "rgb(4,178,238)",
          }}
        >
          {" "}
          {"标注中"}{" "}
        </span>
      </Grid>
    </Paper>
  );
}
