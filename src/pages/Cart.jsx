import './Cart.css'
import {Link, useNavigate} from 'react-router'


function Cart() {
    const navigate = useNavigate()
    return (
        <>
            <div id="headerUnderline">
                <div id="header">
                    <div>
                        <Link to="/"><img height="45px"
                            src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt=""/></Link>
                    </div>
                    <div>
                        <p> <span id="bag" className="navbarMiddle"> BAG </span> ----------- <span
                            className="navbarMiddle "> ADDRESS </span>
                            ----------- <span className="navbarMiddle"> PAYMENT </span> </p>
                    </div>
                    <div id="paymentNavSecure">
                        <img height="28px" src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
                            alt="" />
                        <p><span className="navbarMiddle">100 % SECURE</span></p>
                    </div>
                </div>
            </div>

            <div id="parent">
                <div id="leftBlock">
                    <div> <div id="addstrip">
                        <div>
                            Check delivery time and services
                        </div>
                        <button>
                            <div>ENTER PIN CODE</div>
                        </button>
                    </div>
                        <div id="offer">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="offersV2-base-discountIcon"><g fill="#000" fillRule="evenodd"><path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"></path><path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"></path></g></svg>
                                <p>Available Offers</p>
                            </div>
                            <div>
                                <div>

                                    <p>10% Instant Discount on Kotak Credit and Debit Cards on a min spend of</p>
                                    <p> Rs 3,000.TCA</p>
                                </div>
                                <p>Show More <span id="svg"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" className="offersV2-base-arrowIcon" style={{transform: "rotate(90deg)"}}><path fillRule="evenodd" d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"></path></svg></span></p>
                            </div>
                        </div>
                        <div>
                            <img height="22" width="32" src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt="" />
                            <p>Yay! <span style={{fontWeight: "bold"}}>No convenience fee</span> on this order</p>
                        </div>
                        <div id="bulkAction">

                            <div id="itemselected"> ITEMS SELECTED</div>
                            <div>
                                <button>REMOVE</button>
                                <button>MOVE TO WISHLIST</button>
                            </div>
                        </div></div>
                    <div id="cartitemparent" className="cartitemparent">
                    </div>
                </div>
                <div id="rightBlock">
                    <div id="coupons">
                        <p>COUPONS</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="coupons-base-couponIcon"><g fill="none" fillRule="evenodd" transform="rotate(45 6.086 5.293)"><path stroke="#000" d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"></path><circle cx="5.35" cy="5.35" r="1.35" fill="#000" fillRule="nonzero"></circle></g></svg>
                            <p>Apply Coupons</p>
                            <button >APPLY</button>
                        </div>
                        <div>
                            Get upto ₹300 OFF on first order
                        </div>
                    </div>
                    <div id="priceContainer">
                        <div>PRICE DETAILS (<span id="priceDetails">0</span> Items)</div>
                        <div id="priceBreakup">
                        </div>
                        <div id="priceBreakup">

                            <div>
                                <div>Total MRP</div>
                                <div id="totalmrp">₹0</div>
                            </div>


                            <div>
                                <div>Discount on MRP</div>
                                <div id="totaldisc">₹0</div>
                            </div>


                            <div>
                                <div>Coupon Discount</div>
                                <div id="cpn300">Apply Coupon</div>
                            </div>


                            <div>
                                <div>Convenience Fee</div>
                                <div>
                                <span className="text-decoration: line-through;">₹99</span>
                                <span className="color: #03a685;">FREE</span>
                                </div>
                            </div>


                            <div>
                                <div>Total Amount</div>
                                <div id="totalamt">₹0</div>
                            </div>


                            <button onClick={()=>{navigate('/address')}}>
                                PLACE ORDER
                            </button>
                            </div>


                            {/* <div id="priceDetails">0</div> */}
                    </div>
                </div >

                <div id="modal" className="modal">
                    <div className="popupdiv" id="popupdiv">
                        <div id="crossselect"style={{cursor: "pointer"}}>
                            <div>Select Quanity</div>
                            <div>
                                <img src="https://cdn.onlinewebfonts.com/svg/img_265949.png" alt="" />
                            </div>
                        </div>
                        <div id="numdiv">
                            <div id="num1" >1</div>
                            <div id="num2" >2</div>
                            <div id="num3" >3</div>
                            <div id="num4" >4</div>
                            <div id="num5" >5</div>
                        </div>
                        <button id="done" >
                            <div>DONE</div>
                        </button>
                    </div>
                    <div className="popupdiv" id="couponpopup">
                        <div id="crossselect" style={{cursor: "pointer"}}>
                            <div>APPLY COUPONS</div>
                            <div>
                                <img src="https://cdn.onlinewebfonts.com/svg/img_265949.png" alt="" />
                            </div>
                        </div>
                        <div id="coupon-form-input">
                            <div id="inputdiv">
                                <input type="number" placeholder="Enter couponcode" />
                                <div>CHECK</div>
                            </div>
                        </div>
                        <div id="couponform">
                            <button >MYNTRA 300</button>
                            <p>Save ₹301</p>
                            <p>Rs.300 off on minimum purchase of Rs.1499</p>
                            <p>Expires on: 31st December 2022</p>
                        </div>
                        <div>
                            <div id="saving">
                                <div>
                                    <p>Maximum savings:</p>
                                    <p>₹301</p>
                                </div>
                                <div>
                                    <button id="done">
                                        <div>APPLY</div>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div id="footer">
                <div id="footerContent">
                    <div id="footerContentImg">
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="" />
                        <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="" />
                    </div>
                    <Link to="">Need Help ? Contact Us</Link>
                </div>
            </div>
            

        </>
    );

}

export default Cart