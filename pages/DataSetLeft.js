import DataSet from '../styles/DataSet.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default class left extends React.Component{
    handle = (value,number,ind) => {
        console.log(value+"+"+number);
        const listindex = this.state.index
        listindex[ind] = number
        this.setState({
            index :listindex
        });
    }

    open = value => {
        const openindex = this.state.openlist
        openindex[value] === 0 ? openindex[value] = 1 : openindex[value] = 0;
        this.setState({
            openlist :openindex
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            index:[0,0,0],
            openlist:[0,0,0],
        };
    }

    //注册scroll事件
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
    }
    bindHandleScroll=(event)=>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) 
                                    || window.pageYOffset
                                    || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        console.log(scrollTop)
    }

render() {
    const {data} = this.props;
    console.log(this.state.index);
    

    return (
        <div>
            <div className={DataSet.left}>
                {data.map((item,index) =>{
                    return(
                <div className={DataSet.boxList}>
                    <div className={DataSet.boxTitle}>
                        {item.title}
                    </div>
                    <div className={this.state.openlist[index] === 0? DataSet.boxSpan : DataSet.boxOpen}>
                        <div className={this.state.index[index] === 0 ? DataSet.boxAllStyle : DataSet.boxSpanList} onClick={()=> this.handle('All',0,index)}>
                            All
                        </div>
                        {item.arr.map((k,v) =>{
                            return (
                                <div onClick={()=> this.handle(k,v*1+1,index)} className={this.state.index[index] === v*1+1  ? DataSet.boxSpanStyle : DataSet.boxSpanList}>{k}</div>
                            )
                        })}
                    </div>
                    <div className={DataSet.arrow} onClick={()=> this.open(index)}>                   
                        {this.state.openlist[index] === 0 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                        <div className={DataSet.arrowOpen}>展开全部</div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
    }
}