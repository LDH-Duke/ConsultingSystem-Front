import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd';
import { EditProfilePresenter } from './EditProfilePresenter'
import API from '../../../api/API';

const EditProfileContainer = () => {



  /**
   * 새로고침 탭 유지
   */
  const [tabValue, setTabValue] = useState(localStorage.getItem('tabs') || '1');

  useEffect(() => {
    localStorage.setItem('tabs', tabValue);
  }, [tabValue]);

  const onChange = (key) => {
    setTabValue(key);
  };

  const onTabChange = (activeKey) => {
    onChange(activeKey);
  };



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

  
  const onSubmit = () => {
    const profileupdate = API.putProfile()
  }
  
  return (
    <EditProfilePresenter items={items} defaultTab={tabValue} onTabChange={onTabChange} />
  )
}

export default EditProfileContainer