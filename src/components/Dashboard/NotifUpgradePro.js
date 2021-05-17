import React, { } from 'react';
import Swal from 'sweetalert2'
import {useSelector} from 'react-redux'
import {Subscribe} from '../../API/user_api'

function NotifUpgradePro() {
    const id = useSelector(state => state.Auth._id)

    const onHandleClick = () => {
        if(id){
            Swal.fire({
                title: 'Do you want to upgrade to Pro Plan ?',
                text: 'Upgrade to pro plan to access more features such as early access to new deal flows, unlimited access to all data points, and more.',
                showDenyButton: true,
                confirmButtonText: `Subscribe`,
                denyButtonText: `Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Subscribe(id)
                } 
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }).then((result) => {
                console.log(result)
            })
        }
    }

    return (
        <div>
            {/* pro plan section */}
            <div className="wrap-pro-plan-section-upgrade">
                <div className="wrap-pro-plan-section-upgrade-in">
                    <div className="box-upgrade-pro-plan-item">
                        <div className="heading-title-box-upgrade-pro-plan">
                            Pro Plan
                        </div>
                        <div className="info-content-box-upgrade-pro-plan">
                            <h3 className="head-title-text-pro-plan-c">
                                <b>This is a Paid Feature</b>
                            </h3>
                            <h3 className="head-title-text-pro-plan-c">
                                To have unrestricted access to all the paid feature please upgrade
                            </h3>
                            <a style={{color: 'white'}} onClick={() => onHandleClick()} className="bt-upgrade-pro-plan-cta">Upgrade</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotifUpgradePro