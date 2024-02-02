import React from 'react'
import Layout from './Layout'
import { Banner } from './Banner/Banner'
import { CounselorBodyLayout } from './CounselorBody/CounselorBodyLayout'

export const TestCounselorMainPresenter = () => {
  return (
    <Layout nav={0}>
        <Banner />
        <CounselorBodyLayout />
    </Layout>
  )
}
