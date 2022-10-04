import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">

      <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small"/>

      </div>
      <div className="bottom">
        <div className="featuredChart">
          {/*<CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>*/}
        <CircularProgressbar
        value={76}
        text={`${76}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "#d88484",
          trailColor: "rgba(201,201,201,0.47)"
        })}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$4.200</p>  
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$10.2K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$34.8K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured