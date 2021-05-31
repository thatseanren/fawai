import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import axios from "axios";
import Link from 'next/link';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import qs from 'qs';
import headerstyle from'../styles/header.module.css';
import server, { option } from "../main_config";


export default class App extends React.Component {
    
    componentDidMount () {
        
        
        if(localStorage.getItem("login")){
            let user = localStorage.getItem("username")
            user=eval('(' + user + ')');
            console.log(user)
            var qs = require('qs');
            axios.post(server + 'login',qs.stringify({
            'name':'admin',
            'password':'admin123456'
            }))
            .then(function (response) {
                console.log(response)
                response.status === 200 ? localStorage.setItem("login", "123") : ""
            })
            .catch(function (error) {
                console.log(error);
            });

            setTimeout( () => {
                console.log(1)
            }, 2000);
        }
        var qs = require('qs');
            axios.post(server + 'login',qs.stringify({
            'name':'admin',
            'password':'admin123456'
            }))
            .then(function (response) {
                console.log(response)
                response.status === 200 ? localStorage.setItem("login", "123") : ""
            })
            .catch(function (error) {
                console.log(error);
            });

            setTimeout( () => {
                axios.post(server + 'text',{})
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, 2000);
        


        const instance = axios.create({
            xhrFields: {
                withCredentials: true
            }
        })
    
        instance.interceptors.request.use(
            console.log("登陆生效"),
        )

    }
    render() {

        

    return (
      <div className={headerstyle.Herder} style={{backgroundColor:"#324D57"}}id={"header_"}>
        <div id={headerstyle.appBar} style={{backgroundColor:"#324D57"}}>
            <div className={headerstyle.logo}>
                 <Link href="/">
                    <a><Image src="/logo.png" alt="Fawai Logo" width={130} height={30} /></a>
                </Link>
            </div>
            <div className={headerstyle.navLinkBar}>
                <Link href="/myDataSet">
                    <a className={headerstyle.appBarLink}>我的数据集</a>
                </Link>
                <Link href="/">
                    <a className={headerstyle.appBarLink}>公开数据集</a>
                </Link>
                <Link href="/recordList">
                    <a className={headerstyle.appBarLink}>数据记录</a>
                </Link>
                <Link href="/tools">
                    <a className={headerstyle.appBarLink}>应用</a>
                </Link>
            </div>
            <div className={headerstyle.barRight}>
                <div className={headerstyle.userNmae}>
                    <div className={headerstyle.portrait}>
                        A
                    </div>
                    <span>Admin</span>
                </div>
                <div className={headerstyle.noti}>
                <NotificationsNone style={{ fontSize: 26}} />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
  