import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { EditProfilePresenter } from './EditProfilePresenter'

const EditProfileContainer = () => {

  // Tab
  const items = [
    {
      key: '1',
      label: '내 프로필',
      children:
        <div className='editprofile-box'>
          <div className='info-box'>
            <div className='info-content-box'>
              <div className='info-title-box'>{'닉네임'}</div>
              <div className='info-output-box'>
                <Form>
                  <Form.Item>
                    <Input placeholder={'닉네임을 입력해 주세요'} />
                  </Form.Item>
                </Form>
              </div>
              <div className="info-button-box">
                <Button>적용</Button>
                <Button>취소</Button>
              </div>
            </div>
          </div>
        </div>
    },
    {
      key: '2',
      label: '비밀번호 변경',
      children:
        <div className='editprofile-box'>
          <div className='info-box'>
            <div className='info-content-box'>
              <div className='info-title-box'>{'현재 비밀번호'}</div>
              <div className='info-output-box'>
                <Form>
                  <Form.Item>
                    <Input placeholder={'현재 비밀번호를 입력해 주세요'} />
                  </Form.Item>
                </Form>
              </div>
              <div className='info-title-box'>{'새 비밀번호'}</div>
              <div className='info-output-box'>
                <Form>
                  <Form.Item>
                    <Input placeholder={'새 비밀번호를 입력해 주세요'} />
                  </Form.Item>
                </Form>
              </div>
              <div className='info-title-box'>{'새 비밀번호 확인'}</div>
              <div className='info-output-box'>
                <Form>
                  <Form.Item>
                    <Input placeholder = {'새 비밀번호를 재입력해 주세요'} />
                  </Form.Item>
                </Form>
              </div>
              <div className="info-button-box">
                <Button>적용</Button>
                <Button>취소</Button>
              </div>
            </div>
          </div>
        </div>,
    },
    {
      key: '3',
      label: '기타1',
      children: <div className=''>aaa</div>,
    },
    {
      key: '4',
      label: '기타2',
      children: <div className='aa'>aaa</div>,
    }
  ];

  return (
    <EditProfilePresenter items={items} />
  )
}

export default EditProfileContainer