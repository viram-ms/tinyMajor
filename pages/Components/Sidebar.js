import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { WrapperItem, Paragraph, Button, Input, Poster } from '../index';


class Sidebar extends React.Component {

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
           <SideNav>
            <Text>
                Lorem ispum is a simple dummy text of the printing and typeSetting industry
            </Text>
            <List>
               <ListItem> <span><i class="fas fa-bullseye"></i></span>  Lorem ipsum</ListItem>
                <ListItem><span><i class="fas fa-bullseye"></i></span>Lorem ipsum</ListItem>
                <Line />

                <ListItem><span><i class="fas fa-bullseye"></i></span>Lorem ipsum</ListItem>
                <Line />

                <ListItem><span><i class="fas fa-bullseye"></i></span>Lorem ipsum</ListItem>
                <Line />

                <ListItem><span><i class="fas fa-bullseye"></i></span>Lorem ipsum</ListItem>
                <Line />

                <ListItem><span><i class="fas fa-bullseye"></i></span>Lorem ipsum</ListItem>
                <Line />

            </List>
           </SideNav>
            </div>
         
        );
    }
}
export default Sidebar;

const Line =styled.hr`
width:80%;
margin:0;
`;

const SideNav = styled.div`
top:0px;
position:fixed;
background-color:#f2f2f2;
height:100vh;
width:300px;
postion:absolute;
border:2px solid black;
`;

const Text = styled.p`
margin-top:30px;
justify-content:center;
width:80%;
padding:10px;
`;

const List=styled.ul`
padding:0px;
margin-top:50px;
list-style-type: circle;
margin-right:20px;
margin-left:20px;
`;

const ListItem=styled.li`
display:flex;
justify-content:center;
align-items:center;
padding:15px;
border-bottom:1px solid black;

>span{
    margin-right:15px;
}
&:hover{
    background-color:gray;
}
`;