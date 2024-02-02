import React from 'react'
import Layout from './Layout'
import { Banner } from './Banner/Banner'
import { List } from './List/List'

export const TestPresenter = () => {
    return (
        <Layout>
            <Banner />
            <List />
        </Layout>
    )
}
