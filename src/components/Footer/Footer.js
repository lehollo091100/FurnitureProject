import React from 'react'
import './Footer.css'
import funiture from './2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__introduce">
                    <h2 className="footer__introduce-title">
                        NỘI THẤT T'SHEP
                    </h2>
                    <div className="footer__introduce-description">
                        T'shep là thương hiệu phụ kiện trang trí không gian sống được thành lập vào tháng 02/2021
                    </div>
                    <img src={funiture} className="footer__introduce-image" alt="" />
                </div>
                <div className="footer__policy">
                    <h2 className="footer__policy-title">
                        <FontAwesomeIcon icon="file-contract"></FontAwesomeIcon>
                        CHÍNH SÁCH
                    </h2>
                    <span>
                        <a href="/" className="footer__underline">Chính Sách Bán Hàng</a>
                    </span>
                    <span>
                        <a href="/" className="footer__underline">Chính Sách Giao Hàng và Lắp Đặt</a>
                    </span>
                    <span>
                        <a href="/" className="footer__underline">Chính Sách Đổi Trả</a>
                    </span>
                    <span>
                        <a href="/" className="footer__underline">Chính Sách Bảo Hành và Bảo Trì</a>
                    </span>
                    <h2 className="footer__policy-title ">
                        <FontAwesomeIcon icon="truck"></FontAwesomeIcon>
                        DỊCH VỤ
                    </h2>
                    <span>
                        <a href="/" className="footer__underline">
                            Giao Hàng Miễn Phí
                        </a>
                    </span>
                    <span>
                        <a href="/" className="footer__underline">Ministore Toàn Quốc</a>
                    </span>
                    <span>
                        <a href="/" className="footer__underline">Flash Sale Mỗi Tuần</a>
                    </span>
                </div>
                <div className="footer__contact">
                    <h2 className="footer__contact-title">
                        <FontAwesomeIcon icon="address-book"></FontAwesomeIcon>
                        THÔNG TIN LIÊN HỆ
                    </h2>
                    <div>
                        <span>
                            <FontAwesomeIcon icon="map-marked"></FontAwesomeIcon>
                        </span>
                        <span className="footer__contact-index"> Showroom:
                        </span>
                        <span> 38 Hoa Bằng, phường Tân Quý, quận Tân Phú</span>
                    </div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon="phone"></FontAwesomeIcon>
                        </span>
                        <span className="footer__contact-index"> Phone:
                        </span>
                        <span> 0877668390</span>
                    </div>
                    <h2 className="footer__contact-title footer__fanpage">
                        FANPAGE
                    </h2>
                    <div className="footer__contact-logo">
                        <ul className="logo__list">
                            <li className="logo__list-item facebook">
                                <i class="fab fa-facebook" ></i>
                            </li>
                            <li className="logo__list-item instagram">
                                <i class="fab fa-instagram"></i>
                            </li>
                            <li className="logo__list-item github">
                                <i class="fab fa-github"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
