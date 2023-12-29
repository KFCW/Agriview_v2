import '../../styles/Dashboard/style.css'
import { Link, Outlet } from 'react-router-dom'
import { BiSolidMessage } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { MdTableChart } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { AiFillNotification } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


const Dashbord = () => {
    return (
        <div className="dash-container">
            <div className="grid-container ">
                <div className="side-left">
                    <div className="logo">
                        <Link to='/dashbord'>AgriDigital</Link>
                    </div>
                    <div className="links">
                        <MdTableChart />
                        <Link to='/dashbord'>Dashbord</Link>
                    </div>
                    <div className="links">
                        <GrUserManager />
                        <Link to='/dashbord/clients'>Clients</Link>
                    </div>
                    <div className="links">
                        <AiFillNotification />
                        <Link to='/dashbord/products'>Produits</Link>
                    </div>
                    <div className="links">
                        <HiDocumentDuplicate />
                        <Link to='/dashbord/categories'>Catégories</Link>
                    </div>
                    <div className="links">
                        <BiSolidMessage />
                        <Link to='/dashbord/feedbacks'>Feedbacks</Link>
                    </div>
                    <div className="links setting">
                        <IoIosSettings />
                        <Link to='/dashbord/settings'>Paramètres</Link>
                    </div>
                    <Outlet />
                </div>
                <div className="side-content">
                    <div className="search">
                        <IoSearchOutline className="search-icon" />
                        <input type="text" name="search" placeholder='Recherche...' />
                    </div>
                    <div className="all-box">
                        <div className="first-box">
                            <div className="box-client">
                            <HiOutlineDotsHorizontal className="dot" />
                                <div className="concu">
                                <GrUserManager className="icons-client" />
                                    <div className="right">
                                        <h3 className='number'>300</h3>
                                        <span className="span-clients">Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-right">RIGHT</div>
            </div>
        </div>
    )
}

export default Dashbord
