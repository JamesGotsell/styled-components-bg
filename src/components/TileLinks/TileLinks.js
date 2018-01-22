import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types'
import styled from 'styled-components'



const wideScreen = 'only screen and (max-width: 900px) ';

const TiledNav = styled.nav`
        max-width: 1250px;
        margin-top: -60px !important;
        margin: 2.5% auto;
        overflow: auto; 
    
    @media  ${wideScreen} {
        margin-top: 10px !important; 
    }
`

const TiledUl = styled.ul`
        width: 100%;  
        list-style:none;
        padding:0;    
        display:flex;
        flex-wrap:wrap;
        justify-content:center
        
`

const TiledItem = styled.li`
        width: 17.4%; 
        float:left; 
        height:180px;
        position:relative;
        margin:10px;
        & a {
        background-color: rgba(0,0,0,.45);  
        }
        &:hover {
            & a {
                transition: background-color 0.5s ease;
                background-color: rgba(0,0,0,1);
        }
        
    }
    
    @media  ${wideScreen} {
        width: 43.4%; 
        &:nth-child(n) {
        margin-bottom: 2.0%;
         margin-right: 2.0%;
    }
    }
        
`
const TiledA = styled.a`

    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:100%;
    display: flex;
    background-position: center;
    width:100%;
    position:relative;
    color:#fff;
    text-decoration:  none;
    & div {
      
        background-color: rgba(0,0,0,.45);  
    }
    &:hover {
        & div {
            transition: background-color 0.5s ease;
            background-color: rgba(0,0,0,.55);
        }
    }

  
`
const TiledDiv = styled.div`
 
    display: flex;
    width:100%;
    align-items: center;
    justify-content: center;
    & h2 {
    display:flex;
    align-items: center;
    position:relative;
    font-size:16px
    }
    &:hover {
        & div {
        transition: background-color 0.5s ease;
        background-color:#E74315;
        }
    }
    & div {
        position:absolute;
        width:50px;
        height:50px;
        background-color:#1f201f;
        bottom:0;
        right:0;
        display:flex;
        align-self: center;
        align-items:center;
        justify-content:center;
        & span {
            position:absolute;
        }
    }
`

class TileLinks extends Component {

  render() {
    const { tiledItems } = this.props
    return (
        <TiledNav>
            <TiledUl> 
            { tiledItems.map((tiledItem, i) => {
                               return  <TiledItem key={i+1}>
                                                <TiledA image={`${tiledItem.image}`} href={tiledItem.link}>
                                                    <TiledDiv  >
                                                        <h2>{tiledItem.title}</h2>
                                                        <div>
                                                            <span>→</span>
                                                        </div>
                                                    </TiledDiv>
                                                </TiledA>     
                                        </TiledItem>
                            })}
            </TiledUl>
        </TiledNav>
    );
  }

  static get propTypes () {
      return ({
          tiledItems: arrayOf(object)
      })
  }

  static get defaultProps () {
      return ({
        tiledItems: [
            {
             title: 'Bear\'s picks',
             link: "http://www.beargrylls.com/store/category/efa8d5a644b7/bears-picks",
             image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Bears-Picks.jpg"
            },
            {
                title: 'Outdoor Man',
                link: "http://www.beargrylls.comhref=/store/category/9f25fee63a5f/outdoor-man",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Clothing-man.jpg"
               },
               {
                title: 'Outdoor Woman',
                link: "http://www.beargrylls.com/store/category/3b9c2a780092/outdoor-woman",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Outdoor-Women.jpg"
               },
               {
                title: 'OutDoor Kid',
                link: "http://www.beargrylls.com/store/category/c909e20a2ba3/outdoor-kid",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Outdoor-Kids.jpg"
               },
               {
                title: 'Bear\'s books',
                link: "http://www.beargrylls.com/store/category/1a019c1205c7/bears-books",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/08/BG-Books.jpg"
               },
               {
                title: 'Technology',
                link: "http://www.beargrylls.com/store/category/9cc7194dcb56/technology",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Tech.jpg"
               },
               {
                title: 'Bags',
                link: "http://www.beargrylls.com/store/category/b4dcae1a8e76/bags",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Bags.jpg"
               },
               {
                title: 'Hiking',
                link: "http://www.beargrylls.com/store/category/c7246632f43d/hiking",
                image: "http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Hiking.jpg"
               }, {
                title: 'Camping',
                link: "http://www.beargrylls.com/store/category/5df32a06c851/camping",
                image:"http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Camping.jpg"
               },
               {
                title: 'Climbing',
                link: "http://www.beargrylls.com/store/category/58c74cf3c99d/climbing",
                image:"http://res.cloudinary.com/s8/image/fetch/f_auto,q_auto/http://blog.octer.com/wp-content/uploads/2017/09/Climbing.jpg"
               }  
         ]
      })
  }
  
}

export default TileLinks;