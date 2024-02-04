import React from 'react'
import Layout from './Layout'
import { Banner } from './Banner/Banner'
import { List } from './List/List'

export const TestPresenter = () => {
    return (
        <Layout nav={1}>
            <Banner />
            <List />
        </Layout>
    )
}
