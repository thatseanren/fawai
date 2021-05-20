
import React from "react"
import Header from '../../header'
import { useRouter } from "next/router";
import AnnotationTasks from "../../../component/annotationTasks"
export default function AnnotationPage(props) {
    const router = useRouter()
    const { name } = router.query
    return (<React.Fragment>
        <Header />
        <AnnotationTasks />
    </React.Fragment>)
}