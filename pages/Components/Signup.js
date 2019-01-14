import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { WrapperItem, Paragraph, Button, Input, Poster } from '../index';


class Signup extends React.Component {

    state={
        name:'',
        email:'',
        number:'',
        password:'',

    }

   
    render() {
        return (
            <div>
                   <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
            </Head>
            <WrapperItem>
                <Poster src="/static/download.png" alt="my image" style={{ width: 200 }} />
                <Input type="text" value={this.state.name} placeholder="Name" onChange={this.handle} />
                <Input type="email" value={this.state.email} placeholder="Email" onChange={this.handle} />
                <Input type="number" value={this.state.number} placeholder="Phone" onChange={this.handle} />
                <Input type="password" value={this.state.password} placeholder="Password" onChange={this.handle}  />
                <Button backgroundColor="orange">Register</Button>
                <hr />
                <Paragraph>SIGNUP with your social media accounts</Paragraph>
                <Row>
                    <Col xs="6" sm="6" alignSelf="">
                        <Button backgroundColor="blue">Login with Facebook</Button>
                    </Col>
                    <Col xs="6" sm="6" alignSelf="">
                        <Button backgroundColor="red">Login with google</Button>
                    </Col>

                </Row>
                <hr />
                <Paragraph >Already have an Account?</Paragraph>
                <Button backgroundColor="">Login</Button>


            </WrapperItem>
            </div>
         
        );
    }
}
export default Signup;