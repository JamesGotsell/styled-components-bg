import React, { Component } from 'react';
import styled from 'styled-components'


 const FooterWrapper = styled.footer`
  
    clear: both;
    position:relative;
    background-color: #212322;
    font-family: Raisonne,"Helvetica Neue",Helvetica,Arial,sans-serif;
    min-height: 60vh;
`

const FooterTop = styled.div`
    clear: both;
    width: 100%;
    display: flex
` 
const FooterTopLeft = styled.div`
  border-right: 1px solid #626265;
` 
const FooterTopRight = styled.div`
    clear: both;
    width: 100%;
    display: flex
` 

const FooterTopIconLeft = styled.div`
   display: flex;
` 

const FooterTopIconRight = styled.div`
    display: flex;
`

const FooterIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  
    &  img { 
        padding: 2rem;        
        max-height:150px;
    }
`


const FooterMiddle = styled.div`
    clear: both;
    width: 100%;
    display: flex;
    border-top: 1px solid #626265;
` 

const FooterMiddleLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:33%;
` 

const FooterMiddleCenter = styled.div`
    border-top: none;
    border-bottom: none;
    border-left: 1px solid #626265;
    border-right: 1px solid #626265;
    display: flex;
    padding: 2rem;
    width:33%;
   
` 
const FooterMiddleCenterUl = styled.ul`
    justify-content: space-between;
    
    & li {
        list-style: none;
        & a { 
            color:white;
            text-decoration: none
        }
    }
`
const FooterMiddleRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width:33%;
    & .footer-middle-right-icons {
        & a {
            width: 20vw;
            padding-left:20px;
          
        }
        
    }
` 
const FooterBottom = styled.div`
     clear: both;
    width: 100%;
    display: flex;
    border-top: 1px solid #626265;
    padding: 2rem;
    text-align: left;
    color: #fff;
    height:10vh;
    & div {
        vertical-align:middle;
    }
`

class Footer extends Component {
  render() {
    return (

        <FooterWrapper>

         <FooterTop>
                    <FooterTopLeft>
                        <FooterTopIconLeft>
                            <FooterIconsWrapper>
                        
                                <img src="http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504860989/i0-compressed_hu5x4d.png" alt="" />
                            
                            </FooterIconsWrapper>
                            <FooterIconsWrapper>
                           
                                <img src="http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504860989/i1-compressed_omarvl.png" alt=""  />
                          
                             </FooterIconsWrapper>
                            <FooterIconsWrapper>
                                <img src="http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504860989/i2-compressed_ieo3eu.png" alt="" />
                            </FooterIconsWrapper>
                        </FooterTopIconLeft>
                    </FooterTopLeft>
            <FooterTopRight>
                <FooterTopIconRight>
                        <FooterIconsWrapper>
                            <img src="http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504860989/i3-compressed_hbarbr.png" alt="" />
                        </FooterIconsWrapper>
                        <FooterIconsWrapper>
                            <img src="http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504860989/i4-compressed_nugbdg.png" alt="" />
                        </FooterIconsWrapper>
                        <FooterIconsWrapper>
                            <img src="http://res.cloudinary.com/s8/image/upload/f_auto,q_auto/v1504860989/i5-compressed_m54x9f.png" alt="" />
                        </FooterIconsWrapper>
                    </FooterTopIconRight>
                </FooterTopRight>
        </FooterTop>
            <FooterMiddle>
                <FooterMiddleLeft> 
                    BearGrylls icons
                </FooterMiddleLeft>

                <FooterMiddleCenter>
                
                        <FooterMiddleCenterUl>
                            <li>
                                <a href="http://www.beargrylls.com/about">
                                    <span className="footer-middle-center-link-line"></span>
                                    <span className="footer-middle-center-link-txt">About</span>
                                </a>
                            </li>
                            <li>
                            
                                <a href="http://www.beargrylls.com/television">
                                    <span className="footer-middle-center-link-line"></span>
                                    <span className="footer-middle-center-link-txt">Television</span>
                                </a>
                            </li>
                            <li>

                                <a href="http://www.beargrylls.com/experiences">
                                    <span className="footer-middle-center-link-line"></span>
                                    <span className="footer-middle-center-link-txt">Experiences</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.beargrylls.com/socialwall">
                                    <span className="footer-middle-center-link-line"></span>
                                    <span className="footer-middle-center-link-txt">Social</span>
                                </a>
                           </li>
                           </FooterMiddleCenterUl>
                           <FooterMiddleCenterUl>
                           <li>
                                <a href="http://www.beargrylls.com/termsofuse">
                                    <span className="footer-middle-center-link-line"></span>
                                    <span className="footer-middle-center-link-txt">Terms of use</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.beargrylls.com/faqs">
                                    <span className="footer-middle-center-link-line"></span>
                                    <span className="footer-middle-center-link-txt">FAQ</span>
                                </a>
                            </li>
                            </FooterMiddleCenterUl>
                </FooterMiddleCenter>


            <FooterMiddleRight>
                <div className="footer-middle-right-icons">
                    <a className="_tb" href="https://www.instagram.com/beargrylls">
                        <svg viewBox="0 0 39 39" width="39" fill='white' height="39">
                            <path d="M19.448,39.006 C8.707,39.006 -0.000,30.276 -0.000,19.506 C-0.000,8.736 8.707,0.005 19.448,0.005 C30.189,0.005 38.896,8.736 38.896,19.506 C38.896,30.276 30.189,39.006 19.448,39.006 ZM27.841,13.287 C27.841,12.066 26.844,11.066 25.626,11.066 L12.802,11.066 C11.583,11.066 10.586,12.066 10.586,13.287 L10.586,26.146 C10.586,27.367 11.583,28.366 12.802,28.366 L25.626,28.366 C26.844,28.366 27.841,27.367 27.841,26.146 L27.841,13.287 ZM25.205,26.376 L13.190,26.376 C12.813,26.376 12.505,26.069 12.505,25.690 L12.505,18.382 L14.088,18.382 C13.945,18.854 13.866,19.351 13.866,19.867 C13.866,22.744 16.268,25.077 19.230,25.077 C22.192,25.077 24.594,22.744 24.594,19.867 C24.594,19.351 24.516,18.854 24.372,18.382 L25.890,18.382 L25.890,25.690 C25.890,26.069 25.582,26.376 25.205,26.376 ZM25.106,16.410 L23.156,16.410 C22.728,16.410 22.379,16.060 22.379,15.631 L22.379,13.768 C22.379,13.339 22.728,12.988 23.156,12.988 L25.106,12.988 C25.533,12.988 25.883,13.339 25.883,13.768 L25.883,15.631 C25.883,16.060 25.533,16.410 25.106,16.410 ZM19.230,23.046 C17.317,23.046 15.765,21.538 15.765,19.680 C15.765,17.819 17.317,16.312 19.230,16.312 C21.144,16.312 22.695,17.819 22.695,19.680 C22.695,21.538 21.144,23.046 19.230,23.046 Z"></path>
                        </svg>
                    </a>
                    <a className="_tb" href="https://www.facebook.com/RealBearGrylls">
                        <svg viewBox="0 0 40 39" width="40" fill='white' height="39">
                            <path d="M20.199,0.005 C9.459,0.005 0.751,8.736 0.751,19.506 C0.751,30.276 9.459,39.006 20.199,39.006 C30.940,39.006 39.648,30.276 39.648,19.506 C39.648,8.736 30.940,0.005 20.199,0.005 ZM25.128,12.289 L23.122,12.290 C21.548,12.290 21.242,13.040 21.242,14.140 L21.242,16.568 L24.997,16.568 L24.508,20.369 L21.242,20.369 L21.242,30.124 L17.328,30.124 L17.328,20.369 L14.053,20.369 L14.053,16.568 L17.328,16.568 L17.328,13.764 C17.328,10.511 19.308,8.738 22.203,8.738 C23.591,8.738 24.782,8.842 25.128,8.888 L25.128,12.289 Z"></path>
                        </svg>
                    </a>
                    <a className="_tb" href="https://www.youtube.com/beargryllsadventure">
                        <svg viewBox="0 0 40 39" width="40" fill='white' height="39">
                            <path d="M20.383,39.006 C9.642,39.006 0.935,30.276 0.935,19.506 C0.935,8.736 9.642,0.005 20.383,0.005 C31.124,0.005 39.831,8.736 39.831,19.506 C39.831,30.276 31.124,39.006 20.383,39.006 ZM30.153,15.765 C30.153,14.146 28.844,12.833 27.229,12.833 L13.517,12.833 C11.902,12.833 10.594,14.146 10.594,15.765 L10.594,23.628 C10.594,25.247 11.902,26.560 13.517,26.560 L27.229,26.560 C28.844,26.560 30.153,25.247 30.153,23.628 L30.153,15.765 ZM18.417,15.629 L24.003,19.321 L18.417,23.014 L18.417,15.629 Z"></path>
                        </svg>
                    </a>
                    <a className="_tb" href="https://twitter.com/BearGrylls">
                        <svg viewBox="0 0 40 39" width="40" fill='white' height="39">
                            <path d="M20.049,0.005 C9.308,0.005 0.601,8.736 0.601,19.506 C0.601,30.276 9.308,39.006 20.049,39.006 C30.790,39.006 39.497,30.276 39.497,19.506 C39.497,8.736 30.790,0.005 20.049,0.005 ZM27.625,15.541 C27.632,15.709 27.636,15.877 27.636,16.045 C27.636,21.184 23.735,27.108 16.602,27.108 C14.412,27.108 12.373,26.464 10.657,25.362 C10.960,25.397 11.269,25.416 11.581,25.416 C13.399,25.416 15.071,24.794 16.398,23.752 C14.701,23.719 13.269,22.596 12.776,21.051 C13.012,21.096 13.256,21.121 13.505,21.121 C13.858,21.121 14.202,21.073 14.527,20.984 C12.753,20.627 11.416,19.055 11.416,17.171 L11.416,17.123 C11.939,17.413 12.537,17.589 13.173,17.609 C12.133,16.912 11.448,15.721 11.448,14.373 C11.448,13.660 11.639,12.993 11.973,12.417 C13.886,14.771 16.743,16.318 19.966,16.480 C19.900,16.196 19.866,15.900 19.866,15.595 C19.866,13.447 21.602,11.706 23.744,11.706 C24.859,11.706 25.867,12.178 26.576,12.934 C27.459,12.760 28.289,12.436 29.037,11.990 C28.749,12.898 28.133,13.660 27.332,14.141 C28.116,14.048 28.864,13.838 29.559,13.529 C29.038,14.309 28.382,14.994 27.625,15.541 Z"></path>
                        </svg>
                    </a>
                    <a className="_tb" href="http://www.weibo.com/beargryllsinchina?from=myfollow_all&amp;is_all=1">
                        <svg viewBox="0 0 40 39" width="40" fill='white' height="39">
                            <path d="M20.097,39.006 C9.356,39.006 0.649,30.276 0.649,19.506 C0.649,8.736 9.356,0.005 20.097,0.005 C30.838,0.005 39.545,8.736 39.545,19.506 C39.545,30.276 30.838,39.006 20.097,39.006 ZM19.812,16.550 C19.812,16.549 19.132,16.853 19.306,16.303 C19.639,15.209 19.588,14.294 19.070,13.765 C17.896,12.565 14.771,13.811 12.091,16.544 C10.083,18.592 8.919,20.764 8.919,22.641 C8.919,26.232 13.430,28.634 17.844,28.634 C23.630,28.634 27.479,24.984 27.479,22.260 C27.479,20.614 26.121,19.680 24.900,19.294 C24.600,19.203 24.394,19.140 24.551,18.738 C24.891,17.865 24.926,17.113 24.559,16.576 C23.868,15.569 21.977,15.624 19.812,16.550 ZM23.902,14.351 C25.011,14.579 25.885,15.455 26.111,16.566 C26.196,16.980 26.600,17.248 27.014,17.162 C27.427,17.076 27.693,16.672 27.608,16.257 C27.259,14.548 25.915,13.200 24.210,12.851 C23.796,12.765 23.392,13.032 23.308,13.446 C23.223,13.861 23.489,14.266 23.902,14.351 ZM30.646,16.370 C30.643,12.744 27.711,9.805 24.095,9.805 C23.673,9.805 23.331,10.148 23.331,10.572 C23.331,10.995 23.673,11.338 24.095,11.338 C26.868,11.338 29.117,13.593 29.117,16.373 C29.117,16.797 29.459,17.140 29.881,17.140 C30.303,17.140 30.646,16.797 30.646,16.373 L30.646,16.370 ZM17.855,27.024 C14.334,27.374 11.294,25.770 11.065,23.437 C10.837,21.107 13.507,18.933 17.028,18.582 C20.551,18.230 23.591,19.835 23.819,22.166 C24.047,24.498 21.378,26.672 17.855,27.024 ZM19.049,22.493 C18.811,21.308 17.467,20.579 16.049,20.864 C14.630,21.151 13.673,22.344 13.911,23.528 C14.148,24.714 15.491,25.443 16.910,25.157 C18.328,24.871 19.286,23.679 19.049,22.493 Z"></path>
                        </svg>
                    </a>
                    <a className="_tb" href="http://mp.weixin.qq.com/s?__biz=MzA5NjM2MzU0Mw==&amp;mid=2650593876&amp;idx=1&amp;sn=858fece3bb65626dd95e02b45788a05f&amp;scene=1&amp;srcid=0723IoE1rF0O8vb6har6bEGp#wechat_redirect">
                        <svg viewBox="0 0 39 39" width="39" fill='white' height="39">
                            <path d="M19.552,39.006 C8.811,39.006 0.104,30.276 0.104,19.506 C0.104,8.736 8.811,0.005 19.552,0.005 C30.293,0.005 39.000,8.736 39.000,19.506 C39.000,30.276 30.293,39.006 19.552,39.006 ZM22.496,13.249 C20.686,10.879 17.340,9.884 14.362,10.859 C12.181,11.573 10.576,12.944 9.922,15.204 C9.215,17.647 10.160,20.021 12.399,21.606 C12.748,21.853 12.801,22.065 12.687,22.444 C12.532,22.961 12.445,23.498 12.310,24.112 C13.047,23.650 13.668,23.235 14.317,22.868 C14.513,22.757 14.786,22.730 15.017,22.749 C15.685,22.806 16.349,22.905 17.079,22.996 C16.913,21.029 17.520,19.443 18.851,18.148 C20.169,16.867 21.791,16.300 23.657,16.202 C23.551,15.066 23.150,14.105 22.496,13.249 ZM28.698,19.152 C26.832,16.740 22.951,16.160 20.304,17.899 C17.327,19.855 16.959,23.514 19.532,25.901 C20.886,27.156 22.527,27.668 24.359,27.480 C24.960,27.419 25.564,27.086 26.139,27.146 C26.716,27.207 27.258,27.603 27.849,27.867 C27.810,27.709 27.802,27.551 27.734,27.427 C27.365,26.752 27.572,26.331 28.147,25.819 C30.134,24.051 30.326,21.257 28.698,19.152 ZM25.450,21.332 C25.060,21.331 24.753,21.007 24.769,20.611 C24.784,20.241 25.094,19.942 25.459,19.944 C25.848,19.947 26.154,20.274 26.139,20.671 C26.126,21.047 25.828,21.333 25.450,21.332 ZM21.123,21.337 C20.750,21.337 20.438,21.036 20.425,20.665 C20.412,20.276 20.739,19.941 21.128,19.943 C21.522,19.944 21.839,20.275 21.824,20.670 C21.809,21.042 21.500,21.337 21.123,21.337 ZM19.550,14.578 C20.018,14.569 20.398,14.937 20.402,15.403 C20.407,15.878 20.047,16.246 19.572,16.251 C19.099,16.257 18.717,15.893 18.709,15.428 C18.700,14.980 19.089,14.586 19.550,14.578 ZM14.190,16.248 C13.717,16.235 13.358,15.858 13.372,15.388 C13.386,14.924 13.772,14.564 14.242,14.578 C14.700,14.592 15.086,14.994 15.069,15.441 C15.052,15.899 14.659,16.259 14.190,16.248 Z"></path>
                        </svg>
                    </a>
                </div>
            </FooterMiddleRight>

            </FooterMiddle>

        <FooterBottom>
            <div>© Bear Grylls Ventures LTD</div>    
        </FooterBottom>

    
    </FooterWrapper>
    );
  }
}

export default Footer;