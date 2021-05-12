import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NotifUpgradePro from './NotifUpgradePro';

function ContentRequestconnect() {
    const id = useSelector(state => state.Auth._id)
    const [data, setData] = useState([])

    const getRequestConnect = async (ID) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/request_connect`, {id : ID} )
        .then(res => {
            // console.log(res.data[0]._id)
            setData(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        if(id === ''){
            return true
        } else if(id !== ''){
            getRequestConnect(id)
        }
    }, [id])

    return (
        <div className="wrap-dashboard-content-section-page">
            <div className="wrap-dashboard-content-section-page-in">
                {
                    data[0] !== undefined ?
                    <div className="wrap-content-tab-database-table">
                        {
                            data.map((item) => {
                                return (
                                    <div className="wrap-tab-database-data-table wrap-tab-database-data-table-iframe">
                                        {parse(item.link)}
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <NotifUpgradePro></NotifUpgradePro>
                }
            </div>
        </div>
    )
}
export default ContentRequestconnect

// class ContentRequestconnect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data : [
//                 {
//                     "_id": "608f9c40334d2611ae9e7c02",
//                     "name": "request connect",
//                     "link": `<iframe class=\"airtable-embed\" src=\"https://airtable.com/embed/shrmvkSkyxf8DMpTW?backgroundColor=grayLight&viewControls=on\" frameborder=\"0\" onmousewheel=\"\" width=\"100%\" height=\"533\" style=\"background: transparent; border: 1px solid #ccc;\"></iframe>`,
//                     "subscribe": {
//                         "link": [],
//                         "_id": "6088fe1bf07f796bc1a3080e",
//                         "name": "PRO",
//                         "__v": 0
//                     },
//                     "__v": 0
//                 }
//             ]
//         };
//     }

//     render() {
//         const iframe = parse('<iframe class="airtable-embed" src="https://airtable.com/embed/shrmvkSkyxf8DMpTW?backgroundColor=grayLight&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>');
//         return (
//             <div>
//                 <div className="wrap-dashboard-content-section-page">
//                     <div className="wrap-dashboard-content-section-page-in">
//                         {/* <NotifUpgradePro></NotifUpgradePro> */}
                        
//                         {/* tab table */}
//                         <div className="wrap-content-tab-database-table">
//                                 {
//                                     this.state.data.map((item) => {
//                                         return (
//                                             <div className="wrap-tab-database-data-table wrap-tab-database-data-table-iframe">
//                                                 {parse(item.link)}
//                                             </div>
//                                         )
//                                     })
//                                 }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }
// export default ContentRequestconnect