import React, { Component } from 'react';
import styled from 'styled-components'
import { arrayOf, object } from 'prop-types'



const bigScreen = 'only screen and (min-width: 1200px)'
const wideScreen = 'only screen and (min-width: 900px) ';
const smallwideScreen = 'only screen and (min-width: 768px) ';
const narrowScreen = 'only screen and (max-width: 767px) ';



const StoreWrapper1 = styled.section`
    width:100%;
   margin: 0 auto;
    justify-content:center;
    text-align:center;
    background-color:efefef;
   
    & h3 {
       font-size:2.25rem;   
   }
   margin-bottom:35px;

   & Button.seeAllStories {
        bottom: 0.4rem;
        left: 0.5rem;
        margin-top: 10px;
        margin-left: 10px;
        padding: 0.8em
       position:relative;
       &:hover {
            color:white;
       }
           
   }
`

const Button = styled.a`
  /* Adapt the colours based on primary prop */
  color: 'black';
  font-size: 1em;
  padding:  1em;
  padding-right: 29px;
  padding-left: 29px;
  margin-top:10px;
  border: 2px solid #e43a15;
  background-position: 0 center;
  text-decoration:none;
  color:black;
  background-position: 0;
  background-size:100%;

  &:hover {     
            background-color: #e43a15;
            background-position: 100%;
            transition: all 1.4s ease;
  }

  
  @media  ${smallwideScreen} {
           ${'' /* position:absolute; */}
           bottom:0.4rem;
           left:0.5rem;
           margin-top:10px; 
           margin-left:10px;
           padding: 0.8em;
        }
  

  @media  ${wideScreen} {
           position:absolute;
           bottom:0.4rem;
           left:0.5rem;
           margin-top:10px; 
           margin-left:10px;
           padding: 0.8em;
        }

  @media  ${narrowScreen} {
           position:absolute;
           bottom:1rem;
           left:.225rem;
           margin-top:10px; 
           margin-left:10px;
           padding: 0.8em;
           &:hover {
            /*transition: background-color background-position 2s ease-out;*/
            background-color: black;
            background-position: 100%;
            transition: all 1.4s ;
            /*background-position: 100% center;*/
            & span {
                color: white;
                }
             }
        }
 
`
const StoreWrapper2 = styled.div`

   margin: 0 auto;
   margin-top:40px;
    justify-content:center;
    text-align:center;
    display:flex;
    

    @media  ${bigScreen} {
         width:70% !important;
         
        }

    @media  ${wideScreen} {
         width:96%;
        
    }
    @media  ${narrowScreen} {
         flex-wrap:wrap;
    }

`
const StoreDiv = styled.div`
        margin-left:2px;
        margin-right:2px;
        padding-bottom:40px;
        background-color:white;
        flex-wrap:wrap;

       

        & h2 {
            font-size: 1.125rem;
            text-align:left;
            margin: 1em 1em;
        }
        @media  ${smallwideScreen} {
            padding-bottom:20px;
            & h2 {
                font-size:1rem;
            }
            & .discover-btn {
                bottom: 20px;
                padding: 6px;
                font-size: small;
                float:left;
            }
        }
        @media  ${wideScreen} {
         width:24.45%;
         margin-bottom: 2%;
         position:relative;
            margin-right: 1%;
            padding-bottom:60px;
        }
        @media  ${narrowScreen} {
            width:47%;
            margin-right:10px;
            position:relative;
            padding-bottom: 5rem;
            margin-top:10px
            
            & h2 {
                text-align:left;
                margin: 1em 1em;
              
            }
        }
       
`
const StoreImg = styled.img`
    max-width:100%;
`

class SearchByStore extends Component {

  render() {
    const { tiledStores } = this.props
    return (
        <StoreWrapper1> 
            <h3>Search by store</h3>
                <Button className="seeAllStories">SEE ALL STORES</Button>

                <StoreWrapper2>
                { tiledStores.map((tiledStore, i) => {

                    return <StoreDiv key={i}>
                                    <StoreImg src={tiledStore.image} />
                                    <h2>
                                        <span>{tiledStore.Store}</span>
                                    </h2>
                                    <Button className='discover-btn' href={tiledStore.link}><span>DISCOVER</span></Button>
                                    
                           </StoreDiv>

                })}
                </StoreWrapper2>
        </StoreWrapper1>
    );
  }

  static get propTypes () {
    return ({
        tiledStores: arrayOf(object)
    })
}

static get defaultProps () {
    return ({
        tiledStores: [
            {
                Store: 'Cotswold Outdoor',
                link: "http://www.beargrylls.com/store/store/808a1970e3f1/cotswold-outdoor",
                image: "http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504861720/cotswold-outdoor-compressed_ldpj2d.jpg"
                },
                {
                Store: 'Ellis Brigham ',
                link: "http://www.beargrylls.com/store/store/46feff50dedf/ellis-brigham",
                image: "http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504861720/Ellis-Brigham-compressed_rqrc3t.jpg"
               },
               {
                Store: 'Jack Wolfskin',
                link: "http://www.beargrylls.com/store/store/92d9f3c365a3/jack-wolfskin",
                image: "http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504861721/Jack-Wolfskin-compressed_bc8zdn.jpg"
               },
               {
                Store: 'Snow and rock',
                link: "http://www.beargrylls.com/store/store/e0731e092b77/snow-and-rock",
                image: "http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504861721/Snow-and-rock-compressed_tqig2m.jpg"
               }
        ]
         
    })
}
}

export default SearchByStore;