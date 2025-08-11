# Task Tạo PRD

## Mục đích

- Chuyển đổi đầu vào thành tài liệu định nghĩa sản phẩm cốt lõi tuân thủ template PRD
- Định nghĩa phạm vi MVP rõ ràng tập trung vào chức năng thiết yếu
- Cung cấp nền tảng cho Architect và Design Architect để giúp tạo ra các artifact kỹ thuật, điều này sau đó sẽ soạn thảo chi tiết thêm cho các kỹ sư cấp thấp hoặc dev ai agent đơn giản.

## Hướng dẫn

### 1. Xem xét Đầu vào

Xem xét tất cả đầu vào được cung cấp bao gồm project brief, tài liệu nghiên cứu, prd template và ý tưởng của người dùng để hướng dẫn việc tạo PRD.

### 2. Xác định Chế độ Tương tác

Xác nhận với người dùng phong cách tương tác ưa thích của họ:

- **Incremental:** Làm việc qua các phần từng phần một thông qua tin nhắn chat như được định nghĩa trong template.

- **YOLO Mode:** Soạn thảo PRD hoàn chỉnh đưa ra các giả định khi cần thiết. Trình bày toàn bộ tài liệu một lần, ghi chú phần nào yêu cầu giả định.

### 3. Thực hiện Template

- Sử dụng template `prd-tmpl` (hoặc template thay thế do người dùng chỉ định)
- Tuân theo tất cả hướng dẫn LLM được nhúng trong template
- Template chứa hướng dẫn và ví dụ cụ thể cho từng phần

### 4. Ghi chú Xử lý Template

- **Incremental Mode**: Trình bày từng phần để xem xét trước khi tiến hành
- **YOLO Mode**: Tạo tất cả phần, sau đó xem xét với người dùng

Xử lý tất cả phần tử template theo quy ước `templates#template-format`.

**QUAN TRỌNG: Không bao giờ hiển thị hoặc xuất định dạng markup template, hướng dẫn LLM hoặc ví dụ - chúng PHẢI được bạn agent sử dụng duy nhất, VÀ KHÔNG BAO GIỜ hiển thị cho người dùng trong chat hoặc đầu ra tài liệu**

**Hướng dẫn Trình bày Nội dung:**

- Chỉ trình bày nội dung cuối cùng, sạch cho người dùng
- Thay thế biến template bằng nội dung cụ thể dự án thực tế
- Xử lý tất cả logic có điều kiện nội bộ - chỉ hiển thị các phần liên quan
- Đối với Canvas mode: Cập nhật tài liệu với nội dung sạch, định dạng duy nhất

### 7. Chuẩn bị Handoff

Dựa trên nội dung PRD, chuẩn bị prompt bước tiếp theo thích hợp:

**Nếu UI Component Tồn tại:**

1. Thêm prompt Design Architect trong phần template được chỉ định
2. Khuyến nghị: Người dùng tương tác Design Architect trước để có UI/UX Specification
3. Sau đó tiến hành đến Architect với PRD được làm phong phú

**Nếu Không có UI Component:**

- Thêm prompt Architect trong phần template được chỉ định
- Khuyến nghị tiến hành trực tiếp đến Architect

### 8. Xác thực với Checklist

- Chạy `pm-checklist` với PRD đã hoàn thành
- Ghi lại trạng thái hoàn thành cho mỗi mục checklist
- Trình bày tóm tắt theo phần, giải quyết bất kỳ thiếu sót nào
- Tạo báo cáo checklist cuối cùng với phát hiện và giải quyết

### 9. Trình bày Cuối cùng

**Hướng dẫn Chung:**

- Trình bày tài liệu hoàn chỉnh trong định dạng sạch, đầy đủ
- KHÔNG cắt ngắn thông tin không thay đổi
- Bắt đầu trực tiếp với nội dung (không cần văn bản giới thiệu)
- Đảm bảo tất cả phần template được điền đúng cách
- **KHÔNG BAO GIỜ hiển thị markup template, hướng dẫn hoặc chỉ thị xử lý cho người dùng**

## Tài nguyên Chính

- **Default Template:** `templates#prd-tmpl`
- **Validation:** `checklists#pm-checklist`
- **User Preferences:** `data#technical-preferences`
- **Elicitation Protocol:** `tasks#advanced-elicitation`

## Ghi chú Quan trọng

- Task này là template-agnostic - người dùng có thể chỉ định template tùy chỉnh
- Tất cả hướng dẫn chi tiết được nhúng trong template, không phải file task này
- Tập trung vào orchestration và workflow
- **Template markup chỉ dành cho xử lý AI - người dùng không bao giờ nên thấy chỉ báo đầu ra từ templates#template-format**