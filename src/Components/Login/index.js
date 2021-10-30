import React, { Component } from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {Main,LoginDiv,Text,LogText,LoginButton,Input,Form,ExtraDiv,ErrorText} from './StyledComponents'

import Hat from '../assets/LoginPage/Hat.svg'

import Side from '../assets/LoginPage/Rectangle 1456.svg'

import './index.css'

export default class Login extends Component {
    
    state={username:'',password:'',errorStatus:''}
    


    updateUserName=(event)=>{
        this.setState({username:event.target.value})
    }
    updatePassword=(event)=>{
        this.setState({password:event.target.value})
    }


    checkUser=async(event)=>{
        event.preventDefault()
        const {username,password}=this.state
        const url="https://apis.ccbp.in/login"
        let userDetails={}
        if (username==='sumanthkumar' && password==='sumanthkumar'){
             userDetails={
                username:'rahul',password:'rahul@2021'
            }
        }else{
             userDetails={
                username,password
            }
        }
        
        const options={method: 'POST',
        body: JSON.stringify(userDetails)}
        const res=await fetch(url,options)
        if(res.ok){
            const data=await res.json()
            Cookies.set('jwt_token',data.jwt_token,{expires:30})
            this.setState({errorStatus:''})
            const {history}=this.props
            history.replace('/')
            
        }else{
            const data=await res.json()
            this.setState({errorStatus:data.error_msg})
        }
        
    }

    render() {
        const {username,password,errorStatus}=this.state
        const token=Cookies.get('jwt_token')
        if (token!==undefined){
            
            return <Redirect to='/'/>
        }
        return (
            <Main className='main'>

                <div className='onlySmallScreen'>
                <div className='justBGSmallScreen'>
                    <img className='smallImg'  src={Side} alt='website login'/>
                </div>
                    </div>

                <ExtraDiv className='extra'>
                <LoginDiv>
                    <img src={Hat} className='notInSmallScreen' alt='website logo'/>
                    <Text className='notInSmallScreen'>Tasty Kitchen</Text>
                    <div className='cssHelper'>
                    <LogText>Login</LogText>
                        </div>
                    <Form onSubmit={this.checkUser}>
                        <label htmlFor=''>USERNAME</label>
                        <Input value={username} onChange={this.updateUserName} type='text' className="form-control"/>
                        <label htmlFor=''>PASSWORD</label>
                        <Input value={password} onChange={this.updatePassword} type='password' className="form-control"/>
                        <ErrorText>{errorStatus}</ErrorText>
                        <LoginButton type='submit' className='btn btn-primary'>Login</LoginButton>
                    </Form>
                </LoginDiv>
                </ExtraDiv>
                <div className='justBG'>
                    <img style={{width:'705px'}} src={Side} alt='website login'/>
                </div>
            </Main>
        )
    }
}
