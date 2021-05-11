import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

function ConfirmationEmail () {
    const { id } = useParams();

    const onHandleActive = async () => {
        await axios.post(`${process.env.REACT_APP_API_URL}/confirmationCode/${id}` )
        .then((res) => {
            if(res.data !== 'FAIL'){
                window.confirm(res.data)
                window.location.replace(`${process.env.REACT_APP_WEB_URL}/login`)
            } else {
                window.confirm(res.data)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="wrap-pro-plan-section-upgrade-bg">
            <div className="wrap-pro-plan-section-upgrade">
                <div className="wrap-pro-plan-section-upgrade-in">
                    <div className="box-upgrade-pro-plan-item">
                        <div className="heading-title-box-upgrade-pro-plan">
                            Active Email
                        </div>
                        <div className="info-content-box-upgrade-pro-plan">
                            <h3 className="head-title-text-pro-plan-c">
                                <b>Active Your Email</b>
                            </h3>
                            <h3 className="head-title-text-pro-plan-c">
                                To have unrestricted access to all feature please active your account
                            </h3>
                            <Link onClick={() => onHandleActive()} className="bt-upgrade-pro-plan-cta">ACTIVE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationEmail

// class Notifpopupupgrade extends Component {
//     componentDidMount() {
//     }
//     render() {

//         return (
//             <div>
//                 <div className="wrap-pro-plan-section-upgrade-bg">
//                     <div className="wrap-pro-plan-section-upgrade">
//                         <div className="wrap-pro-plan-section-upgrade-in">
//                             <div className="box-upgrade-pro-plan-item">
//                                 <div className="heading-title-box-upgrade-pro-plan">
//                                     Pro Plan
//                                 </div>
//                                 <div className="info-content-box-upgrade-pro-plan">
//                                     <h3 className="head-title-text-pro-plan-c">
//                                         <b>This is a Paid Feature</b>
//                                     </h3>
//                                     <h3 className="head-title-text-pro-plan-c">
//                                         To have unrestricted access to all the paid feature please upgrade
//                                     </h3>
//                                     <Link to="#" className="bt-upgrade-pro-plan-cta">Upgrade</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Notifpopupupgrade