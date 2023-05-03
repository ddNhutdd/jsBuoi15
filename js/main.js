/**
 * lấy phần tử html theo id
 * @id {string}: id của phần tử
 * @return {object}: phần tử sau khi tìm thấy
 */
function getElementById(id) {
    return document.getElementById(id);
}
/**
 * lấy giá trị number của phần tử input
 */
function getNumberById(id) {
    return Number(getElementById(id).value)
}
/**
 * check xem có một nào bị không điểm hay không
 * @mon1 {number}: điểm môn thứ nhất
 * @mon2 {number}: điểm môn thứ hai
 * @mon3 {number}: điểm môn thứ ba
 * @return {boolean}: true là thoả điều kiện, false là không thoả điều kiện
 */
function checkScore(mon1, mon2, mon3) {
    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
        return false;
    }
    return true;
}
/**
 * validator điểm chuẩn, điểm chuẩn lớn hơn 0 và nhỏ hơn 30
 * @score {number}: điểm chuẩn
 * result {boolean}: true là thoả điều kiện, false là không thoả điều kiện
 */
function validatorScore(score) {
    if (score >= 0 && score <= 30) {
        return true;
    }
    return false;
}
/**
 * hiển thị kết quả cho bài ba
 */
function showKetQuaBaiBa(params) {
    var hoTen = getElementById('b3HoTen').value;
    var outMessage = getElementById('b3Result');
    outMessage.innerHTML = hoTen + ' cần phải đóng thuế với số tiền: ' + params.toLocaleString();
}
/**
 * sự kiện click cho bài một
 */
getElementById('bai1Btn').onclick = function () {
    var printResult = getElementById('b1Result');
    var benchmark = getNumberById('b1DiemChuan');
    var validatorBenchmark = validatorScore(benchmark);
    if (!validatorBenchmark) {
        printResult.innerHTML = "điểm chuẩn quá bé hoặc quá lớn (0 <= điểm chuẩn <= 30)";
        return;
    }
    var score1 = getNumberById('b1Diem1');
    var score2 = getNumberById('b1Diem2');
    var score3 = getNumberById('b1Diem3');
    var paralysis = checkScore(score1, score2, score3);
    if (!paralysis) {
        printResult.innerHTML = "Rớt do bị điểm liệt";
        return;
    }
    var area = getNumberById('b1KhuVuc');
    var obj = getNumberById('b1DoiTuong');
    var totalScore = score1 + score2 + score3 + area + obj;
    if (totalScore >= benchmark) {
        printResult.innerHTML = "Đậu - tổng điểm: " + totalScore;
        return;
    }
    printResult.innerHTML = "Rớt - tổng điểm: " + totalScore;
}
/**
 * sự kiện click cho bài hai
 */
getElementById('bai2Btn').onclick = function () {
    var t1 = 0, v1 = 0, total = 0;
    var name = getElementById('b2HoTen').value;
    var kwh = getNumberById('b2Kwh');
    var printResult = getElementById('b2Result');
    if (kwh > 350) {
        v1 = kwh - 350;
        t1 = v1 * 1300;
        total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + t1;
        printResult.innerHTML = "khách hàng: " + name + " tổng tiền: " + total.toLocaleString();
        return;
    }
    if (kwh > 200) {
        v1 = kwh - 200;
        t1 = v1 * 1100;
        total = 50 * 500 + 50 * 650 + 100 * 850 + t1;
        printResult.innerHTML = "khách hàng: " + name + " tổng tiền: " + total.toLocaleString();
        return;
    }
    if (kwh > 100) {
        v1 = kwh - 100;
        t1 = v1 * 850;
        total = 50 * 500 + 50 * 650 + t1;
        printResult.innerHTML = "khách hàng: " + name + " tổng tiền: " + total.toLocaleString();
        return;
    }
    if (kwh > 50) {
        v1 = kwh - 50;
        t1 = v1 * 650;
        total = 50 * 500 + t1;
        printResult.innerHTML = "khách hàng: " + name + " tổng tiền: " + total.toLocaleString();
        return;
    }
    if (kwh > 0) {
        total = 50 * kwh;
        printResult.innerHTML = "khách hàng: " + name + " tổng tiền: " + total.toLocaleString();
        return;
    }
}
/**
 * sự kiện click cho bài ba
 */
getElementById('bai3Btn').onclick = function () {
    var thuNhapChiuThue = 0;
    var thuNhapHangNam = getNumberById('b3TongThuNhapNam');
    var soNguoiPhuThuoc = getNumberById('b3SoNguoiPhuThuoc');
    thuNhapChiuThue = thuNhapHangNam - 4000000 - soNguoiPhuThuoc * 1600000;
    if (thuNhapChiuThue <= 60000000) {
        var thueSuat = thuNhapChiuThue * 5 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
    if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        var thueSuat = thuNhapChiuThue * 10 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
    if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        var thueSuat = thuNhapChiuThue * 15 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
    if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        var thueSuat = thuNhapChiuThue * 20 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
    if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        var thueSuat = thuNhapChiuThue * 25 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
    if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        var thueSuat = thuNhapChiuThue * 30 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
    if (thuNhapChiuThue > 960000000) {
        var thueSuat = thuNhapChiuThue * 35 / 100;
        showKetQuaBaiBa(thueSuat);
        return;
    }
}
/**
* sự kiện onchage để hiện thị số kết nối cho bài 4
*/
getElementById('b4LoaiKhachHang').onchange = function () {
    var loaiKh = getElementById('b4LoaiKhachHang').value;
    var skn = getElementById('form-group-soKetNoi');
    if (loaiKh == '1') {
        skn.classList.remove("d-none");
    }
    else {
        skn.classList.add("d-none");
    }
}
/**
 * sự kiện click cho bài 4
 */
getElementById('bai4Btn').onclick = function () {
    var hienThiKetQua = getElementById('b4Result');
    var maKH = getElementById('b4MaKH').value;
    var loaiKh = getElementById('b4LoaiKhachHang').value;
    var soKenhCaoCap = getNumberById('b4SoKenhCaoCap');
    var soKetNoi = getNumberById('b4SoKetNoi');
    var tongPhiPhaiTra = 0;
    if (loaiKh == '0') {
        var phiXuLiHoaDon_nhaDan = 4.5;
        var phiDichVuCoBan_nhaDan = 20.5;
        var thueKenhCaoCap_nhaDan = 7.5;
        var tongPhiPhaiTra = phiXuLiHoaDon_nhaDan + phiDichVuCoBan_nhaDan + thueKenhCaoCap_nhaDan * soKenhCaoCap;
        hienThiKetQua.innerHTML = 'Tổng phí mà khách hàng ' + maKH + ' phải trả là ' + tongPhiPhaiTra + ' $';
    } else {
        var phiXuLiHoaDon_doanhNghiep = 15;
        var phiDichVuCoBan_10ketNoi_doanhNghiep = 75;
        var thueKenhCaoCap_doanhNghiep = 50;
        var phiDichVuCoBan_hon10ketNoi_doanhNghiep = 5;
        if (soKetNoi <= 10) {
            tongPhiPhaiTra = phiXuLiHoaDon_doanhNghiep + soKetNoi * phiDichVuCoBan_10ketNoi_doanhNghiep + thueKenhCaoCap_doanhNghiep * soKenhCaoCap;
            hienThiKetQua.innerHTML = 'Tổng phí mà khách hàng ' + maKH + ' phải trả là ' + tongPhiPhaiTra + ' $';
            return;
        } else {
            var soKetNoiHonMuoi = soKetNoi - 10;
            tongPhiPhaiTra = phiXuLiHoaDon_doanhNghiep + 10 * phiDichVuCoBan_10ketNoi_doanhNghiep + soKetNoiHonMuoi * phiDichVuCoBan_hon10ketNoi_doanhNghiep + thueKenhCaoCap_doanhNghiep * soKenhCaoCap;
            hienThiKetQua.innerHTML = 'Tổng phí mà khách hàng ' + maKH + ' phải trả là ' + tongPhiPhaiTra + ' $';
            return;
        }
    }
}