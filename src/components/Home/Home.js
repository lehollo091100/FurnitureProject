import React from 'react'
import './Home.css'
import Slider from "react-slick";
import image1 from "../../image/hinh1.png"
import image2 from "../../image/delivery-symbol.png"
import image3 from "../../image/nhanhang.jpg"
import image4 from "../../image/hinh4.jpg"
import arrow1 from "../../image/arrow-1.png"
import arrow2 from "../../image/arrow-2.png"
import arrow3 from "../../image/arrow-3.png"
import icon1 from "../../image/icon1.jpg"
import icon2 from "../../image/icon2.jpg"
import icon3 from "../../image/icon3.png"
import BAN from "../../image/ban.png"
import SOFA from "../../image/sofa.jpg"
import GIUONG from "../../image/giuong.jpg"
import TU from "../../image/TU.jpg"
import delivery from "../../image/delivery.png"
import delivery2 from "../../image/delivery2.png"
import {useHistory} from  "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
export default function Home() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        };
        const setting1 = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows:true,
            autoplaySpeed:2000,
            draggable:true,
            // fade:true,
            focusOnSelect:true,
            speed:1200,
            slickGoTo:true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 660,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows:true,
                    // autoplaySpeed:2000,
                    // draggable:true,
                    // // fade:true,
                    // focusOnSelect:true,
                    // speed:1200,
                    // slickGoTo:true,
                  }
                }
              ]
          };
        const handleOrder=(e)=>{
            window.scroll(0,0);
            history.push('/shop')
        }
        const history=useHistory();
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__introduce">
                    <div className="home__introduce-detail">
                        <h2>T'shep Decor</h2>
                        <span className="newhome">---New Home New Life--- </span>
                        <div>T'shep l?? th????ng hi???u ph??? ki???n trang tr?? kh??ng gian s???ng ???????c th??nh l???p v??o th??ng 02/2021, kh???i ngu???n t??? mong mu???n c?? th??? cung c???p c??c lo???i s???n ph???m trang tr??, ph??? ki???n ?????p v?? ??a d???ng cho kh??ch h??ng t???i th??? tr?????ng Vi???t Nam. ?????n v???i T'shep, b???n ch???c ch???n s??? t??m th???y r???t nhi???u s??? l???a ch???n ????? trang ho??ng l???i kh??ng gian s???ng c???a ch??nh m??nh m?? kh??ng ph???i l??n t??n nhi???u v??? gi?? c???!</div>
                    </div>
                    <div className="home__introduce-shop" onClick={handleOrder}>
                        Mua s???m ngay
                    </div>
                </div>
            </div>
            <div className="home__how">
                <div className="home__section">
                    <div className="home__how-top">
                    <div className="section__title element2">?????t h??ng ngay!</div>
                    <div className="section__title2">
                        <div className="element1">NH?? TH??? N??O</div>
                    </div>
                </div>
                    <div className="home__how-bottom ">
                    <div className="how__step element3 step__1" >
                        <div className="how__step-wrapper">
                            <img src={image1} alt="" className="how__step-image"/>
                            <div className="how__step-index">
                                <div>01 STEP</div>
                            </div>
                            <div className="how__step-arrow">
                                <img src={arrow1} alt="" />
                            </div>
                            <span className="how__step-title">
                                Ch???n s???n ph???m b???n y??u th??ch
                            </span>
                        </div>
                    </div>
                    <div className="how__step element3 step__2">
                        <div className="how__step-wrapper">
                            <img src={image2} alt="" className="how__step-image"/>
                            <div className="how__step-index">
                                <div>02 STEP</div>
                            </div>
                            <div className="how__step-arrow">
                                <img src={arrow2} alt="" />
                            </div>
                            <span className="how__step-title">
                                Ch??ng t??i giao h??ng
                            </span>
                        </div>
                    </div>
                    <div className="how__step element3 step__3">
                        <div className="how__step-wrapper">
                            <img src={image3} alt="" className="how__step-image"/>
                            <div className="how__step-index">
                                <div>03 STEP</div>
                            </div>
                            <div className="how__step-arrow">
                                <img src={arrow3} alt="" />
                            </div>
                            <span className="how__step-title">
                                B???n nh???n h??ng v?? ki???m tra
                            </span>
                        </div>
                    </div>
                    <div className="how__step element3 step__4">
                        <div className="how__step-wrapper">
                            <img src={image4} alt="" className="how__step-image"/>
                            <div className="how__step-index">
                                <div>04 STEP</div>
                            </div>
                            <span className="how__step-title">
                                Thanh to??n b???ng ti???n m???t
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="home__about-wrapper">
                <Slider {...settings}>
                    <div className="home__about">
                            <div className="home__about-left">
                                <h2 className="about__title">C??u chuy???n v??? T'shep</h2>
                                <div className="about__detail">C??u chuy???n c???a T'shep b???t ?????u khi nh??m Founders c???a MOLI l?? nh???ng ng?????i tr??? v???i ni???m ??am m?? b???t t???n trong l??nh v???c trang tr?? nh?? c???a, kh??ng gian s???ng t??m g???p ???????c nhau. V???i nhu c???u mua s???m ????? trang tr??, ph???c v??? cho kh??ng gian s???ng ri??ng c???a m??nh, ch??ng m??nh ???? g???p kh?? nhi???u kh?? kh??n trong vi???c t??m ki???m nh???ng m??n ph??? ki???n, v???t d???ng xinh ?????p nh?? ??, m?? ??au ?????u h??n l?? gi?? th??nh kh??ng h??? r???. Ch??nh trong b???i c???nh ????, nh???ng ?? t?????ng v??? vi???c th??nh l???p T'shep ??? s??n ch??i ch??n ch??nh c???a nh???ng ng?????i y??u vi???c trang ho??ng kh??ng gian gi???ng ???????c nhen nh??m v?? sau bao nhi??u kh?? kh??n ????????a con tinh th???n??? c???a nh??m Founders ???????c ra ?????i v??o th??ng 02/2021.</div>
                            </div>
                            <div className="home__about-right">
                                <img src="https://static.wixstatic.com/media/6a4df5bb39154731a527872ad01bfcde.jpg/v1/fill/w_675,h_820,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/6a4df5bb39154731a527872ad01bfcde.webp" alt="" />
                            </div>
                    </div>
                    <div className="home__about">
                            <div className="home__about-right">
                                <img src="https://static.wixstatic.com/media/9fcaeab1c54349c9a532434f41e87814.jpg/v1/fill/w_460,h_580,al_c,q_80,usm_0.66_1.00_0.01/B%C3%A0n%20l%C3%A0m%20vi%E1%BB%87c.webp" alt="" />
                            </div>
                            <div className="home__about-left">
                                <h2 className="about__title">Ch??nh s??ch mua h??ng</h2>
                                <div className="about__detail">?????n v???i T'shep Decor, Qu?? kh??ch h??ng c?? th??? tho???i m??i mua s???m, l???a ch???n c??c s???n ph???m ??ng ?? nh???t cho ng??i nh?? c???a m??nh. T'shep cam k???t mang ?????n c??c s???n ?????c ????o, ??ang d???ng, ch???t l?????ng v?? gi?? th??nh t???i ??u nh???t cho Qu?? kh??ch h??ng!</div>
                            </div>
                    </div>
                    <div className="home__about">
                            <div className="home__about-left">
                                <h2 className="about__title">Ch??nh s??ch mua h??ng</h2>
                                <div className="about__detail">T'shep cam k???t t???t c??? c??c s???n ph???m T'shep Decor cung c???p cho kh??ch h??ng ????? l?? c??c s???n ph???m ch???t l?????ng, an to??n, ???????c thi???t k??? tinh t??? v?? ?????p m???t. MOLI b???o h??nh c??c s???n ph???m trong v??ng 12 th??ng, ?????i tr??? mi???n ph?? trong v??ng 3 ng??y ?????u s??? d???ng n???u s???n ph???m b??? l???i do nh?? s???n xu???t!</div>
                            </div>
                            <div className="home__about-right">
                                <img src="https://static.wixstatic.com/media/49cd4eef64654e4cb1b35319369bbd0a.jpg/v1/fill/w_460,h_600,al_c,q_80,usm_0.66_1.00_0.01/Personal%20Desk.webp" alt="" />
                            </div>
                        </div>
                </Slider>
            </div>
            <div className="home__categories">
                <FontAwesomeIcon icon="bed" className="icon1" ></FontAwesomeIcon>                
                <FontAwesomeIcon icon="chair" className="icon2"></FontAwesomeIcon>
                <FontAwesomeIcon icon="couch" className="icon3" ></FontAwesomeIcon>
                <div className="home__section">
                    <div className="home__categories-wrapper">
                        <div className="home__categories-title">
                            <div className="section__title element2">??? ????y ch??ng t??i c?? nh???ng g???</div>
                            <div className="section__title2">
                                <div className="element1">DANH M???C</div>
                            </div>
                        </div>
                        <div className="home__categories-itemwrap element3">
                            <Slider {...setting1}>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={BAN} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        B??N
                                    </div>
                                </div>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={TU} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        T???
                                    </div>
                                </div>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={GIUONG} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        GI?????NG 
                                    </div>
                                </div>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={SOFA} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        SOFA
                                    </div>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>

                </div>
            </div>
            <div className="home__delivery">
                <div className="home__section">
                    <div className="home__delivery-wrapper element3">
                        <div className="home__delivery-left">
                            <div className="delivery__title">
                                Giao h??ng
                            </div>
                            <div className="delivery__title2">
                                Giao h??ng <strong>????ng gi???, ????ng n??i, ????ng ng?????i</strong>
                            </div>
                            <div className="delivery__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aut? Possimus fuga quibusdam debitis aspernatur eligendi adipisci, mollitia ullam hic sed animi. Quae sequi ut fuga itaque qui cumque repellendus.
                            </div>
                            <div className="delivery__order">
                                <img src={delivery2} alt="" />
                                <div className="delivery__order-num">
                                    <h4>G???i ??i???n ?????t h??ng</h4>
                                    <div>08-47766839</div>
                                </div>
                                <div className="delivery__order-button" onClick={handleOrder}>
                                    ?????T H??NG
                                </div>
                            </div>
                        </div>
                        <div className="home__delivery-right">        
                            <img src={delivery} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__analysis">
                <div className="home__analysis-wrapper">
                    <div className="home__analysis-content">
                        <div className="home__analysis-content-text">
                            <div className="home__analysis-content-name">G?????ng</div>
                            <div className="home__analysis-content-price">$45</div>
                        </div>
                        <div className="home__analysis-button">
                            <div className="home__analysis-button-triangle">
                            </div>
                        </div>
                        <div className="first__circle circle"></div>
                        <div className="second__circle circle"></div>
                        <div className="third__circle circle"></div>
                    </div>
                </div>
                <div className="home__analysis-container">
                    <div className="home__analysis-container-background">
                        <div class="bed">
                            <span className="counter">1,234,567</span>
                            <span className="counter__name">Gi?????ng </span>
                        </div>
                        <div className="desk">
                            <span className="counter">74544</span>
                            <span className="coounter__name">Sofa</span>
                        </div>
                        <div className="sofa">
                            <span className="counter">12,112</span>
                            <span className="counter__name">T???</span>
                        </div>
                        <div className="shelf">
                            <span className="counter">23,723</span>
                            <span className="counter__name">B??n</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
