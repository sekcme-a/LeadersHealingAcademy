import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        {/* <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="subscribe-content">
                                        <h2>Join Our Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="subscribe-form">
                                        <form className="newsletter-form">
                                            <input type="email" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" />
                                            <button type="submit">
                                                Subscribe Now <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link legacyBehavior  href="/">
                                            <a>
                                                <img src="/images/logo-white.png" alt="image" />
                                            </a>
                                        </Link>

                                        <p className="keep-all bold">???????????? ??????????????? ????????? ??????????????? ????????? ???????????? ????????? ???????????? ????????? ????????? ???????????? ????????? ?????????????????????. ????????? ????????? ??????????????? ??? ?????? ????????? ???????????? ??? ????????????. ??? ????????? ????????? ????????? ????????? ?????? ?????? ????????? ????????????????????? ???????????????.</p>
                                    </div>

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="flaticon-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="flaticon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="flaticon-instagram"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link legacyBehavior  href="/">
                                                <a>????????????</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/about">
                                                <a>????????????</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/about/video">
                                                <a>????????????</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="/special">
                                                <a>??????</a>
                                            </Link>
                                        </li>
                                    
                                        <li>
                                            <Link legacyBehavior  href="/contact">
                                                <a>????????????</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>??????:</span>??????????????? ???????????? ???????????????88, 101???</li>
                                        <li><span>?????????:</span> <a href="mailto:kyunsik@hanmail.net">kyunsik@hanmail.net </a></li>
                                        <li><span>????????????:</span> <a href="tel:010-5339-6943">010-5339-6943</a></li>
                                        <li><span>Fax:</span> <a>0504 411 0112</a></li>
                                        <li><a href="https://map.naver.com/v5/search/%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%EB%B2%84%EB%93%9C%EB%82%98%EB%A3%A8%EB%A1%9C88%EC%9D%B8%EB%94%B0%EB%A5%B4%EC%8B%9C%EC%95%84%EB%B9%8C%EB%94%A9/place/1106183029?c=15,0,0,0,dh&isCorrectAnswer=true" target="_blank">????????? ???????????? ?????? ??????</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p className='bold'><i className="far fa-copyright "></i> ????????? ?????? ????????????</p>
                                </div>

                                {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link legacyBehavior  href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior  href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;