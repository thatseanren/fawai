import Head from 'next/head'
import Image from 'next/image'
import Header from './header.js'
import DataSetLeft from './DataSetLeft.js'
import React from 'react';
import ReactDOM from 'react-dom';
import DataSet from '../styles/DataSet.module.css'
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx'
import Dataset from '../component/Grid'

export default class My extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusFn: 0,
            data: [{ title: '数据格式', arr: ['dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124'] },
            { title: '标注类型', arr: ['dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124'] },
            { title: '任务类型', arr: ['dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124', 'dd21', '124'] }
            ],
        };
    }

    focusFn = value => {
        this.setState({
            focusFn: 1
        });
    }

    ononBlur = value => {
        this.setState({
            focusFn: 0
        });
    }
    render() {
        return (

            <div>
                <Header />
                <div className={DataSet.home}>
                    <div className={DataSet.title}>
                        我的数据集
            </div>
                    <div className={DataSet.listContainer}>
                        <div className={clsx(DataSet.filterContainer)}>
                            <div className={DataSet.search}>
                                <input placeholder="搜索数据集" className={this.state.focusFn === 0 ? DataSet.inp : DataSet.blue} onFocus={this.focusFn} onBlur={this.ononBlur} />
                                <div className={DataSet.iconse}>
                                    <SearchIcon className={this.state.focusFn === 0 ? DataSet.sear : DataSet.searblue} />
                                </div>
                            </div>
                            <div className={DataSet.leftContent}>
                                <DataSetLeft data={this.state.data} />
                               
                            </div>
                        </div>
                        <Dataset />
                    </div>
                </div>
            </div>
        )
    }
}
