import {useState} from "react"
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import DetailContent from "../components/DetailContent"

import { useParams } from 'react-router-dom';

function Detail(){

    const { id } = useParams();

    return (
        <div className="Detail">
            <Navbar/>
            <br />
            <DetailContent/>
        </div>
    )
}

export default Detail