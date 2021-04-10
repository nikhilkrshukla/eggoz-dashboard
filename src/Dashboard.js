import React from "react";
import "./Dashboard.css";
import "./Drawer.css";
import "./Topbar.css";
import eggoz from "./eggoz.png";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExploreIcon from "@material-ui/icons/Explore";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CategoryIcon from "@material-ui/icons/Category";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MoneyIcon from "@material-ui/icons/Money";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PaymentIcon from "@material-ui/icons/Payment";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import SettingsIcon from "@material-ui/icons/Settings";

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div className="topbar">
        <div className="menuIcon">
          <MenuIcon />
        </div>
        <div className="pageName">Operations Dashboard - Stock Management</div>
        <div className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            width="158.5"
            height="73"
            viewBox="0 0 158.5 73"
          >
            <defs>
              <filter
                id="Oval"
                x="85.5"
                y="0"
                width="73"
                height="73"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="4" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="7.5" result="blur" />
                <feFlood flood-color="#e3daca" flood-opacity="0.702" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g id="Group" transform="translate(0 18.5)">
              <g transform="matrix(1, 0, 0, 1, 0, -18.5)" filter="url(#Oval)">
                <circle
                  id="Oval-2"
                  data-name="Oval"
                  cx="14"
                  cy="14"
                  r="14"
                  transform="translate(108 18.5)"
                  fill="#fff"
                />
              </g>
              <g
                id="_1._Icons_Line_add-item-alt"
                data-name="1. Icons / Line /  add-item-alt"
                transform="translate(0 2)"
              >
                <path
                  id="comment"
                  d="M9,18a8.93,8.93,0,0,1-3.7-.8L.582,17.99A.5.5,0,0,1,.5,18a.5.5,0,0,1-.455-.707l1.49-3.262A9,9,0,1,1,9,18ZM5.369,16.185a.506.506,0,0,1,.215.048A8,8,0,0,0,15.747,13.3a8,8,0,1,0-13.233.385.5.5,0,0,1,.05.5L1.346,16.849l3.942-.657A.512.512,0,0,1,5.369,16.185Z"
                  transform="translate(3 3.003)"
                  fill="#977a68"
                />
              </g>
              <g
                id="_1._Icons_Line_add-item-alt_Copy"
                data-name="1. Icons / Line /  add-item-alt Copy"
                transform="translate(54 2)"
              >
                <path
                  id="bell"
                  d="M6.921,18a3,3,0,0,1-2.83-2H2.5A2.5,2.5,0,0,1,.215,12.485l.706-1.591V8a6.011,6.011,0,0,1,4-5.659V2a2,2,0,0,1,4,0v.341a6.014,6.014,0,0,1,4,5.659v2.894l.707,1.59A2.5,2.5,0,0,1,11.344,16H9.752A3.008,3.008,0,0,1,6.921,18ZM5.188,16a2,2,0,0,0,3.466,0ZM6.921,3a5.006,5.006,0,0,0-5,5v3l-.043.2-.75,1.688A1.5,1.5,0,0,0,2.5,15h8.845a1.5,1.5,0,0,0,1.371-2.111l-.75-1.687-.043-.2V8A5.006,5.006,0,0,0,6.921,3Zm0-1a6.074,6.074,0,0,1,1,.083V2a1,1,0,0,0-2,0v.083A6.091,6.091,0,0,1,6.921,2Z"
                  transform="translate(5.079 3)"
                  fill="#977a68"
                />
              </g>
              <circle
                id="Oval-3"
                data-name="Oval"
                cx="12"
                cy="12"
                r="12"
                transform="translate(110 2)"
                fill="#d3cbbd"
              />
              <circle
                id="Oval_Copy_4"
                data-name="Oval Copy 4"
                cx="4"
                cy="4"
                r="4"
                transform="translate(13 5)"
                fill="#f4a261"
              />
              <circle
                id="Oval_Copy_3"
                data-name="Oval Copy 3"
                cx="4"
                cy="4"
                r="4"
                transform="translate(67 5)"
                fill="#f4a261"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="main">
        <div className="drawer">
          <div className="logo">
            <img src={eggoz} alt="Logo" className="image" />
          </div>
          <hr class="solid"></hr>
          <div className="firstMenu">
            <div className="menu">
              <DashboardIcon /> Dashboard
            </div>
            <div className="menu">
              <FavoriteIcon /> Favorite
            </div>
          </div>
          <hr class="solid"></hr>
          <div className="appManagement">
            <center>APP MANAGEMENT</center>
            <div className="menu">
              <ExploreIcon /> Fields
            </div>
            <div className="menu">
              <StorefrontIcon /> Markets
            </div>
            <div className="menu">
              <CategoryIcon /> Categories
            </div>
            <div className="menu">
              <AllInboxIcon /> Products
            </div>
            <div className="menu">
              <AddShoppingCartIcon /> Orders
            </div>
            <div className="menu">
              <MoneyIcon /> Coupons
            </div>
            <div className="menu">
              <PeopleAltIcon /> Users
            </div>
            <div className="menu">
              <FlagIcon /> Shippers
            </div>
            <div className="menu">
              <HelpIcon /> Faqs
            </div>
          </div>
          <hr class="solid"></hr>
          <div className="settings">
            <center>SETTINGS</center>
            <div className="menu">
              <PhotoLibraryIcon /> Medias Library
            </div>
            <div className="menu">
              <PaymentIcon /> Payments
            </div>
            <div className="menu">
              <PhonelinkSetupIcon /> Mobile App Settings
            </div>
            <div className="menu">
              <SettingsIcon /> Settings
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="block">
            <div className="subBlock">
              <StorefrontIcon /> White Eggs
              <div className="orders">
                <div className="total">24568</div>
                <div className="change">6.8%</div>
              </div>
              <hr class="solid"></hr>
              <table>
                <tr>
                  <td>Full Tray(30 in a unit)</td>
                  <td>845 </td>
                </tr>
                <tr>
                  <td>Single Eggs</td>
                  <td>27 </td>
                </tr>
                <tr>
                  <td>Chatki Eggs</td>
                  <td>9 </td>
                </tr>
              </table>
            </div>
            <div className="subBlock">
              <StorefrontIcon /> Brown Eggs
              <div className="orders">
                <div className="total">12568</div>
                <div className="change">6.8%</div>
              </div>
              <hr class="solid"></hr>
              <table>
                <tr>
                  <td>Full Tray(30 in a unit)</td>
                  <td>845 </td>
                </tr>
                <tr>
                  <td>Single Eggs</td>
                  <td>27 </td>
                </tr>
                <tr>
                  <td>Chatki Eggs</td>
                  <td>9 </td>
                </tr>
              </table>
            </div>
            <div className="subBlock">
              <StorefrontIcon /> Nutri Eggs
              <div className="orders">
                <div className="total">9568</div>
                <div className="change">6.8%</div>
              </div>
              <hr class="solid"></hr>
              <table>
                <tr>
                  <td>Full Tray(30 in a unit)</td>
                  <td>845 </td>
                </tr>
                <tr>
                  <td>Single Eggs</td>
                  <td>27 </td>
                </tr>
                <tr>
                  <td>Chatki Eggs</td>
                  <td>9 </td>
                </tr>
              </table>
            </div>
            <div className="subBlock">
              <StorefrontIcon /> Organic Eggs
              <div className="orders">
                <div className="total">3568</div>
                <div className="change">6.8%</div>
              </div>
              <hr class="solid"></hr>
              <table>
                <tr>
                  <td>Full Tray(30 in a unit)</td>
                  <td>845 </td>
                </tr>
                <tr>
                  <td>Single Eggs</td>
                  <td>27 </td>
                </tr>
                <tr>
                  <td>Chatki Eggs</td>
                  <td>9 </td>
                </tr>
              </table>
            </div>
            <div className="subBlock">
              <StorefrontIcon /> Total Orders
              <br />
              <div className="orders">
                <div className="total">2268</div>
                <div className="change">6.8%</div>
              </div>
              <hr class="solid"></hr>
              <table>
                <tr>
                  <td>Full Tray(30 in a unit)</td>
                  <td>3380 </td>
                </tr>
                <tr>
                  <td>Single Eggs</td>
                  <td>108 </td>
                </tr>
                <tr>
                  <td>Chatki Eggs</td>
                  <td>36 </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="table">
            <table>
              <tr>
                <th colspan="7">Stocks</th>
              </tr>
              <tr>
                <th>B.ID</th>
                <th>Date & Time</th>
                <th>Products</th>
                <th>Source Farm</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>01</td>
                <td>12 Jan 2021, 03:12 PM</td>
                <td>White Eggs & Brown Eggs</td>
                <td>XYZ Farm</td>
                <td>9000</td>
                <td>On the Way</td>
                <td>Awaited</td>
              </tr>
              <tr>
                <td>01</td>
                <td>12 Jan 2021, 03:12 PM</td>
                <td>White Eggs</td>
                <td>XYZ Farm</td>
                <td>9000</td>
                <td>Recieved</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>12 Jan 2021, 03:12 PM</td>
                <td>White Eggs</td>
                <td>XYZ Farm</td>
                <td>9000</td>
                <td>Recieved</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>12 Jan 2021, 03:12 PM</td>
                <td>White Eggs</td>
                <td>XYZ Farm</td>
                <td>9000</td>
                <td>Recieved</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>01</td>
                <td>12 Jan 2021, 03:12 PM</td>
                <td>White Eggs</td>
                <td>XYZ Farm</td>
                <td>9000</td>
                <td>Recieved</td>
                <td>Completed</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
