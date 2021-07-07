import React from 'react'
import Header from '../header'
import MainAnnotator from '../../component/Layout/mid'
import Categories from '../../component/Layout/PageLeft'
import Position from '../../component/Layout/PageRight'
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'
export default function Annotator() {
    return (
        <Provider store={store} >
            <Header />
            <Grid container wrap="nowrap" direction="column" style={{ position: "relative", top: 56 }}>
                <Grid item container>
                    <div className="toolBar">
                        
                    </div>
                </Grid>
                <Grid item container wrap="nowrap">
                    <MainAnnotator />
                    <Categories />
                </Grid>

                {/* <Position /> */}
            </Grid>
        </Provider >
    )
}