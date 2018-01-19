import React, { Component } from 'react';
import styled from 'styled-components'


const bigScreen = 'only screen and (min-width: 1200px)'
const wideScreen = 'only screen and (min-width: 900px) ';
const smallerScreen = 'only screen and (min-width: 850px) ';
const narrowScreen = 'only screen and (max-width: 767px) ';

const SelectSection = styled.section`
  background-color: #222;
  height: 56vh;
  padding: 20px;
  color: white;
  text-align:center;
  padding:0;
  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f1f1f1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   background-image:url('http://www.beargrylls.com/store/bundles/octerweb/img/various/bg-mountain-compressor.jpg');
   
`

const SelectWrapper = styled.div`
     width:90%;
    display: flex;
    justify-content: space-between;
   
    & h3 {
       font-size:2.25rem;
       font-family:'AkkuratStd';
       
   }

   @media  ${wideScreen} {
          width:90% !important;
          & h3 {
             width:56%;
          }
    }
   @media  ${smallerScreen} {
          width:90% !important;
          & h3 {
             width:56%;
          }
    }
    @media  ${narrowScreen} {
        width:50%;
        flex-direction: column;
    }
`

const SelectForm = styled.form`
    position: relative;
    width:65%;
    height:40px;
    top:28px;
    border-bottom: 2px solid #fff;    
    & input {
        display: inline-block;
    width: 100%;
    height: 2.25rem;
    border:none;
    background-color: transparent;
    color: #fff;
        &::placeholder {
            color:white;
            font-size:16px;
            font-family:'AkkuratStd';
        }
    }
    & div {
        position: absolute;
        right: 0;
        top: 10px;
    }
    @media  ${wideScreen} {
        width:90%;
        left:10px;

        & div > span {
            color: red;
        }
    }
    @media  ${narrowScreen} {
        width:80%;
        left:29px;

        & div > span {
            color: red;
        }
    }
`


class SearchByProduct extends Component {
    /// need to put funitionally for print out what gets inputted to console
    constructor() {
        super();
        this.state = {
            inputText: '',
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({inputText: e.target.value })// eslint-disable-line no-restricted-globals
    }
  render() {
  
    return (
        <SelectSection>
            <SelectWrapper>
                <h3>Search Products</h3>
                {/* <div> */}
                 <SelectForm>
                 <input 
                    id="search-products-input" 
                    className="product-search__input " 
                    type="search" placeholder="I am looking for..." 
                     onChange={ e => this.handleChange(e) }
                     />
                     <div className="rightwards"><span>→</span></div>
                 </SelectForm>
                {/* </div> */}
            </SelectWrapper>
        </SelectSection>
    );
  }
}

export default SearchByProduct;