import React from 'react'
import OpenConversation from './openConversation'
import SideBar from './sideBar'
import { useConversations } from '../contexts/conversationsProvider'

export default function DashBoard({id}) {

    const { selectedConversation } = useConversations()

    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <SideBar id={id}/>
            {selectedConversation && <OpenConversation />}
        </div>
    )
}
