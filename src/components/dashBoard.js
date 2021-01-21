import React from 'react'
import SideBar from './sideBar'

export default function DashBoard({id}) {
    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <SideBar id={id}/>
        </div>
    )
}
