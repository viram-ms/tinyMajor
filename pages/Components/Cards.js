import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { WrapperItem, Paragraph, Button, Input, Poster } from '../index';
import Sidebar from './Sidebar';
import Fillterbar from './Fillterbar';

class Cards extends React.Component {



    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
                </Head>
                <Fillterbar />
                <Sidebar />
                <CardWrapper>
                    <Question>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Question>
                    <ContentWrapper>

                    <Row>
                        <Col xs="1" sm="1">
                            <UserIcon><i class="fas fa-user-circle"></i></UserIcon>
                        </Col>
                        <Col xs="11" sm="11">
                            <User>Lorem Ipsum</User>
                            <Date>updated 11th december,2017</Date>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="8" sm="8">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                        </Col>
                        <Col xs="4" sm="4">
                        <IconWrapper>

                        <i class="fas fa-images" style={{ fontSize:50,display:'flex',justifyContent:'center' }}></i>

                        </IconWrapper>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="10" sm="10">
                        <Like><i class="fas fa-thumbs-up"></i></Like>
                    <Like><i class="fas fa-thumbs-down"></i></Like>
                        </Col>
                        <Col xs="2" sm="2">
                        <Like><i class="fas fa-link"></i></Like>
                        </Col>
                    </Row>
                   
                    </ContentWrapper>
                   

                </CardWrapper>
            </div>

        );
    }
}
export default Cards;

const ContentWrapper = styled.div`
padding:10px;
`;

const UserIcon = styled.span`
font-size:20px;
`;


const Like=styled.span`
padding:10px;
`;

const IconWrapper = styled.div`
justify-content: center;
align-items: center;
display: flex;
`;

const Question = styled.p`
margin:0;

`;

const User = styled.p`
margin:0;
`;
const Date = styled.p`
font-size:10px;
margin:0px;
`;

const CardWrapper = styled.div`
min-height:300px;
border:2px solid black;
max-width:500px;
margin:100px auto;
display:block;
padding:10px;

`;
