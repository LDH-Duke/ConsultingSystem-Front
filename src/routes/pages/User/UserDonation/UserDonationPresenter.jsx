import React from "react";
import "./UserDonation.css";
import Layout from "../../../../components/Layout/Layout";
import DonationForm from "./components/DonationForm";

export const UserDonationPresenter = () => {
    return (
        <Layout nav={1}>
            <DonationForm />
        </Layout>
    )
}