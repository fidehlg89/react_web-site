import React from 'react'
import "./header.css"
import { NavigationBar } from './../../common'

const headerImage = 'https://lh3.googleusercontent.com/proxy/vSJKcfGgpM6GEsOdkKWPGu6OJTV1604uqDyXb45hT46smWwMMUUUPIVrAplnpGdV5Ab3KCtppIi_jStPze_ScNaPagZbl7awMIToE0fdcIgYeZm3_UJiZGkictbA67qpByhp';

const Header =()=>(
    <div className="header">
        <img src={headerImage} alt="" className="src" width="200px" height="auto" />
        <NavigationBar/>
    </div>
)

export default Header