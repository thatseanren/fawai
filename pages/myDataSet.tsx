import Head from "next/head";
import Image from "next/image";
import Header from "./header.js";
import DataSetLeft from "./DataSetLeft.js";
import React from "react";
import ReactDOM from "react-dom";
import DataSet from "../styles/DataSet.module.css";
import SearchIcon from "@material-ui/icons/Search";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
import Dataset from "../component/Grid";
import { HomeState } from "./index";
import axios from "axios";
import server, { option } from "./main_config";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default class My extends React.Component<
  {},
  HomeState & { focusFn: number }
> {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      focusFn: 0,
      pages:[],
      pagesIndex:1,
      valueName:"",
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
  handleKeyDown = (e) => {
    console.log(1)
    if (e.keyCode === 13) {
        console.log("按下了Enter键");
        this.grid(1)
    }
  }
  ononBlur = (value) => {
    this.setState({
      focusFn: 0,
    });
  };
  grid = value => {  //展开文章内容
    axios 
      .get(`${server}${option.dataset}`+"?limit=18&page="+ value +"&keywords="+this.state.valueName)
      .then((res) => {
        if (
          res.status === 200 &&
          !(console.log(`${server}${option.dataset}`), 0)
        ) {
          this.setState({ List: res.data.data });
          console.log(res.data);
          var count=parseInt(res.data.count/15+1);
          var numb = []
          for(let i=1;i<=count;i++){
            numb.push(i)
          }
          this.setState({
            pages:numb
          })
          
        } else {
          console.log(`${server}${option.dataset} mulfunctioning`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.grid(1)


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
                  onKeyDown={(e)=>this.handleKeyDown(e)}
                  value={this.state.valueName}
                  onChange={(e) => {
                    this.setState({
                      valueName:e.target.value
                    })
                  }}
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
            <div style={{width:"937px"}}>
              <Dataset data={this.state.List} accessibility={"public"} />
              <div className={styles.pages}>
                <div className={styles.pagesLable} onClick={() => {
                    if(this.state.pagesIndex>0){
                      this.setState({
                        pagesIndex:this.state.pagesIndex-1
                      })
                      this.grid(this.state.pagesIndex-1)
                    }
                    
                  }}>
                  <ArrowBackIosIcon style={{fontSize:12}} />
                </div>
                {this.state.pages ? this.state.pages.map((item, index) => {
                      return (
                        <div className={this.state.pagesIndex === item?styles.pagesLableStyle :styles.pagesLable}  onClick={() => {
                          this.setState({
                            pagesIndex:item
                          })
                          this.grid(item)
                        }}>{item}</div>
                  );
                }):<div className={styles.pagesLable}>1</div>}
                
                <div className={styles.pagesLable} onClick={() => {
                    if(this.state.pagesIndex<this.state.pages.length){
                      this.setState({
                        pagesIndex:this.state.pagesIndex+1
                      })
                      this.grid(this.state.pagesIndex+1)
                    }
                    
                  }}>
                  <ArrowForwardIosIcon style={{fontSize:12}} />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}
