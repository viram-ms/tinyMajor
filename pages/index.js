import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Signup from './/Components/Signup';

class Index extends React.Component{

  state={
    email:'',
    password:''
  }

  handleLogin = (e) => {
    console.log(e.target.value);
    this.setState({
      email:e.target.value
    });
  }

  handlePassword = (e) => {
    console.log(e.target.value);

    this.setState({
      password:e.target.value
    });
  }


  render(){
    return(
      <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />

    </Head>
    <WrapperItem>
  
  <Poster  src="/static/download.png" alt="my image" style={{width:200}} />
   
    <Input type="email" value={this.state.email}  placeholder="UserName" onChange={this.handleLogin} />
    <br/>
    <Input type="password"  value={this.state.password}   placeholder="Password" onChange={this.handlePassword} />
    <br />
    <Row>
      <Col xs="6" sm="6">
      <input type="checkbox" /><span>Remember Me</span>
      </Col>
      <Col xs="6" sm="6" >
      <Spanner href="#"><span>Forgot PassWord?</span></Spanner>
      </Col>

    </Row>
    
    <Button backgroundColor="orange">Login</Button>
    
  <hr />
  <Paragraph>With your social media account</Paragraph>
  <Row>
    <Col xs="6" sm="6" alignSelf="">
    <Button backgroundColor="blue">Login with Facebook</Button>  
    </Col>
    <Col xs="6" sm="6" alignSelf="">
    <Button backgroundColor="red">Login with google</Button> 
    </Col>

  </Row>
  
   <hr />
  <Paragraph >Don't have an account? REGISTER NOW</Paragraph>
  <Button backgroundColor="">Register</Button>

  </WrapperItem>
  
  </div>
    )
  }
}

export default Index;

export const WrapperItem = styled.div`
padding-right:15px;
padding-left:15px;
margin-right: auto;
margin-left: auto;
background-color:#f2f2f2;
width:100%;
max-width:960px;
height:100%;

`;

export const Poster=styled.img`
display:block;
margin:auto;
margin-bottom:1%;
`;

export const Spanner=styled.a`
display:flex;
justify-content:flex-end;
`;

export const Paragraph=styled.p`
text-align:center;
`;

export const Button = styled.button`
padding: 10px 20px;
margin-top:10px;
font-size:18px;
border-radius:5px;

background-color: ${props => props.backgroundColor || "green"};
color:white;
border:1px solid  ${props => props.backgroundColor || "green"};;
margin:auto;
display:block;
:hover {
  background-color:black;
  color: red;
}
`;


export const Input= styled.input`
  display:block;
  width:100%;
  padding:15px;
  margin-top:20px;
  margin-bottom:10px;
`;