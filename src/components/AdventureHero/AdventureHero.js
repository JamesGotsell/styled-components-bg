import React, { Component } from 'react';

import styled,{ keyframes } from 'styled-components'


const bigScreen = 'only screen and (min-width: 1200px)'
const wideScreen = 'only screen and (min-width: 900px) ';
const smallerScreen = 'only screen and (min-width: 850px) ';
const narrowScreen = 'only screen and (max-width: 767px) ';

const SectionEle = styled.section`
  background-color: #222;
  height: 100vh;
  padding: 20px;
  color: white;
  text-align:center;
  padding:0;

  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f1f1f1;
   background-image:url('http://www.beargrylls.com/store/bundles/octerweb/img/various/bg-compressed.jpg');
`


const SectionContentWrapper = styled.div`
  position: absolute;
  left: 100px;
  margin-top:160px;
  padding-bottom: 0;
  text-align:left;
        @media  ${wideScreen} {
         
        }
       @media  ${smallerScreen} {
             
        }
        @media  ${narrowScreen} {
            margin-top:330px;
            width:60%; 
        }
`
const SectionContentTitle = styled.h2`
  font-size: 3.385vw;
    margin-bottom: 2vw;
    width:100%;
  
       @media  ${smallerScreen} {
            width:35%;
        }
        @media  ${narrowScreen} {
          
        }
    
`
const SectionContentTitleSpan = styled.span`
    display: block;
    left: -100px;
`
const SectionContent = styled.div`
    color: #fff;
    width: 60%;
    margin-top: 1rem;
    max-width: 53em;
    & p {
      margin-bottom: 1rem;
      line-height: 1.5em;
      letter-spacing: -.062em;

    }

      @media  ${wideScreen} {
        width:20%;
      }
       @media  ${smallerScreen} {
          
        }
        @media  ${narrowScreen} {
          
        }
    
`

const fillIn = keyframes`
  from {transform: translate3d(0%, 0, 0);}
  to   {transform: translate3d(100%, 0, 0);}
`
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  color: #efefef;
  background:transparent;
  font-size: 1em;
  padding:  1em;
  padding-right: 29px;
  padding-left: 29px;
  border: 2px solid  #efefef;
  position:relative;
      &:hover {
                transition: background-color background-position 2s ease-in;
                background-color: #efefef;
                background-position: 100%;
                & span {
                  color:black;
                }
      } 

   @media  ${smallerScreen} {
        margin-top:40px;
        width:20%; 
        padding:7px 
    }
    @media  ${narrowScreen} {
        margin-top:40px;
        width:100%;
        
    }
 `

 const Button2 = styled.div`
    margin: 2.083vw 0 0;
    position: relative;
    width: 9.63vw;
    height: 2.6vw;
    line-height: calc(2.656vw - 4px);
    border: 2px solid #efefef;
     overflow: hidden; 
    & a:hover {
        & .span1 {
            transform: translate3d(-100%,0,0);
            transition: transform .6s cubic-bezier(.165,.84,.44,1);
            opacity: 1;
            background: #e74315; 
        }
        & .span1:before {
             background: #e74315; 
            
        }
        & .span1:after {
             background: #e74315; 
            
        }
       & .span2 {
        transform: translate3d(-100%,0,0);
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
        opacity: 1;
        
        }
        & .span2:before {
             background: #e74315; 
            
        }
    }
    
    
    & a {
       display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 2px solid #e74315;
      & span.span1 {
            position: absolute;
            top: 1px;
            left: 1px;
            bottom: 1px;
            right: 1px;
            pointer-events: none;
            overflow: hidden;
            border: 2px solid #e74315;
      }
      & span.span1:before {
        content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: #e74315; 
              opacity: 0;
      }
     
      & span.span1:after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
             background: #e74315;
              opacity: 0;
      }
    
      & span.span2 {
        position: relative;
          ${'' /* transition: all .7s cubic-bezier(.165,.84,.44,1); */}
          font-family: raisonne;
          font-size: .8333vw;
          line-height: 100%;
          letter-spacing: .07em;
          color: #212322;
          pointer-events: none;
      }
            ${'' /* & span.span2:hover {
            position: relative;
            transition: all .7s cubic-bezier(.165,.84,.44,1);
            font-family: raisonne;
            font-size: .8333vw;
            line-height: 100%;
            letter-spacing: .07em;
          } */}
    
    }
    & span.span3 {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transform: translate3d(-100%,0,0);
        background: #e74315
    }

    
  }

   
`


class AdventurerHero extends Component {
  
  render() {
  
    return (
        <SectionEle>
       
          <SectionContentWrapper>
            <SectionContentTitle >       
               <SectionContentTitleSpan>Share your adventures</SectionContentTitleSpan>
            </SectionContentTitle>
    
              <SectionContent>
                <p>Adventurers and heroes come in all shapes and sizes.
                 Here, we’re not the heroes but merely the narrators.
                  This is about you. Your triumphs. Your setbacks. Your stories.</p>
              </SectionContent>
              <Button >
                  {/* <span {className="btn-over btn-over-red"}></span> */}
              
                  {/* <span className="btn-txt btn-txt-dark">DISCOVER</span> */}
                  <span >DISCOVER</span>
              </Button>
     
              <Button2>

                            <a className="stuff"> 
                                <span className="span1 btn"></span>
                                <span className="span2">DISCOVER</span>
                            </a>
                            <span className="span3"></span>
                     
              </Button2> 
          </SectionContentWrapper>
          
         
        </SectionEle>
    );
  }
}

export default AdventurerHero;