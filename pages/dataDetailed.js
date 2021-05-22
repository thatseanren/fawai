import Head from "next/head";
import Image from "next/image";
import Header from "./header.js";
import React from "react";
import ReactDOM from "react-dom";
import DataSet from "../styles/DataSet.module.css";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import Button from "@material-ui/core/Button";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import clsx from "clsx";
import Dataset from "../component/Grid";
import ForkDialog from "../component/ForkDialog";

const RefDialog = React.forwardRef((props,ref)=>{
    return (<ForkDialog ref={ref}/>)
})
export default class Detailed extends React.Component {
  constructor(props) {
    super(props);
    this.ForkRef = React.createRef();
    this.state = {
      openlist: 0,
      opacity: 0,
      showlist: 0, //显示隐藏数据列表
      isOpen: false,
      filedata: [
        {
          title: "test",
          arr: [
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
          ],
        },
        {
          title: "train",
          arr: [
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
            "0009891e3ca4f4.jpg",
          ],
        },
      ],
      fileindex: [0, 0],
      fileshow: ["block", "none"],
    };
  }
  open = (value) => {
    //展开文章内容
    let openindex = this.state.openlist;
    openindex === 0 ? (openindex = 1) : (openindex = 0);
    this.setState({
      openlist: openindex,
    });
  };

  //鼠标移入移出显示翻页按钮
  openOpacity = (value) => {
    this.setState({
      opacity: 1,
    });
  };
  closeOpacity = (value) => {
    this.setState({
      opacity: 0,
    });
  };

  dataList = (value) => {
    //打开/关闭数据列表
    this.setState({
      showlist: value,
    });
  };

  openfile = (value) => {
    //数据列表层级菜单展开/隐藏
    let show = this.state.fileshow;
    show[value] === "block" ? (show[value] = "none") : (show[value] = "block");
    this.setState({
      fileshow: show,
    });
  };
  componentDidMount() {
    console.log(this.ForkRef.current);
  }
  render() {
    return (
      <div>
        <Header />
        <RefDialog ref={this.ForkRef} />
        <div className={DataSet.home}>
          <div className={DataSet.grid}>
            <div className={DataSet.publicDataChip}>
              <div className={DataSet.chipContainer}>
                <VisibilityOutlinedIcon
                  style={{ fontSize: "17px", marginLeft: "5px" }}
                />
              </div>
              <div className={DataSet.publicDataChipData}>4137</div>
            </div>
            <div className={DataSet.publicDataChip}>
              <div className={DataSet.chipContainer}>
                <ThumbUpAltOutlinedIcon
                  style={{ fontSize: "17px", marginLeft: "5px" }}
                />
              </div>
              <div className={DataSet.publicDataChipData}>1</div>
            </div>
            <div className={DataSet.publicDataChip}>
              <div className={DataSet.chipContainer}>
                <StarBorderOutlinedIcon
                  style={{ fontSize: "17px", marginLeft: "5px" }}
                />
              </div>
              <div className={DataSet.publicDataChipData}>15</div>
            </div>
          </div>
          <div className={DataSet.datasetHead}>
            <div className={DataSet.thumbnail}>
              <div className={DataSet.imgHome}>
                <Image
                  style={{ borderRadius: "5px" }}
                  src="/cover-CompCars.png"
                  alt="Fawai Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className={DataSet.dataName}>
                <div className={DataSet.detailedTitle}>CompCars</div>
                <span style={{ fontSize: "14px" }}>
                  创建来自Data Decorators
                </span>
              </div>
            </div>
            <div className={DataSet.dataButton}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                  this.ForkRef.current
                }}
              >
                管理数据
              </Button>
            </div>
          </div>
          <div className={DataSet.tabsContainer}>
            <div className={DataSet.muiButton}>
              <ArtTrackIcon />
              <div style={{ marginLeft: "5px" }}>概要</div>
            </div>
          </div>
          <div className={DataSet.DatasetOverview}>
            <div className={DataSet.overviewField}>
              <div className={DataSet.fieldHome}>
                <div
                  className={
                    this.state.openlist === 0
                      ? DataSet.mdContainerClose
                      : DataSet.mdContainer
                  }
                >
                  <h1>Overview</h1>
                  <p>
                    The Comprehensive Cars (CompCars) dataset contains data from
                    two scenarios, including images from web-nature and
                    surveillance-nature. The web-nature data contains 163 car
                    makes with 1,716 car models. There are a total of 136,726
                    images capturing the entire cars and 27,618 images capturing
                    the car parts. The full car images are labeled with bounding
                    boxes and viewpoints. Each car model is labeled with five
                    attributes, including maximum speed, displacement, number of
                    doors, number of seats, and type of car. The
                    surveillance-nature data contains 50,000 car images captured
                    in the front view. Please refer to our paper for the
                    details.
                  </p>
                  <h1>Overview</h1>
                  <p>
                    The Comprehensive Cars (CompCars) dataset contains data from
                    two scenarios, including images from web-nature and
                    surveillance-nature. The web-nature data contains 163 car
                    makes with 1,716 car models. There are a total of 136,726
                    images capturing the entire cars and 27,618 images capturing
                    the car parts. The full car images are labeled with bounding
                    boxes and viewpoints. Each car model is labeled with five
                    attributes, including maximum speed, displacement, number of
                    doors, number of seats, and type of car. The
                    surveillance-nature data contains 50,000 car images captured
                    in the front view. Please refer to our paper for the
                    details.
                  </p>
                </div>
                <div className={DataSet.expandBar} onClick={() => this.open()}>
                  {this.state.openlist === 0 ? (
                    <ExpandMoreOutlinedIcon style={{ margin: "0px auto" }} />
                  ) : (
                    <ExpandLessOutlinedIcon style={{ margin: "0px auto" }} />
                  )}
                </div>
              </div>
              <div className={DataSet.fieldHome}>
                <div className={DataSet.previewTitle}>
                  <div className={DataSet.previewTitleLeft}>数据预览</div>
                  <div className={DataSet.previewTitleBtnField}>
                    <Button variant="outlined" color="primary">
                      查看数据
                    </Button>
                  </div>
                </div>
                <div className={DataSet.groupContainer}>
                  <div className={DataSet.groupSideContainer}>
                    <div
                      className={clsx(DataSet.poweredBy, DataSet.poweredTitle)}
                    >
                      <span>Powered By Graviti</span>
                      <div className={DataSet.ico}>
                        <FormatIndentDecreaseIcon />
                      </div>
                    </div>
                    <div
                      style={{
                        display: this.state.showlist === 0 ? "block" : "none",
                      }}
                    >
                      <div className={DataSet.fileSelectorContainer}>
                        <div className={DataSet.objectPathDisplay}>
                          .segment/t...06ef33c.jpg
                        </div>
                        <div
                          className={DataSet.objectSelectButton}
                          onClick={() => this.dataList(1)}
                        >
                          Select
                        </div>
                      </div>
                      <div
                        className={clsx(DataSet.poweredBy, DataSet.poweredList)}
                      >
                        <span>Annotation Type</span>
                        <div title="455ff">
                          <ContactSupportOutlinedIcon
                            style={{ fontSize: "18px", marginLeft: "3px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={DataSet.fileLstContainer}
                      style={{
                        display: this.state.showlist === 1 ? "block" : "none",
                      }}
                    >
                      <div
                        className={DataSet.button}
                        onClick={() => this.dataList(0)}
                      >
                        <ArrowBackIosIcon
                          style={{ fontSize: "12px", alignSelf: "center" }}
                        />
                        <span>bcak</span>
                      </div>
                      <div className={DataSet.fileList}>
                        <div className={DataSet.segmentContainer}>
                          {this.state.filedata.map((item, index) => {
                            return (
                              <div>
                                <div
                                  className={DataSet.segmentTitle}
                                  onClick={() => this.openfile(index)}
                                >
                                  {this.state.fileshow[index] === "block" ? (
                                    <ArrowDropDownIcon />
                                  ) : (
                                    <ArrowRightIcon />
                                  )}
                                  <div className={DataSet.segmentName}>
                                    {item.title}
                                  </div>
                                </div>
                                <div
                                  className={DataSet.objectListContainer}
                                  style={{
                                    display: this.state.fileshow[index],
                                  }}
                                >
                                  {item.arr.map((k, v) => {
                                    return (
                                      <div
                                        className={
                                          v === this.state.fileindex[index]
                                            ? clsx(
                                                DataSet.objectBlock,
                                                DataSet.activeObjectBlock
                                              )
                                            : DataSet.objectBlock
                                        }
                                      >
                                        {k}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={DataSet.viewerGroupDisplay}
                    onMouseMove={() => this.openOpacity()}
                    onMouseOut={() => this.closeOpacity()}
                  >
                    <div style={{ opacity: this.state.opacity }}>
                      <div
                        className={DataSet.viewerArrowLeft}
                        style={{ left: "20px" }}
                      >
                        <ArrowBackIosIcon style={{ fontSize: "12px" }} />
                      </div>
                      <div
                        className={DataSet.viewerArrowLeft}
                        style={{ right: "20px" }}
                      >
                        <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
                      </div>
                    </div>

                    <img src="/d84.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={DataSet.DatasetOverviewInfoSide}>
              <div className={DataSet.DatasetInfoFieldInfoBlock}>
                <div className={DataSet.DatasetInfoFieldInfoTitle}>
                  数据集信息
                </div>
                <div className={DataSet.DatasetInfoFieldInfoEntry}>
                  <span className={DataSet.DatasetInfoFieldInfoSubtitle}>
                    应用场景
                  </span>
                  <span className={DataSet.DatasetInfoFieldTagChip}>
                    <span className={DataSet.DatasetDetailTagChipChip}>
                      Vehicle
                    </span>
                  </span>
                  <span className={DataSet.DatasetInfoFieldTagChip}>
                    <span className={DataSet.DatasetDetailTagChipChip}>
                      Box
                    </span>
                  </span>
                </div>
                <div className={DataSet.DatasetInfoFieldInfoEntry}>
                  <span className={DataSet.DatasetInfoFieldInfoSubtitle}>
                    应用场景
                  </span>
                  <span className={DataSet.DatasetInfoFieldTagChip}>
                    <span className={DataSet.DatasetDetailTagChipChip}>
                      Vehicle
                    </span>
                  </span>
                  <span className={DataSet.DatasetInfoFieldTagChip}>
                    <span className={DataSet.DatasetDetailTagChipChip}>
                      Box
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
