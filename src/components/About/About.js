import React from 'react'
import './About.css'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
const images=[
    'https://file.hstatic.net/200000065946/file/noi-that-moho-logo-ve-moho-an-toan-suc-khoe_c41d405d91a641819003d5e789813790.png',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1592408089839-6941c3c0f89b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
]
export default function About() {
    return (
        <div className="about">
            <div className="about__container">
                <h2 className="about__title">
                    CÂU CHUYỆN VỀ T'SHEP
                </h2>
                <div className="about__story">
                    <h3>
                        Lịch sử cửa hàng
                    </h3>
                    <div>
                        Mỗi một chi tiết, mỗi một sản phẩm và hình ảnh đều là những dấu ấn, là câu chuyện mà T'SHEP muốn gửi gắm đến mỗi một khách hàng. T'SHEP hi vọng trong từng bộ sưu tập, từng sản phẩm và dịch vụ của mình sẽ trở thành một phần trong tổ ấm của mỗi gia đình Việt, như một thông điệp "mang yêu thương gửi trọn trong từng không gian sống". Hướng đến sự tiện ích, hiện đại tối giản và thân thiện môi trường là khát khao mà T'SHEP không ngừng theo đuổi.
                    </div>
                    <div>
                        Chính những khát khao lan toả biến nhà thực sự là "tổ ấm" vào mỗi một gia đình Việt, 03/2020 Thương hiệu nội thất Việt T'SHEP được định hình và ra đời. Là một phần của Savimex với 35 kinh nghiệm trong sản xuất và xuất khẩu nội thất sang các nước như: Mỹ, Nhật, Hàn,... T'SHEP tiếp tục kế thừa và phát huy nhằm mang đến cho người Việt những sản phẩm nội thất made in Vietnam, an toàn sức khoẻ mà giá cả lại vô cùng hợp lý. 
                    </div>
                
                </div>
                <div className="about__value">
                    <h3>Giá trị và sự khác biệt</h3>
                    <div>
                    Với mong muốn phát triển thương hiệu Việt bằng nội lực, T'SHEP đã chú trọng vào thiết kế và sản xuất nội thất trong nước. Danh mục sản phẩm của T'SHEP thường xuyên được đổi mới và cập nhật, liên tục cung cấp cho khách hàng các dòng sản phẩm theo xu hướng mới nhất. Do chính người Việt thiết kế và sản xuất, nội thất thương hiệu T'SHEP luôn phù hợp với cuộc sống Á Đông, đem đến sự tiện nghi hoàn hảo trong mọi không gian sống.
                    </div>
                    <div>
                    Sự khác biệt của T'SHEP chính là sáng tạo nội thất thành phong cách riêng, phù hợp với nhu cầu khách hàng. Không chỉ là sản phẩm nội thất đơn thuần, mà còn là không gian sống theo phong cách riêng với cách bày trí hài hòa từ đồ nội thất kết hợp với đồ trang trí. Giúp khách hàng cảm nhận được một không gian sống thực sự, cảm thấy thoải mái để tận hưởng cuộc sống.
                    </div>
                    <img src="https://file.hstatic.net/200000065946/file/noi-that-moho-logo-ve-moho-than-thien-moi-truong_8fe694d6bd8441a7ad2b5eb0e9c19e84.png" alt="" />
                    <h4>THÂN THIỆN VỚI MÔI TRƯỜNG</h4>
                    <div>T'SHEP với xuất phát điểm muốn lan toả thông điệp "Sống xanh", mỗi một sản phẩm nội thất mà T'SHEP mang đến cho khách hàng đều là bắt nguồn từ nguyên liệu gỗ đạt chuẩn FSC - khai thác từ nguồn rừng có trồng lại. T'SHEP hiểu rằng, là một doanh nghiệp nói chung, và là doanh nghiệp trong lĩnh vực nội thất nói riêng, cần có trách nhiệm hơn với cộng đồng và môi trường xanh của chúng ta. Giá trị tốt đẹp này không chỉ riêng T'SHEP mà mỗi một khách hàng sử dụng sản phẩm T'SHEP đều đóng góp và nhân rộng lên giá trị bền vững này. </div>
                    <h4>AN TOÀN SỨC KHOẺ</h4>
                    <div>Đặt yếu tố sức khoẻ khách hàng lên hàng đầu, các sản phẩm nội thất gỗ công nghiệp tại T'SHEP đều đạt chứng nhận chứng nhận giảm phát thải Formaldehyde – CARB P2, đảm bảo gỗ không độc hại. Tại hầu hết các nước trên thế giới đều qui định nghiêm ngặt về tiêu chuẩn an toàn CARB P2 đối với các sản phẩm gỗ công nghiệp, T'SHEP tin rằng việc tiên phong về tiêu chuẩn sức khoẻ người dùng sẽ là điểm mạnh mang thương hiệu nội thất của người Việt vươn tầm quốc tế trong tương lai. </div>
                    <h4>CHẤT LƯỢNG QUỐC TẾ</h4>
                    <div>Sản xuất trực tiếp tại nhà máy Savimex rộng 10ha với công nghệ hiện đại cùng đội ngũ thợ tay nghề cao.</div>
                    <img src="https://file.hstatic.net/200000065946/file/noi-that-moho-tieu-chuan-carb-p2-an-toan-suc-khoe_0402ef39b57f42a1a60ebd43088ed2d2_2048x2048.png" alt="" />
                    <img src="https://file.hstatic.net/200000065946/file/noi-that-moho-cac-chung-nhan-quoc-te-1_205145b36d274eefbc7ac0f07367f21e_2048x2048.png" alt="" />
                </div>
                <div className="about__service">
                    <h3>Dich vụ chúng tôi mang lại </h3>
                    <div>
                    T'SHEP tự hào sở hữu đội ngũ tư vấn thiết kế và kỹ sư chuyên nghiệp, có kiến thức sâu rộng trong lĩnh vực đồ gỗ nội thất. Tập thể nhân viên tại T'SHEP cam kết nỗ lực tư vấn và trợ giúp khách hàng lựa chọn sản phẩm ưng ý nhất. Dịch vụ tư vấn thiết kế của T'SHEP sẽ giúp khách hàng kiến tạo một không gian sống như ý thông qua sự phối hợp điêu luyện giữa các sản phẩm nội thất và đồ trang trí.
                    </div>
                    <img src="https://file.hstatic.net/200000065946/file/noi-that-moho-san-xuat-noi-that-chuan-quoc-te_00ec1ed63f9c44958d3ba0058b422642_2048x2048.png" alt="" />
                </div>
                <Zoom scale={0.4} >
                {
                    images.map((each, index) => <img key={index}  src={each} alt="" />)
                }
                </Zoom>
            </div>
        </div>
    )
}
