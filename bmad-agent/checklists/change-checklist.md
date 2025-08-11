# Danh Sách Kiểm Tra Điều Hướng Thay Đổi

**Mục đích:** Hướng dẫn một cách có hệ thống cho Agent được chọn và người dùng qua việc phân tích và lập kế hoạch cần thiết khi một thay đổi quan trọng (xoay hướng, vấn đề kỹ thuật, yêu cầu bị thiếu, câu chuyện thất bại) được xác định trong quy trình BMAD.

**Hướng dẫn:** Xem xét từng mục với người dùng. Đánh dấu `[x]` cho hoàn thành/xác nhận, `[N/A]` nếu không áp dụng, hoặc thêm ghi chú cho các điểm thảo luận.

---

## 1. Hiểu Yếu Tố Kích Hoạt & Bối Cảnh

- [ ] **Xác Định Câu Chuyện Kích Hoạt:** Xác định rõ ràng câu chuyện (hoặc các câu chuyện) đã tiết lộ vấn đề.
- [ ] **Định Nghĩa Vấn Đề:** Diễn đạt vấn đề cốt lõi một cách chính xác.
  - [ ] Đây có phải là giới hạn/bế tắc kỹ thuật?
  - [ ] Đây có phải là yêu cầu mới được phát hiện?
  - [ ] Đây có phải là hiểu lầm cơ bản về các yêu cầu hiện có?
  - [ ] Đây có phải là sự xoay hướng cần thiết dựa trên phản hồi hoặc thông tin mới?
  - [ ] Đây có phải là câu chuyện thất bại/bỏ dở cần một cách tiếp cận mới?
- [ ] **Đánh Giá Tác Động Ban Đầu:** Mô tả những hậu quả ngay lập tức được quan sát (ví dụ: tiến độ bị chặn, chức năng không chính xác, công nghệ không khả thi).
- [ ] **Thu Thập Bằng Chứng:** Ghi chú bất kỳ logs cụ thể, thông báo lỗi, phản hồi của người dùng, hoặc phân tích nào hỗ trợ định nghĩa vấn đề.

## 2. Đánh Giá Tác Động Epic

- [ ] **Phân Tích Epic Hiện Tại:**
  - [ ] Epic hiện tại chứa câu chuyện kích hoạt có thể được hoàn thành không?
  - [ ] Epic hiện tại có cần sửa đổi không (thay đổi câu chuyện, bổ sung, loại bỏ)?
  - [ ] Epic hiện tại có nên được bỏ dở hoặc định nghĩa lại cơ bản không?
- [ ] **Phân Tích Epic Tương Lai:**
  - [ ] Xem xét tất cả các epic đã lên kế hoạch còn lại.
  - [ ] Vấn đề có yêu cầu thay đổi các câu chuyện đã lên kế hoạch trong epic tương lai không?
  - [ ] Vấn đề có làm vô hiệu hóa bất kỳ epic tương lai nào không?
  - [ ] Vấn đề có cần tạo ra các epic hoàn toàn mới không?
  - [ ] Thứ tự/ưu tiên của epic tương lai có nên được thay đổi không?
- [ ] **Tóm Tắt Tác Động Epic:** Ghi chép ngắn gọn tác động tổng thể lên cấu trúc và luồng epic của dự án.

## 3. Phân Tích Xung Đột & Tác Động Artifact

- [ ] **Xem Xét PRD:**
  - [ ] Vấn đề có xung đột với các mục tiêu cốt lõi hoặc yêu cầu được nêu trong PRD không?
  - [ ] PRD có cần làm rõ hoặc cập nhật dựa trên hiểu biết mới không?
- [ ] **Xem Xét Tài Liệu Kiến Trúc:**
  - [ ] Vấn đề có xung đột với kiến trúc được ghi chép không (các thành phần, mẫu, lựa chọn công nghệ)?
  - [ ] Các thành phần/sơ đồ/phần cụ thể có bị tác động không?
  - [ ] Danh sách công nghệ có cần cập nhật không?
  - [ ] Các mô hình dữ liệu hoặc schemas có cần sửa đổi không?
  - [ ] Các tích hợp API bên ngoài có bị ảnh hưởng không?
- [ ] **Xem Xét Spec Frontend (nếu áp dụng):**
  - [ ] Vấn đề có xung đột với kiến trúc FE, lựa chọn thư viện thành phần, hoặc thiết kế UI/UX không?
  - [ ] Các thành phần FE cụ thể hoặc luồng người dùng có bị tác động không?
- [ ] **Xem Xét Các Artifact Khác (nếu áp dụng):**
  - [ ] Xem xét tác động lên scripts triển khai, IaC, thiết lập giám sát, v.v.
- [ ] **Tóm Tắt Tác Động Artifact:** Liệt kê tất cả artifacts cần cập nhật và bản chất của các thay đổi cần thiết.

## 4. Đánh Giá Con Đường Tiến Lên

- [ ] **Lựa Chọn 1: Điều Chỉnh Trực Tiếp / Tích Hợp:**
  - [ ] Vấn đề có thể được giải quyết bằng cách sửa đổi/thêm các câu chuyện tương lai trong kế hoạch hiện có không?
  - [ ] Định nghĩa phạm vi và bản chất của những điều chỉnh này.
  - [ ] Đánh giá tính khả thi, nỗ lực, và rủi ro của con đường này.
- [ ] **Lựa Chọn 2: Rollback Tiềm Năng:**
  - [ ] Việc hoàn nguyên các câu chuyện đã hoàn thành có đơn giản hóa đáng kể việc giải quyết vấn đề không?
  - [ ] Xác định các câu chuyện/commits cụ thể cần xem xét cho rollback.
  - [ ] Đánh giá nỗ lực cần thiết cho rollback.
  - [ ] Đánh giá tác động của rollback (công việc bị mất, hệ quả dữ liệu).
  - [ ] So sánh lợi ích/chi phí ròng so với Điều Chỉnh Trực Tiếp.
- [ ] **Lựa Chọn 3: Xem Xét PRD MVP & Tái Phạm Vi Tiềm Năng:**
  - [ ] PRD MVP ban đầu vẫn có thể đạt được với vấn đề và ràng buộc hiện tại không?
  - [ ] Phạm vi MVP có cần giảm không (loại bỏ tính năng/epics)?
  - [ ] Các mục tiêu MVP cốt lõi có cần sửa đổi không?
  - [ ] Có cần các cách tiếp cận thay thế để đáp ứng ý định MVP ban đầu không?
  - [ ] **Trường Hợp Cực Đoan:** Vấn đề có cần một kế hoạch lại cơ bản hoặc có thể một PRD V2 mới (được xử lý bởi PM) không?
- [ ] **Chọn Con Đường Được Đề Xuất:** Dựa trên đánh giá, đồng ý về con đường khả thi nhất để tiến lên.

## 5. Các Thành Phần Đề Xuất Thay Đổi Sprint

(Đảm bảo tất cả các điểm đã thống nhất từ các phần trước được ghi lại trong đề xuất)

- [ ] **Tóm Tắt Vấn Đề Đã Xác Định:** Tuyên bố vấn đề rõ ràng, ngắn gọn.
- [ ] **Tóm Tắt Tác Động Epic:** Cách các epic bị ảnh hưởng.
- [ ] **Nhu Cầu Điều Chỉnh Artifact:** Danh sách các tài liệu cần thay đổi.
- [ ] **Con Đường Tiến Lên Được Đề Xuất:** Giải pháp được chọn với lý do.
- [ ] **Tác Động PRD MVP:** Thay đổi phạm vi/mục tiêu (nếu có).
- [ ] **Kế Hoạch Hành Động Cấp Cao:** Các bước tiếp theo cho câu chuyện/cập nhật.
- [ ] **Kế Hoạch Bàn Giao Agent:** Xác định các vai trò cần thiết (PM, Arch, Design Arch, PO).

## 6. Xem Xét Cuối Cùng & Bàn Giao

- [ ] **Xem Xét Danh Sách Kiểm Tra:** Xác nhận tất cả các mục liên quan đã được thảo luận.
- [ ] **Xem Xét Đề Xuất Thay Đổi Sprint:** Đảm bảo nó phản ánh chính xác cuộc thảo luận và quyết định.
- [ ] **Phê Duyệt Của Người Dùng:** Có được sự phê duyệt rõ ràng của người dùng cho đề xuất.
- [ ] **Xác Nhận Các Bước Tiếp Theo:** Nhắc lại kế hoạch bàn giao và các hành động tiếp theo được thực hiện bởi các agents cụ thể.

---