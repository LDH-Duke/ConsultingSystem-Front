import React from "react";
import Title from '../../../components/Title';
import Formname from './components/Formname';
import { Form, Input, Button, Select, Space } from "antd";
import './ConsultingSignUp.css'

export const ConsultingSignUpPresenter = ({
        isId,
        isPw,
        isEmail,
        isName,
        isNickname,
        isActive,

        onChangeId,
        onChangePw,
        onChangePwCheck,
        onChangeName,
        onChangeNickname,
        onChangeTel,
        onChangeEmail,

        handleSignUp,
        handlePwCheck,
        handleEmailCheck,
        handleNameCheck,
        handleNicknameCheck,
        handleDoublecheck,
        
        options,
        setId,
        setPw,
        setPw2,
        setNickname,
        setTel,
        onSubmit,
    }) => {

    const signup = (e) => {
        if(isId == 0 || isPw == 0 || isEmail == 0) {
            console.log("입력 값 오류");
            return 0;
        }
        handleSignUp();
    }

    return(
        <div className='consultingsignup-container'>
            <div className='consultingsignup-wrap'>
                <div className='title'>
                    {/* <Header /> */}
                    <Title title = {'상담사 회원가입'} />
                </div>
                <div className="form">
                <Form>
                        <Form.Item>
                            <Formname name = {'아이디 (이메일)'} />
                            <Input type="email" placeholder = {'아이디를 입력해 주세요.'} autoFocus
                            onChange={(e) => {onChangeId(e.target.value); onChangeEmail(e.target.value)}} onBlur={handleEmailCheck}/>
                            {
                                !isEmail ? <div>이메일 형식에 맞지 않습니다.</div> : null
                            }
                            {
                                !isId ? <div>존재하는 아이디입니다.</div> : null
                            }
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'비밀번호'}/>
                                <Input.Password placeholder = {'비밀번호를 입력해 주세요.'}
                                onChange={(e) => onChangePw(e.target.value)} onBlur={handlePwCheck} />
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'비밀번호 확인'}/>
                                <Input.Password placeholder = {'비밀번호 확인'}
                                onChange={(e) => onChangePwCheck(e.target.value)} onBlur={handlePwCheck} />
                                {
                                    !isPw ? null : <span>비밀번호 미일치</span>
                                }
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'본명'} />
                            <Input placeholder = {'본명'}
                            onChange={onChangeName}
                            onBlur={handleNameCheck} />
                            {
                                !isName ? null : <span>본명을 입력하세요</span>
                            }
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'예명'} />
                            <Input placeholder = {'예명'}
                            onChange={(e) => setNickname(e.target.value)} 
                            onBlur={handleNicknameCheck}/>
                            {
                                !isNickname ? null : <span>예명을 입력하세요</span>
                            }
                        </Form.Item>
                        <Formname name = {'회원가입을 위해 휴대폰 인증을 진행해 주세요'} />
                        <div className="form-tel">
                            <div className="form-select">
                                <Select
                                    style={{
                                    width: '100%',
                                    }}
                                    placeholder="select one country"
                                    defaultValue={['korea']}
                                    optionLabelProp="label"
                                    options={options}
                                    optionRender={(option) => (
                                    <Space>
                                        <span role="img" aria-label={option.data.label}>
                                        {option.data.emoji}
                                        </span>
                                        {option.data.desc}
                                    </Space>
                                    )}
                                />
                            </div>
                            <div className="form-input-tel">
                                <Form.Item>
                                    <Input placeholder = {'전화번호 입력'}
                                    onChange={(e)=>setTel(e.target.value)} />
                                </Form.Item>
                            </div>
                        </div>
                        <span>본인확인 후 회원가입 및 서비스 이용이 가능합니다.</span>
                        <Button onClick={handleDoublecheck}>중복 확인</Button>
                        <Form.Item>
                            <Button
                                className={isActive ? 'active' : 'inactive'} 
                                disabled={!isActive}
                                onClick={signup}>회원가입</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}