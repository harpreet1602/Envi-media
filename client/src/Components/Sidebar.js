import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import { useStateValue } from '../StateProvider';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FaceIcon from '@material-ui/icons/Face';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HouseIcon from '@material-ui/icons/House';
import AddAlertIcon from '@material-ui/icons/AddAlert';
const Sidebar = ()=>{
    // const [ { user }, dispatch] = useStateValue();
    return(
        <div className='sidebar'>
            <SidebarRow src="
            https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg
            " title="Harpreet Singh"/>
            <SidebarRow Icon={EmojiPeopleIcon} 
            title='Envi-Mates '/>
             <SidebarRow Icon={ChatIcon} 
            title='Messenger'/>
            <SidebarRow Icon={PersonPinIcon} 
            title='Common Geolocation'/>
            <SidebarRow Icon={AssignmentIcon} 
            title='Leader Board'/>
           
            <SidebarRow Icon={FaceIcon} 
            title='Pollution Report'/>
         
            <SidebarRow Icon={AddAlertIcon } 
            title='Covid 19 Status'/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} 
            title='More'/>

        </div>
    );
}

export default Sidebar;