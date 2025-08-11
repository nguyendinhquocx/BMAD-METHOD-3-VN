# Nhiệm Vụ Core Dump

## Mục Đích

Tạo file ghi chép memory ngắn gọn (`.ai/core-dump-n.md`) để capture context thiết yếu của session agent hiện tại, cho phép tiếp tục công việc một cách liền mạch trong các session agent tương lai. Nhiệm vụ này đảm bảo context persistent qua các cuộc trò chuyện agent trong khi duy trì minimal token usage để context loading hiệu quả.

## Inputs cho Nhiệm Vụ này

- Lịch sử cuộc trò chuyện session hiện tại và accomplishments
- Files đã tạo, sửa đổi, hoặc xóa trong session
- Key decisions được đưa ra và procedures được tuân theo
- Trạng thái dự án hiện tại và các bước logic tiếp theo
- User requests và agent responses đã định hình session

## Hướng Dẫn Thực Thi Nhiệm Vụ

### 0. Kiểm Tra Core Dump Hiện Có

Trước khi tiến hành, kiểm tra xem `.ai/core-dump.md` đã tồn tại chưa:

- Nếu file tồn tại, hỏi user: "Core dump file tồn tại. Tôi nên: 1. Overwrite, 2. Update, 3. Append hay 4. Create new?"
- **Overwrite**: Thay thế toàn bộ file bằng nội dung mới
- **Update**: Merge thông tin session mới với nội dung hiện có, cập nhật các sections liên quan
- **Append**: Thêm session mới như một entry riêng biệt trong khi bảo tồn nội dung hiện có
- **Create New**: Tạo file mới, append -# tiếp theo có thể đến file, chẳng hạn như core-dump-3.md nếu 1 và 2 đã tồn tại.
- Nếu file không tồn tại, tiến hành tạo `core-dump-1.md`

### 1. Phân Tích Context Session

- Review toàn bộ cuộc trò chuyện để xác định key accomplishments
- Ghi chú bất kỳ specific tasks, procedures, hoặc workflows nào đã được thực thi
- Xác định important decisions được đưa ra hoặc problems được giải quyết
- Capture working style và preferences của user được quan sát trong session

### 2. Ghi Chép Những Gì Đã Hoàn Thành

- **Primary Actions**: Liệt kê main tasks đã hoàn thành một cách ngắn gọn
- **Story Progress**: Cho story work, sử dụng format "Tasks Complete: 1-6, 8. Next Task Pending: 7, 9"
- **Problem Solving**: Ghi chép bất kỳ challenges nào gặp phải và cách chúng được giải quyết
- **User Communications**: Tóm tắt key user requests, preferences, và discussion points

### 3. Ghi Chép File System Changes (Format Ngắn Gọn)

- **Files Created**: `filename.ext` (brief purpose/size)
- **Files Modified**: `filename.ext` (what changed)
- **Files Deleted**: `filename.ext` (why removed)
- Tập trung vào essential details, tránh verbose descriptions

### 4. Capture Current Project State

- **Project Progress**: Nơi dự án đứng sau session này
- **Current Issues**: Bất kỳ blockers hoặc problems nào cần resolution
- **Next Logical Steps**: Những hành động tự nhiên tiếp theo cần thực hiện

### 5. Tạo/Cập Nhật Core Dump File

Dựa trên lựa chọn của user từ bước 0, xử lý file tương ứng:

### 6. Tối Ưu cho Minimal Context

- Giữ descriptions ngắn gọn nhưng informative
- Sử dụng abbreviated formats khi có thể (file sizes, task numbers)
- Tập trung vào actionable information thay vì detailed explanations
- Tránh thông tin redundant có thể tìm thấy trong project documentation
- Ưu tiên thông tin sẽ bị mất mà không có recording này
- Đảm bảo file có thể được scan và hiểu nhanh chóng

### 7. Validate Completeness

- Verify tất cả significant session activities được captured
- Đảm bảo future agent có thể hiểu current state
- Kiểm tra file changes được ghi chép chính xác
- Xác nhận next steps rõ ràng và actionable
- Verify user communication style và preferences được ghi chú