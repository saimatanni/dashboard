import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideNarBar = () => {
       const navigate = useNavigate();
       const HandleUser=()=>{
        // history.push(`./user`)
        
        navigate(`./user` )
        
            }
  const HandleTable=()=>{
                navigate(`./table`)
            }
            const HandleTypography=()=>{
                navigate(`./typography`)
            }
            const HandleIcons=()=>{
                navigate(`./icons`)
            }
            const HandleMap=()=>{
                navigate(`./map`);
            }
            const HandleNotifications=()=>{
                navigate(`./notifications`);
            }

    return (
        <div>
            <div>
             <div class="sidebar" data-image="../assets/img/sidebar-5.jpg">
            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="http://www.creative-tim.com" class="simple-text">
                        Ghuri
                    </a>
                </div>
                <ul class="nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="./">
                            <i class="nc-icon nc-chart-pie-35"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    {/* <li>
                        <a class="nav-link"  onClick={HandleUser}>
                            <i class="nc-icon nc-circle-09"></i>
                            <p>User Profile</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link"  onClick={HandleTable}>
                            <i class="nc-icon nc-notes"></i>
                            <p>Table List</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" onClick={HandleTypography}>
                            <i class="nc-icon nc-paper-2"></i>
                            <p>Typography</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" onClick={HandleIcons}>
                            <i class="nc-icon nc-atom"></i>
                            <p>Icons</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" onClick={HandleMap}>
                            <i class="nc-icon nc-pin-3"></i>
                            <p>Maps</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" onClick={HandleNotifications}>
                            <i class="nc-icon nc-bell-55"></i>
                            <p>Notifications</p>
                        </a>
                    </li>
                    <li class="nav-item active active-pro">
                        <a class="nav-link active" onClick={HandleTable}>
                            <i class="nc-icon nc-alien-33"></i>
                            <p>Upgrade to PRO</p>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SideNarBar
