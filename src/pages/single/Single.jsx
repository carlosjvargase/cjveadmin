import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information:</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                <div className="itemKey">Email:</div>
                <div className="itemValue">janedoe@gmail.com</div>
                </div>
                <div className="detailItem">
                <div className="itemKey">Phone:</div>
                <div className="itemValue">+1 2313 12 14</div>
                </div>
                <div className="detailItem">
                <div className="itemKey">Address:</div>
                <div className="itemValue">Elton St. 234 Garden Yd. New York</div>
                </div>
                <div className="detailItem">
                <div className="itemKey">Country:</div>
                <div className="itemValue">USA</div>
                </div>
              </div> 
            </div>
          </div>
          <div className="right">
            <Chart aspect={2.5/1} title="User Spending (last 6 month)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions:</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single