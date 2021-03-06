import React, { Component}  from "react"
import LineChartIn2 from "./LineChartIn2"
import { Text, Div, Icon, Anchor, Button, Input } from "atomize";
import IndApi from "../../../api/IndApi";
import { Link } from 'react-router-dom';
class   IndicatorForm2 extends Component{

  constructor(props){
    console.log('constro run');
    super(props);
    this.state ={
      dates : '',
      name : '미 10년 채권수익률',
      rates : '',
      bond10id : 'bond10',
      message : null
    };
    }

  componentDidMount(){
  this.reloadJipyoList();
  
  }

  reloadJipyoList = () => {
    IndApi.indicators2("bond10", 1)
    .then(res =>{
      this.setState({
      dates : res.data[0]["dates"].substring(0,10),
      rates : res.data[0]["price"]
    })
  
  })
    .catch(err => {
      console.error('지표리스트 오류(10년)', err);
      })
  }

  componentWillUnmount(){
    console.log('comwilunmont run')
  }

  render(){
  return( 
  <Div
    d="flex"
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    w={{ xs: "100%", md: "23rem" }}
    maxW="100%"
    pos={{ xs: "static", md: "absolute" }}
    m={{ xs: "1rem", md: "-2rem" }}
    top="0"
    rounded="xl"
    h={{ lg: "22rem" }}
    bg="white"
    shadow="4"
    p="2rem"
  >
    <Link to={`/IndicatorDetail1/${this.state.bond10id}`} >
    <Div flexGrow="0">
    <Div d="flex"
        flexDir="column"
        align="center"
        >
    <Div d="flex"
        flexDir="row"
        textAlign="center"
        >
   
      <Text
        textAlign="center"
        textSize="heading"
        m={{ t: "0rem", b: "0rem" }}
        textWeight="800"
        fontFamily="ko"
        textColor="black"
      >
      미10년 채권
      </Text>
      <Text
        textAlign="center"
        textSize="heading"
        m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '0', md: '0' }}}
        textWeight="800"
        fontFamily="ko"
        textColor="info700"   
      >
        {this.state.rates} 
      </Text>
      </Div>
      <Text
        textAlign="center"
        textSize="caption"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="800"
        fontFamily="ko"
        textColor="light"      
      >
        ({this.state.dates} 기준)
      </Text>
      </Div>
      <LineChartIn2/>
      </Div>
      </Link>
      </Div>
)
}
}
export default  IndicatorForm2 
