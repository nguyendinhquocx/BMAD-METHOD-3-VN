# Task Xác thực Checklist

Task này cung cấp hướng dẫn để xác thực tài liệu với checklist. Agent nên tuân theo những hướng dẫn này để đảm bảo xác thực kỹ lưỡng và có hệ thống các tài liệu.

## Bối cảnh

BMAD Method sử dụng các checklist khác nhau để đảm bảo chất lượng và tính hoàn chỉnh của các artifact khác nhau. Mapping giữa checklist và tài liệu yêu cầu của chúng được định nghĩa trong `checklist-mappings`. Điều này cho phép dễ dàng thêm checklist mới mà không cần sửa đổi task này.

## Hướng dẫn

1. **Đánh giá Ban đầu**

   - Kiểm tra `checklist-mappings` cho checklist có sẵn
   - Nếu người dùng cung cấp tên checklist:
     - Tìm kiếm khớp chính xác trong checklist-mappings.yml
     - Nếu không khớp chính xác, thử fuzzy matching (ví dụ: "architecture checklist" -> "architect-checklist")
     - Nếu tìm thấy nhiều khớp, yêu cầu người dùng làm rõ
     - Khi khớp, sử dụng đường dẫn checklist_file từ mapping
   - Nếu không chỉ định checklist:
     - Hỏi người dùng họ muốn sử dụng checklist nào
     - Trình bày các tùy chọn có sẵn từ checklist-mappings.yml
   - Xác nhận nếu họ muốn làm việc qua checklist:
     - Từng phần (chế độ tương tác)
     - Tất cả một lần (chế độ YOLO)

2. **Vị trí Tài liệu**

   - Tra cứu tài liệu yêu cầu và vị trí mặc định trong `checklist-mappings`
   - Đối với mỗi tài liệu yêu cầu:
     - Kiểm tra tất cả vị trí mặc định được chỉ định trong mapping
     - Nếu không tìm thấy, hỏi người dùng về vị trí tài liệu
   - Xác minh tất cả tài liệu yêu cầu đều có thể truy cập được

3. **Xử lý Checklist**

   Nếu ở chế độ tương tác:

   - Làm việc qua từng phần của checklist từng phần một
   - Đối với mỗi phần:
     - Xem xét tất cả mục trong phần
     - Kiểm tra mỗi mục với tài liệu liên quan
     - Trình bày phát hiện cho phần đó
     - Nhận xác nhận từ người dùng trước khi tiến hành phần tiếp theo

   Nếu ở chế độ YOLO:

   - Xử lý tất cả phần cùng lúc
   - Tạo báo cáo toàn diện về tất cả phát hiện
   - Trình bày phân tích hoàn chỉnh cho người dùng

4. **Cách tiếp cận Xác thực**

   Đối với mỗi mục checklist:

   - Đọc và hiểu yêu cầu
   - Tìm kiếm bằng chứng trong tài liệu thỏa mãn yêu cầu
   - Xem xét cả đề cập rõ ràng và bao phủ ngụ ý
   - Đánh dấu mục như:
     - ✅ PASS: Yêu cầu được đáp ứng rõ ràng
     - ❌ FAIL: Yêu cầu không được đáp ứng hoặc bao phủ không đủ
     - ⚠️ PARTIAL: Một số khía cạnh được bao phủ nhưng cần cải thiện
     - N/A: Không áp dụng cho trường hợp này

5. **Phân tích Phần**

   Đối với mỗi phần:

   - Tính tỷ lệ pass
   - Xác định chủ đề chung trong các mục thất bại
   - Cung cấp khuyến nghị cụ thể để cải thiện
   - Trong chế độ tương tác, thảo luận phát hiện với người dùng
   - Ghi lại bất kỳ quyết định hoặc giải thích nào của người dùng

6. **Báo cáo Cuối cùng**

   Chuẩn bị tóm tắt bao gồm:

   - Trạng thái hoàn thành checklist tổng thể
   - Tỷ lệ pass theo phần
   - Danh sách mục thất bại với bối cảnh
   - Khuyến nghị cụ thể để cải thiện
   - Bất kỳ phần hoặc mục nào được đánh dấu N/A với lý lẽ

## Cân nhắc Đặc biệt

1. **Architecture Checklist**

   - Tập trung vào tính hoàn chỉnh và rõ ràng kỹ thuật
   - Xác minh tất cả component hệ thống được giải quyết
   - Kiểm tra cân nhắc về bảo mật và khả năng mở rộng
   - Đảm bảo các khía cạnh deployment và vận hành được bao phủ

2. **Frontend Architecture Checklist**

   - Xác thực đặc tả UI/UX
   - Kiểm tra cấu trúc và tổ chức component
   - Xác minh cách tiếp cận quản lý state
   - Đảm bảo cân nhắc thiết kế responsive

3. **PM Checklist**

   - Tập trung vào tính rõ ràng của yêu cầu sản phẩm
   - Xác minh user story và tiêu chí chấp nhận
   - Kiểm tra bao phủ nghiên cứu thị trường và người dùng
   - Đảm bảo tính khả thi kỹ thuật được giải quyết

4. **Story Checklist**
   - Xác minh tiêu chí chấp nhận rõ ràng
   - Kiểm tra bối cảnh kỹ thuật và dependency
   - Đảm bảo tính khả thi test được giải quyết
   - Xác thực giá trị người dùng được nêu rõ ràng

## Tiêu chí Thành công

Xác thực checklist được hoàn thành khi:

1. Tất cả mục có thể áp dụng đã được đánh giá
2. Trạng thái pass/fail rõ ràng cho mỗi mục
3. Khuyến nghị cụ thể được cung cấp cho các mục thất bại
4. Người dùng đã xem xét và thừa nhận phát hiện
5. Báo cáo cuối cùng ghi lại tất cả quyết định và lý lẽ

## Ví dụ Tương tác

Agent: "Hãy để tôi kiểm tra các checklist có sẵn... Theo checklist-mappings.yml, chúng ta có một số tùy chọn. Bạn muốn sử dụng cái nào?"

User: "The architect checklist"

Agent: "Bạn có muốn làm việc qua từng phần (tương tác) hay nhận phân tích hoàn chỉnh tất cả cùng lúc (chế độ YOLO)?"

User: "Interactive please"

Agent: "Theo mapping, tôi cần kiểm tra architecture.md. Vị trí mặc định là docs/architecture.md. Tôi có nên tìm ở đó không?"

[Tiếp tục tương tác dựa trên phản hồi người dùng...]