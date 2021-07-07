import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Grid from "@material-ui/core/Grid";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { borderBottom } from "@material-ui/system";
import clsx from 'clsx'
import store from '../../redux'
import { connect } from 'react-redux'
import { createUpdateBoudingBoxAction } from '../../redux/action/BoundingBoxAction'
import { createSetCurrentCategoryAction, createSetSelectedBoundingBoxAction } from '../../redux/action/GeneralReducerAction'
const useStyle = makeStyles((theme) => ({
  flexItem: {
    flexBasis: "17.5vw",
    padding: "4px"
  },
  selectSpan: {
    "& span": {
      color: "black",
      fontSize: "1rem",
      fontFamily: `'Ubuntu','sans-serif'`
    },
  },
  center: {
    alignItems: "center"
  },
  selectListAfter: {
    "& div": {
      "&:after": {
        content: "fsad",
        borderBottom: "0.5px solid gray",
        display: "inline-block",
        width: "auto",
      },
    },
  },

}));
export const categories = ["人 行人类 成年人",
  "人 行人类 孩童",
  "人 行人类 轮椅",
  "人 行人类 婴儿车",
  "人 行人类 残障人士",
  "人 行人类 警察",
  "人 行人类 建筑工人",
  "动物",
  "汽车类 汽车",
  "汽车类 摩托车",
  "汽车类 自行车",
  "汽车类 铰接客车",
  "汽车类 非铰接客车",
  "汽车类 卡车",
  "汽车类 工程车",
  "汽车类 救护车",
  "汽车类 警车",
  "汽车类 挂车",
  "可移动对象.路障",
  "可移动对象.路障桶",
  "可移动对象.（推拉）",
  "可移动对象.废墟",
  "静止对象.自行车支架"
]
export const class_colors = [
  "#3ABB9D",
  "#4DA664",
  "#2F6CAD",
  "#4590B6",
  "#5CADCF",
  "#3585C5",
  "#2CA786",
  "#6ABB72",
  "#E66B5B",
  "#A28F85",
  "#F79E3D",
  "#75706B",
  "#EE7841",
  "#D1D5D8",
  "#CC4846",
  "#DC5047",
  "#28324E",
  "#EFEFEF",
  "#485675",
  "#F2D46F",
  "#533D7F",
  "#9069B5",
  "#F7C23E"
]
function returnCategory(setCategory, currentFrameIndex) {
  const classes = useStyle()


  return categories.map((value, index) => {
    return (
      <a key={index}
        style={{ cursor: "pointer" }}>
        <li
          className={classes.selectMarker}
          onClick={() => {
            setCategory(index, currentFrameIndex,)
          }}
          onMouseEnter={(event) => {
            // console.log(event)
            event.target.style.backgroundColor = "white"
            event.target.style.color = "black"
            event.target.classList.add("selected")
          }}
          onMouseLeave={(event) => {
            // console.log(event.target);
            event.target.style.backgroundColor = class_colors[index]
            event.target.style.color = "white"
            event.target.classList.remove("selected")
          }}
          style={{ backgroundColor: class_colors[index], color: "white" }}>
          {value}
        </li>
      </a>)
  })
}
const returnBoudingBoxList = (Collection,setCurrentSelectedBoundingBox) => {
  const classes = useStyle()
  return Collection.map((BB, index) => {
    return (<a style={{ cursor: "pointer" }}>
      <li className={classes.selectMarker}
        style={{ backgroundColor: class_colors[BB.category], color: "white" }}
        onClick={() => { setCurrentSelectedBoundingBox(index) }}
      >
        {`BoundingBox (${index}) ${categories[BB.category]}`}
      </li>
    </a>)
  })
}
const mapDispatchToProps = (dispatch) => (
  {
    setCategory: (category, currentFrameIndex, currentBoundingBoxIndex) => {
      dispatch(
        createSetCurrentCategoryAction({ category: category, currentFrameIndex: currentFrameIndex })
      )
    },
    setCurrentSelectedBoundingBox: (SelectedBoundingBoxIndex) => {
      dispatch(
        createSetSelectedBoundingBoxAction(SelectedBoundingBoxIndex)
      )
    }
  })
const mapStateToProps = (state) => ({
  currentFrameIndex: state.GeneralReducer.currentFrameIndex,
  BoundingBoxCollection: state.BoundingBoxCollection
})
function LeftContainer(props) {
  const classes = useStyle();

  const [showClassLabel, setShowClassLabel] = React.useState(false)
  const [showBoundingBox, setShowBoundingBox] = React.useState(false)
  return (
    <Grid item className={clsx(classes.flexItem, "rensiyang")}>
      {"        "}
      <List style={{ paddingTop: 0 }}>
        <ListItem
          button
          onClick={() => {
            setShowClassLabel(!showClassLabel);
          }}
          className={classes.selectListAfter}
        >
          <ListItemIcon className={classes.center}>
            {!showClassLabel ? (
              <ArrowRightIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
            <ListItemText
              primary={`Categories `}
              className={classes.selectSpan}
              style={{ marginLeft: "4px" }}
            />
            <span style={{ marginLeft: "115px" }}> {"(23)"}</span>
          </ListItemIcon>
        </ListItem>
        <Divider style={{ backgroundColor: "rgb(0 0 0 / 8%)", marginLeft: "19px" }} />
        <Collapse in={showClassLabel}>
          {(() => { return (<ul> {returnCategory(props.setCategory, props.currentFrameIndex)} </ul>) })()}
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setShowBoundingBox(!showBoundingBox);
          }}
          className={classes.selectListAfter}
        >
          <ListItemIcon className={classes.center}>
            {!showBoundingBox ? (
              <ArrowRightIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
            <ListItemText
              primary={`标注框 `}
              className={classes.selectSpan}
              style={{ marginLeft: "4px" }}
            />
            <span style={{ marginLeft: "115px" }}>
              {`${props.BoundingBoxCollection[props.currentFrameIndex].length}`}</span>
          </ListItemIcon>
        </ListItem>
        <Collapse in={showBoundingBox}>
          {<ul>
            {returnBoudingBoxList(props.BoundingBoxCollection[props.currentFrameIndex],props.setCurrentSelectedBoundingBox)}
          </ul>}
        </Collapse>
      </List>
    </Grid>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer)