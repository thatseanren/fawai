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
  body: {
    position: "relative",
    top: "56px",
    flexDirection: "column",
    margin: "16px 8px",
    width: "initial",
  },
  option: {
    justifyContent: "space-between",
    margin: "16px",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    height: "40px",
    width: "initial",
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
  paperContainer: {
    display: "flex",
    margin: "8px",
    padding: "0px",
    flexFlow: "nowrap",
  },
  taskPaper: {
    margin: "8px",
    // https://css-tricks.com/almanac/selectors/n/nth-of-type/
    "& > div:nth-of-type(1)": {
      padding: "20px 16px 12px",
      "& > div:nth-of-type(1)": {
        color: "rgb(75,57,83)",
        letterSpacing: "1px",
        fontWeight: "bold",
        marginBottom: "12px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      "& > div:nth-of-type(2)": {
        "& div": {
          background: "rgba(90,60,255,0.063)",
          letterSpacing: "0.5px",
          fontSize: "12px",
          padding: "2px 8px",
          color: "rgb(90,60,255)",
          marginRight: "8px",
        },
      },
      "& > div:nth-of-type(3)": {
        "& > div:nth-of-type(1)": {
          flexBasis: "56px",
          color: "#999",
          fontSize: "14px",
          boxFlex: "0",
        },
        "& > div:nth-of-type(2)": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingLeft: "16px",
          fontSize: "14px",
        },
      },
      "& > div:nth-of-type(4)": {
        "& > div:nth-of-type(1)": {
          flexBasis: "56px",
          color: "#999",
          fontSize: "14px",
          boxFlex: "0",
        },
        "& > div:nth-of-type(2)": {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingLeft: "16px",
          fontSize: "14px",
        },
      },
    },
    "& > div:nth-of-type(2)": {
      whiteSpace: "nowrap",
      marginBottom: "16px",
      padding: "0px 16px",
      textOverflow: "ellipsis",
      letterSpacing: "0.2px",
      color: "rgb(39, 42,66)",
      fontSize: "12px",
    },
    "& > div:nth-of-type(3)": {
      "& span": {
        marginLeft: "12px",
        fontSize: "14px",
        fontWeight: "bold",
        letterSpacing: "0.5px",
        color: "rgb(4,178,238)",
      },
    },
    info: {},
  },
});
const Tasktag = (props: { tag: string }) => {
  const classes = useStyles();
  return <div>{props.tag || "2D矩形"}</div>;
};
const PaperLikeTask = (props: {
  tags: string[];
  Name: string;
  Team: string;
  Quantity: string;
  TaskStatus: string;
}) => {

  const classes = useStyles();
  
  return (
    <Paper className={classes.taskPaper} component={"taskPaper"}>
      <Grid container>
        <Grid item> {props.Name || "Sample"} </Grid>
        <Grid item container style={{ marginBottom: "12px" }}>
          {/* {
            props.tags.map(value =>{
              return(<Tasktag tag={value}/>)
            })
          } */}
          <Tasktag tag={"Sample"} />
        </Grid>
        <Grid item container style={{ marginBottom: "8px" }}>
          <div children="数据集" />
          <div children={props.Team || "Sample"} />
        </Grid>
        <Grid item container>
          <div children="数据量" />
          <div children={props.Quantity || "Sample"} />
        </Grid>
      </Grid>
      <Grid item container>
        <AssignmentIndIcon className={classes.icon} />
        <span style={{ color: "rgb(39, 42,66))" }}> {"雷达开发部"}</span>
        <span style={{ margin: "0px 6px" }}> | </span>
        <ScheduleIcon className={classes.icon} />
        <span style={{ color: "rgb(39, 42,66))" }}> 2021-5-17 </span>
      </Grid>
      <Divider light />
      <Grid item container style={{ padding: "12px 16px" }}>
        <i>
          <FiberManualRecordIcon
            style={{ color: "rgb(4,178,238)", fontSize: "14px" }}
          ></FiberManualRecordIcon>
        </i>
        <span> {props.TaskStatus || "Sample"} </span>
      </Grid>
    </Paper>
  );
};

export const AnnotationTask: React.FC<{}> = (props) => {
  const [value, setValue] = React.useState(1);
  const [tab, setTab] = React.useState(1);
  const handleTabChange = (e, v) => {
    setTab(v);
  };
  const needTask: () => {
    finish?: {
      tags: string[];
      Name: string;
      Team: string;
      Quantity: string;
      TaskStatus: string;
    }[];
    unfinished?: {
      tags: string[];
      Name: string;
      Team: string;
      Quantity: string;
      TaskStatus: string;
    }[];
  } = () => {
    
    return ["a"];
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Grid container component={"body"} className={classes.body}>
      <Grid item container className={classes.option}>
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
          />
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
            className={classes.paperContainer}
            value={1}
            children={
              <>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
              </>
            }
          />
          <TabPanel
            // component="paperContainer"
            className={classes.paperContainer}
            value={2}
            children={
              <>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
                <PaperLikeTask
                  tags={["1", "2d"]}
                  Name={"HardCoding"}
                  Team={"HardCoding"}
                  Quantity={"HardCoding"}
                  TaskStatus={"HardCoding"}
                ></PaperLikeTask>
              </>
            }
          />
        </TabContext>
      </Grid>
    </Grid>
  );
};
export default AnnotationTask;
