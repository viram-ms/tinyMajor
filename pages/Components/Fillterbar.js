import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import { BaseCSS } from 'styled-bootstrap-grid';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { WrapperItem, Paragraph, Button, Input, Poster } from '../index';
import Sidebar from './Sidebar';


class Filterbar extends React.Component {


   
    render() {
        return (
            <div>
                   <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
            </Head>
           
          <Bar>
              <Input_filter />
              <Filter><i class="fas fa-filter"></i></Filter>
          </Bar>
            </div>
         
        );
    }
}
export default Filterbar;

const Filter = styled.span`
display:flex;
justify-content:flex-end;
margin-right:20px;
align-items:center;
`;

const Input_filter = styled.input.attrs({
    type:"text",
    name:"search",
    placeholder:"Search Box",
  })`
  background: transparent;
  border: 2px solid black;
  width: 50%;
  height: 40px;
  padding: 10px;
  margin: auto;
 
  
  
  `;

const Bar = styled.div`
    display:flex;
    margin:auto;
    height:80px;
    background-color:#f2f2f2;
    width:50%;
    margin-top:50px;
    border:2px solid black;
`;