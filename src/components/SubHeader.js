import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import { Switch } from 'antd';

const SubHeader = (props) => {
    const Switchtype = props;
    const [switchChecked, setSwitchChecked] = useState(false);

    const handleSwitchChange = (Switchtype) => {
        setSwitchChecked(Switchtype);
        console.log(Switchtype)
    };

    return (
        <div className="Sub-Header">
            <div className="switch-form">
                상담상태 :
                <div className="switch">
                    <Switch checked={switchChecked} onChange={handleSwitchChange} />
                </div>
            </div>
        </div>
    )
}

export default SubHeader