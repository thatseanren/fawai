import Head from "next/head";
import Image from "next/image";
import Header from "./header.js";
import DataSetLeft from "./DataSetLeft.js";
import React from "react";
import ReactDOM from "react-dom";
import DataSet from "../styles/DataSet.module.css";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import Dataset from "../component/Grid";
import { HomeState } from "./index";
import axios from "axios";
import server, { option } from "./main_config";
export default class My extends React.Component<
  {},
  HomeState & { focusFn: number }
> {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      focusFn: 0,
      data: [{ 
        title:"数据格式",
        arr: ['4','5'], 
      },
      { 
        title:"标注类型",
        arr: ['4','5'], 
      },],
    };
  }

  focusFn = (value) => {
    this.setState({
      focusFn: 1,
    });
  };

  ononBlur = (value) => {
    this.setState({
      focusFn: 0,
    });
  };
  componentDidMount() {
    axios
      .get(`${server}${option.dataset}`)
      .then((res) => {
        if (
          res.status === 200 &&
          !(console.log(`${server}${option.dataset}`), 0)
        ) {
          this.setState({ List: res.data.data });
          console.log(res.data.data);
        } else {
          console.log(`${server}${option.dataset} mulfunctioning`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });


      axios.get(server + 'get_dataset_info',{})

        .then((response) => {
          response.data.data
          var setdata=this.state.data;
          setdata[0].arr=response.data.data.tags
          setdata[1].arr=response.data.data.tasks
          this.setState({
            data:setdata
          })
        })
        .catch(function (error) {
            console.log(error);
        });
  }
  render() {
    return (
      <div>
        <Header />
        <div className={DataSet.home}>
          <div className={DataSet.title}>我的数据集</div>
          <div className={DataSet.listContainer}>
            <div className={clsx(DataSet.filterContainer)}>
              <div className={DataSet.search}>
                <input
                  placeholder="搜索数据集"
                  className={
                    this.state.focusFn === 0 ? DataSet.inp : DataSet.blue
                  }
                  onFocus={this.focusFn}
                  onBlur={this.ononBlur}
                />
                <div className={DataSet.iconse}>
                  <SearchIcon
                    className={
                      this.state.focusFn === 0 ? DataSet.sear : DataSet.searblue
                    }
                  />
                </div>
              </div>
              <div className={DataSet.leftContent}>
                <DataSetLeft data={this.state.data} />
              </div>
            </div>
            <Dataset data={this.state.List} accessibility="private"/>
          </div>
        </div>
      </div>
    );
  }
}
