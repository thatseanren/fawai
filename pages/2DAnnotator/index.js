import React from 'react'
import Header from '../header'
import MainAnnotator from '../../component/Layout/mid'
import Categories from '../../component/Layout/PageLeft'
import Position from '../../component/Layout/PageRight'
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { useRouter } from "next/router";
import dataServer, {option} from "../../main_config"
export default function Annotator() {
    const router = useRouter()
    console.log(router.query)
    const { _id, _taskID, sequence } = router.query

    var [imageArray, setImageArray] = React.useState([])
    React.useEffect(() => {
        const imageRequest = new XMLHttpRequest();
        imageRequest.open('GET', `${dataServer}/${option.getSingleTask}?_id=${_id}&index=${sequence}`)
        imageRequest.setRequestHeader("Authorization" , "bdta")
        imageRequest.withCredentials = true
        imageRequest.addEventListener("load",({ target }) => {
            let { status, response, responseURL } = target;
            imageArray = JSON.parse(response).data.map((object, index) => {
                return object.jpg
            })
            console.log(imageArray)
            imageArray = imageArray.map(address => {
                return (
                `${dataServer}/${option.getMeterail}${address}`
                )
            })
           setImageArray(imageArray)
        })
        imageRequest.send()
    },[router.query])
    return (
        <Provider store={store} >
            <Header />
            <Grid container wrap="nowrap" direction="column" style={{ position: "relative", top: 56 }}>
                <Grid item container>
                    <div className="toolBar">
                        
                    </div>
                </Grid>
                <Grid item container wrap="nowrap">
                    <MainAnnotator imageArray={imageArray}/>
                    <Categories />
                </Grid>

                {/* <Position /> */}
            </Grid>
        </Provider >
    )
}