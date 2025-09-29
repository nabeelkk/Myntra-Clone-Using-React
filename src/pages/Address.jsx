import "./Address.css"


function Address(){
    return(
        <>
            <div className="layout">
                <div id="headerUnderline">
                    <div id="header">
                        <div>
                            <a href="../index.html"><img height="45px"
                                    src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt=""/></a>
                        </div>
                        <div>
                            <p> <span className="navbarMiddle"> <a href="../cart/cartPage.html" className="cart-page">BAG</a> </span> ----------- <span
                                    className="navbarMiddle navbarMiddlePayment"> ADDRESS </span>
                                ----------- <span className="navbarMiddle"> PAYMENT </span> </p>
                        </div>
                        <div id="paymentNavSecure">
                            <img height="28px" src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
                                alt=""/>
                            <p><span className="navbarMiddle">100 % SECURE</span></p>
                        </div>
                    </div>
                </div>
                <div id="mountRoot">
                    <div id="appContent">
                        <div className="page   ">
                            <div>
                                <div>
                                    <div className="addressDesktop-base-addressLayout">
                                        <div className="addressDesktop-base-left">
                                            <div className="addressDesktop-base-addAddressContainer">
                                                <div className="addressFormUI-base-container">
                                                    <form action="">
                                                        <label htmlFor="">CONTACT DETAILS</label><br/>
                                                        <input type="text" placeholder="Name*"/><br/>
                                                        <input type="number" placeholder="Mobile No.*"/><br/>
                                                        <label htmlFor=""> ADDRESS </label><br/>
                                                        <input type="text" name="pin" pattern="[0-9]{6}" maxLength="6" placeholder="Pin Code*"/><br/>
                                                        <input type="text" placeholder="Address (House No, Building, Street, Area)*"/><br/>
                                                        <input type="text" placeholder="City / District*"/>
                                                        <input type="text" placeholder="State*"/><br/>
                                                        <label htmlFor="">SAVE ADDRESS AS</label><br/>
                                                        <input type="checkbox" name="" id=""/><span>Make this my default address</span><br/>
                                                        <button type="submit" className="button-base-button">ADD ADDRESS</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="addressDesktop-base-right">
                                            <div className="priceBlockCommon-base-container ">
                                                <div id="priceBlockHeader" className="priceBlockCommon-base-items">PRICE DETAILS (<span id="priceDetails">0</span> Items)</div>
                                                <div className="priceBlockCommon-base-detailBody">
                                                    <div className="priceBreakUp-base-orderSummary" id="priceBlock">
                                                        <div className="priceDetail-base-row">
                                                            <span>Total MRP</span>
                                                            <span className="priceDetail-base-value ">
                                                                <span></span>
                                                                <svg width="8" height="10" viewBox="0 0 8 10"
                                                                    className="priceDetail-base-icon">
                                                                    <path fillRule="nonzero"
                                                                        d="M1.951 5.845l3.91 3.602-.902.376L.7 5.845l.452-.711c.186-.005.392-.02.615-.048a5.2 5.2 0 0 0 1.347-.356c.218-.09.42-.201.604-.331.185-.13.345-.281.479-.455.134-.173.231-.371.29-.594H.865v-.841h3.644a1.759 1.759 0 0 0-.284-.667 1.826 1.826 0 0 0-.567-.512 2.964 2.964 0 0 0-.865-.332A5.22 5.22 0 0 0 1.63.882H.864V0h6.2v.882H4.18c.173.077.33.174.468.29a2.09 2.09 0 0 1 .612.848c.064.162.11.325.137.489h1.668v.84H5.383a2.38 2.38 0 0 1-.43 1.03 3.095 3.095 0 0 1-.8.748 4.076 4.076 0 0 1-1.043.482 6.15 6.15 0 0 1-1.159.236z">
                                                                    </path>
                                                                </svg>
                                                                <span id="totalmrp">0</span>
                                                            </span>
                                                        </div>
                                                        <div className="priceDetail-base-row">
                                                            <span>Discount on MRP</span>
                                                            <span className="priceDetail-base-value priceDetail-base-discount">
                                                                <span>-</span>
                                                                <svg width="8" height="10" viewBox="0 0 8 10"
                                                                    className="priceDetail-base-icon">
                                                                    <path fillRule="nonzero"
                                                                        d="M1.951 5.845l3.91 3.602-.902.376L.7 5.845l.452-.711c.186-.005.392-.02.615-.048a5.2 5.2 0 0 0 1.347-.356c.218-.09.42-.201.604-.331.185-.13.345-.281.479-.455.134-.173.231-.371.29-.594H.865v-.841h3.644a1.759 1.759 0 0 0-.284-.667 1.826 1.826 0 0 0-.567-.512 2.964 2.964 0 0 0-.865-.332A5.22 5.22 0 0 0 1.63.882H.864V0h6.2v.882H4.18c.173.077.33.174.468.29a2.09 2.09 0 0 1 .612.848c.064.162.11.325.137.489h1.668v.84H5.383a2.38 2.38 0 0 1-.43 1.03 3.095 3.095 0 0 1-.8.748 4.076 4.076 0 0 1-1.043.482 6.15 6.15 0 0 1-1.159.236z">
                                                                    </path>
                                                                </svg>
                                                                <span id="totaldisc">0</span>
                                                            </span>
                                                        </div>
                                                        <div className="priceDetail-base-row">
                                                            <span>Convenience Fee
                                                                <div className="priceDetail-base-infoTextContainer">
                                                                    <button fontSize="body2" fontWeight="bold" role="button"
                                                                        className="css-lnv4zc">
                                                                        <div className="css-xjhrni">Know More</div>
                                                                    </button>
                                                                </div>
                                                            </span>
                                                            <span className="priceDetail-base-value convienceFee">
                                                                 {/* <svg width="8" height="10" viewBox="0 0 8 10"
                                                                    className="priceDetail-base-icon">
                                                                    <path fill-rule="nonzero"
                                                                        d="M1.951 5.845l3.91 3.602-.902.376L.7 5.845l.452-.711c.186-.005.392-.02.615-.048a5.2 5.2 0 0 0 1.347-.356c.218-.09.42-.201.604-.331.185-.13.345-.281.479-.455.134-.173.231-.371.29-.594H.865v-.841h3.644a1.759 1.759 0 0 0-.284-.667 1.826 1.826 0 0 0-.567-.512 2.964 2.964 0 0 0-.865-.332A5.22 5.22 0 0 0 1.63.882H.864V0h6.2v.882H4.18c.173.077.33.174.468.29a2.09 2.09 0 0 1 .612.848c.064.162.11.325.137.489h1.668v.84H5.383a2.38 2.38 0 0 1-.43 1.03 3.095 3.095 0 0 1-.8.748 4.076 4.076 0 0 1-1.043.482 6.15 6.15 0 0 1-1.159.236z">
                                                                    </path>
                                                                </svg>  */}
                                                                <span id="convenienceFee">₹ 99</span> <span style={{color: "#03a685"}}>FREE</span>
                                                            </span>
                                                        </div>
                                                        <div className="priceDetail-base-total">
                                                            <span>Total Amount</span>
                                                            <span className="priceDetail-base-value ">
                                                                <span></span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10"
                                                                    viewBox="0 0 8 10" className="priceDetail-base-icon">
                                                                    <path fillRule="nonzero"
                                                                        d="M5.841 9.44l-1.21.513L.365 5.968l.547-.875c.251-.005.529-.033.834-.086a4.91 4.91 0 0 0 .896-.242c.292-.11.556-.251.793-.424s.412-.383.526-.63H.564V2.578h3.431a1.779 1.779 0 0 0-.307-.51 1.99 1.99 0 0 0-.52-.426 2.789 2.789 0 0 0-.738-.29 3.955 3.955 0 0 0-.957-.107h-.91V0h6.31v1.244H4.522c.082.082.162.179.239.29a3.867 3.867 0 0 1 .39.712c.05.12.086.23.109.331h1.613v1.135H5.246a2.51 2.51 0 0 1-.434.906 3.293 3.293 0 0 1-.718.694 3.884 3.884 0 0 1-.916.478 5.378 5.378 0 0 1-1.028.267L5.84 9.44z">
                                                                    </path>
                                                                </svg>
                                                                <span id="totalamt">0</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div id="footer">
                        <div id="footerContent">
                            <div id="footerContentImg">
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt=""/>
                                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt=""/>
                            </div>
                            <a href="">Need Help ? Contact Us</a>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default Address
