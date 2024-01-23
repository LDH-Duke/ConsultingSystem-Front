import React from "react";
import { Form, Input, Button } from 'antd';
import { EditCounselorPresenter } from "./EditCounselorPresenter";

const EditCounselorContainer = () => {

    // Tab
  const items = [
    {
      key: '1',
      label: '내 프로필',
      children:
        <div className='editprofile-box'>
          <div className='info-box'>
            <div className='info-content-box'>
              <div className='info-title-box'>{'예명'}</div>
              <div className='info-output-box'>
                <Form>
                  <Form.Item>
                    <Input placeholder={'예명을 입력해 주세요'} />
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
      label: '상담사 정보 변경',
      children: <div className='editprofile-box'>
        <div className='info-box'>
            <div className='info-content-box'>
            <div className='info-title-box'>{'상담사 정보 수정하기'}</div>
            <div className='info-output-box'>
                <textarea rows={10} cols={60}/>
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
      key: '4',
      label: '기타2',
      children: <div className='aa'>aaa</div>,
    }
  ];

    return(
        <EditCounselorPresenter items={items}/>
    )
}

export default EditCounselorContainer;