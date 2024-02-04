import React from 'react'
import Layout from './Layout'
import { Banner } from './Banner/Banner'
import { CounselorBodyLayout } from './CounselorBody/CounselorBodyLayout'
import { Calendar } from './Calendar/Calendar'

export const TestCounselorMainPresenter = () => {
  return (
    <Layout nav={0}>
      {/* <Banner /> */}
      <Calendar />
      <CounselorBodyLayout />
    </Layout>
  )
}
