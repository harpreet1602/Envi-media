import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

// import { useStateValue } from '../StateProvider';

const Sidebar = ()=>{
    // const [ { user }, dispatch] = useStateValue();
    return(
        <div className='sidebar'>
            <SidebarRow src="
            https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg
            " title="Harpreet Singh"/>
            <SidebarRow Icon={LocalHospitalIcon} 
            title='Covid-19 Information Center'/>
            
            <SidebarRow Icon={EmojiFlagsIcon} 
            title='Pages'/>
            <SidebarRow Icon={PeopleIcon} 
            title='Friends'/>
            <SidebarRow Icon={ChatIcon} 
            title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} 
            title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} 
            title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} 
            title='More'/>

        </div>
    );
}

export default Sidebar;