import React, { useState } from 'react'
import { DonationPresenter } from './DonationPresenter'
import { Input } from 'antd'

const DonationContainer = () => {

    const { TextArea } = Input;

    return (
        <DonationPresenter TextArea={TextArea}/>
    )
}

export default DonationContainer