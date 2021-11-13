import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar';
import User from './User';
import { useNavigate} from "react-router-dom";
import SideNav from './SideNav';
import Salse_Task from './Salse_Task';
import SideNarBar from './SideNarBar';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';

const Dashboard = () => {
    var data = {
        series: [30, 32, 12],
        labels: ['62%','32%','8%'],
    };
  
      var options = {
      };
  
      var type = 'Pie'
    
      var dataBehaviour = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
           [1000, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };

      var optionsBehaviour = {
        lineSmooth: false,
        low: 0,
        high: 800,
        showArea: true,
        height: "245px",
        axisX: {
          showGrid: false,
        },
        // lineSmooth: Chartist.Interpolation.simple({
        //   divisor: 3
        // }),
        showLine: false,
        showPoint: false,
      };
    //   var type='bar'
    const Navigate = useNavigate();
    const HandleUser=()=>{
// history.push(`./user`)

Navigate(`./user` )

    }
    return (
        <div>
            <div class="wrapper">
        
        {/* <SideNarBar/> */}
        <div class="main-panel">
            
            {/* <!-- Navbar --> */}
            <Navbar/>
           
            {/* <!-- End Navbar --> */}
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                       
                        <div class="col-md-12">
                            <div class="card ">
                                <div class="card-header ">
                                    <h4 class="card-title">Users Behavior</h4>
                                    <p class="card-category">24 Hours performance</p>
                                </div>
                                <div class="card-body ">
                                <ChartistGraph data={dataBehaviour} options={optionsBehaviour} type={'Bar'} />
                                    <div id="chartHours" class="ct-chart"></div>
                                </div>
                                <div class="card-footer ">
                                    <div class="legend">
                                        <i class="fa fa-circle text-info"></i> Open
                                        <i class="fa fa-circle text-danger"></i> Click
                                        <i class="fa fa-circle text-warning"></i> Click Second Time
                                    </div>
                                    <hr/>
                                    <div class="stats">
                                        <i class="fa fa-history"></i> Updated 3 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container col-sm-4">
                            <div class="card ">
                                <div class="card-header ">
                                    <h4 class="card-title">Email Statistics</h4>
                                    <p class="card-category">Last Campaign Performance</p>
                                </div>
                                <div class="card-body ">
                                <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
                                    <div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>
                                    <div class="legend">
                                        <i class="fa fa-circle text-info"></i> Open
                                        <i class="fa fa-circle text-danger"></i> Bounce
                                        <i class="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                                    <hr/>
                                    <div class="stats">
                                        <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Salse_Task/> */}
                  
                </div>
            </div>
           <Footer/>
        </div>
    </div>
    <script src="assets/js/demo.js"></script>

        </div>
    )
}

export default Dashboard
