class quiz {
    question
    options
    answer
    reference

    constructor(question, options, answer, reference) {
        this.question = question
        this.options = options
        this.answer = answer
        this.reference = reference
    }
}

let quizList = []
quizList.push(new quiz('Đâu là tỉnh có dân số đông nhất Nhật Bản?', ['Tokyo', 'Osaka', 'Saitama', 'Kyoto'], '0', 'https://vi.wikipedia.org/wiki/Tokyo'))
quizList.push(new quiz('Núi Phú Sĩ cao bao nhiêu?', ['3776m', '3767m', '3677m', '3676m'], '0', 'https://vi.wikipedia.org/wiki/Ph%C3%BA_S%C4%A9'))
quizList.push(new quiz('Ai là người được in hình trên tờ 10.000 yên?', ['Fukuzawa Yukichi', 'Natsume Soseki', 'Higuchi Ichio', 'Noguchi Hideo'], '0', 'https://vi.wikipedia.org/wiki/Fukuzawa_Yukichi'))
quizList.push(new quiz('Loài hoa nào là biểu tượng của hoàng gia Nhật Bản?', ['Hoa cúc', 'Hoa cẩm tú cầu', 'Hoa tử đằng', 'Hoa diên vỹ', 'Hoa anh đào'], '0', 'https://kilala.vn/van-hoa-nhat/hoa-anh-dao-va-hoa-cuc-dau-moi-la-quoc-hoa-cua-nhat-ban.html'))
quizList.push(new quiz('Theo quy định mới từ năm 2022 ở Nhật, bao nhiêu tuổi được tính là trưởng thành?', ['20', '18', '16'], '1', 'https://vov.vn/the-gioi/nhat-ban-bat-dau-ha-do-tuoi-truong-thanh-post934406.vov'))
quizList.push(new quiz('Người Nhật thờ cúng và đón tổ tiên về nhà vào dịp lễ nào trong năm?', ['Lễ Obon', 'Năm mới', 'Tuần lễ vàng', 'Lễ tiết phân'], '0', 'https://vi.wikipedia.org/wiki/L%E1%BB%85_h%E1%BB%99i_Bon'))
quizList.push(new quiz('Môn bắn cung của Nhật Bản được gọi là gì?', ['Kyudo', 'Jyudo', 'Shodo', 'Kendo'], '0', 'https://kilala.vn/van-hoa-nhat/cung-dao-kyudo-tinh-hoa-trong-vo-thuat-nhat-ban.html'))
quizList.push(new quiz('Onigiri là tên gọi của món ăn gì?', ['Cơm nắm', 'Chả cá viên', 'Bánh rán', 'Đậu tương lên men'], '0', 'https://vi.wikipedia.org/wiki/Onigiri'))
quizList.push(new quiz('Ở Nhật, con số nào được coi là con số chết chóc?', ['4', '13', '6', '8'], '0', 'https://www.newwindows.edu.vn/blog/tiengnhat/so-4-con-so-cam-ky-tai-nhat-ban-93'))
quizList.push(new quiz('Trường học ở Nhật thường khai giảng vào tháng mấy?', ['Tháng 4', 'Tháng 1', 'Tháng 9', 'Tháng 11'], '0', 'http://gotojapan.vn/vi-sao-nam-hoc-moi-o-nhat-ban-bat-dau-vao-thang-4/'))
quizList.push(new quiz('Tỉnh nào sau đây giáp với Tokyo?', ['Kanagawa', 'Hokkaido', 'Hiroshima', 'Shizuoka'], '0', 'https://vi.wikipedia.org/wiki/Kanagawa'))
quizList.push(new quiz('Thủ tướng hiện tại của Nhật Bản tên là gì?', ['Kishida Fumio', 'Abe Shinzo', 'Suga Yoshihide', 'Noda Yoshihiko'], '0', 'https://vi.wikipedia.org/wiki/Kishida_Fumio'))
quizList.push(new quiz('Ở Nhật người ta lái xe ở đường bên nào?', ['Bên trái', 'Bên phải'], '0', 'https://vi.wikipedia.org/wiki/Giao_th%C3%B4ng_Nh%E1%BA%ADt_B%E1%BA%A3n'))
quizList.push(new quiz('Tác giả của bộ truyện "Thám tử lừng danh Conan" là ai?', ['Aoyama Gosho', 'Tezuka Osamu', 'CLAMP', 'Fujiko F.Fujio'], '0', 'https://vi.wikipedia.org/wiki/Th%C3%A1m_t%E1%BB%AD_l%E1%BB%ABng_danh_Conan'))
quizList.push(new quiz('Đâu là bộ phim có doanh thu cao nhất mọi thời đại ở Nhật?', ['Thanh gươm diệt quỷ: Chuyến tàu vô tận', 'Vùng đất linh hồn', 'Tên cậu là gì?'], '0', 'https://vi.wikipedia.org/wiki/Thanh_g%C6%B0%C6%A1m_di%E1%BB%87t_qu%E1%BB%B7:_Chuy%E1%BA%BFn_t%C3%A0u_v%C3%B4_t%E1%BA%ADn'))
quizList.push(new quiz('Tỉnh nào có diện tích nhỏ nhất Nhật Bản?', ['Kagawa', 'Tokyo', 'Saga', 'Kanagawa'], '0', 'https://vi.wikipedia.org/wiki/Kagawa'))
quizList.push(new quiz('Tỉnh nào có diện tích lớn nhất Nhật Bản?', ['Hokkaido', 'Niigata', 'Okinawa', 'Nagano'], '0', 'https://vi.wikipedia.org/wiki/Hokkaid%C5%8D'))