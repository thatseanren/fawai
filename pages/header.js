import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link'
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import headerstyle from'../styles/header.module.css';

function App() {
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
    );
  }
  
  export default App;