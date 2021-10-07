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
                        <div>T'shep là thương hiệu phụ kiện trang trí không gian sống được thành lập vào tháng 02/2021, khởi nguồn từ mong muốn có thể cung cấp các loại sản phẩm trang trí, phụ kiện đẹp và đa dạng cho khách hàng tại thị trường Việt Nam. Đến với T'shep, bạn chắc chắn sẽ tìm thấy rất nhiều sự lựa chọn để trang hoàng lại không gian sống của chính mình mà không phải lăn tăn nhiều về giá cả!</div>
                    </div>
                    <div className="home__introduce-shop" onClick={handleOrder}>
                        Mua sắm ngay
                    </div>
                </div>
            </div>
            <div className="home__how">
                <div className="home__section">
                    <div className="home__how-top">
                    <div className="section__title element2">Đặt hàng ngay!</div>
                    <div className="section__title2">
                        <div className="element1">NHƯ THẾ NÀO</div>
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
                                Chọn sản phẩm bạn yêu thích
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
                                Chúng tôi giao hàng
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
                                Bạn nhận hàng và kiểm tra
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
                                Thanh toán bằng tiền mặt
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
                                <h2 className="about__title">Câu chuyện về T'shep</h2>
                                <div className="about__detail">Câu chuyện của T'shep bắt đầu khi nhóm Founders của MOLI là những người trẻ với niềm đam mê bất tận trong lĩnh vực trang trí nhà cửa, không gian sống tìm gặp được nhau. Với nhu cầu mua sắm để trang trí, phục vụ cho không gian sống riêng của mình, chúng mình đã gặp khá nhiều khó khăn trong việc tìm kiếm những món phụ kiện, vật dụng xinh đẹp như ý, mà đau đầu hơn là giá thành không hề rẻ. Chính trong bối cảnh đó, những ý tưởng về việc thành lập T'shep – sân chơi chân chính của những người yêu việc trang hoàng không gian giống được nhen nhóm và sau bao nhiêu khó khăn “đứa con tinh thần” của nhóm Founders được ra đời vào tháng 02/2021.</div>
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
                                <h2 className="about__title">Chính sách mua hàng</h2>
                                <div className="about__detail">Đến với T'shep Decor, Quý khách hàng có thể thoải mái mua sắm, lựa chọn các sản phẩm ưng ý nhất cho ngôi nhà của mình. T'shep cam kết mang đến các sản độc đáo, đang dạng, chất lượng và giá thành tối ưu nhất cho Quý khách hàng!</div>
                            </div>
                    </div>
                    <div className="home__about">
                            <div className="home__about-left">
                                <h2 className="about__title">Chính sách mua hàng</h2>
                                <div className="about__detail">T'shep cam kết tất cả các sản phẩm T'shep Decor cung cấp cho khách hàng đề là các sản phẩm chất lượng, an toàn, được thiết kế tinh tế và đẹp mắt. MOLI bảo hành các sản phẩm trong vòng 12 tháng, đổi trả miễn phí trong vòng 3 ngày đầu sử dụng nếu sản phẩm bị lỗi do nhà sản xuất!</div>
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
                            <div className="section__title element2">Ở đây chúng tôi có những gì?</div>
                            <div className="section__title2">
                                <div className="element1">DANH MỤC</div>
                            </div>
                        </div>
                        <div className="home__categories-itemwrap element3">
                            <Slider {...setting1}>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={BAN} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        BÀN
                                    </div>
                                </div>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={TU} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        TỦ
                                    </div>
                                </div>
                                <div className="home__categories-item">
                                    <div className="categories__item-image">
                                        <img src={GIUONG} alt="" />
                                    </div>
                                    <div className="categories__name">
                                        GIƯỜNG 
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
                                Giao hàng
                            </div>
                            <div className="delivery__title2">
                                Giao hàng <strong>đúng giờ, đúng nơi, đúng người</strong>
                            </div>
                            <div className="delivery__detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aut? Possimus fuga quibusdam debitis aspernatur eligendi adipisci, mollitia ullam hic sed animi. Quae sequi ut fuga itaque qui cumque repellendus.
                            </div>
                            <div className="delivery__order">
                                <img src={delivery2} alt="" />
                                <div className="delivery__order-num">
                                    <h4>Gọi điện đặt hàng</h4>
                                    <div>08-47766839</div>
                                </div>
                                <div className="delivery__order-button" onClick={handleOrder}>
                                    ĐẶT HÀNG
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
                            <div className="home__analysis-content-name">Gường</div>
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
                            <span className="counter__name">Giường </span>
                        </div>
                        <div className="desk">
                            <span className="counter">74544</span>
                            <span className="coounter__name">Sofa</span>
                        </div>
                        <div className="sofa">
                            <span className="counter">12,112</span>
                            <span className="counter__name">Tủ</span>
                        </div>
                        <div className="shelf">
                            <span className="counter">23,723</span>
                            <span className="counter__name">Bàn</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
