# Danh Sách Kiểm Tra Story Draft

Scrum Master nên sử dụng danh sách kiểm tra này để validation rằng mỗi story chứa đủ context cho một developer agent để implement thành công, trong khi giả định dev agent có khả năng hợp lý để tự tìm hiểu.

## 1. RÕ RÀNG MỤC TIÊU & BỐI CẢNH

- [ ] Story goal/purpose được nêu rõ ràng
- [ ] Mối quan hệ với epic goals rõ ràng
- [ ] Cách story phù hợp với overall system flow được giải thích
- [ ] Dependencies trên previous stories được xác định (nếu áp dụng)
- [ ] Business context và value rõ ràng

## 2. HƯỚNG DẪN TECHNICAL IMPLEMENTATION

- [ ] Key files để create/modify được xác định (không nhất thiết phải exhaustive)
- [ ] Technologies cụ thể cần cho story này được đề cập
- [ ] Critical APIs hoặc interfaces được mô tả đầy đủ
- [ ] Necessary data models hoặc structures được tham chiếu
- [ ] Required environment variables được liệt kê (nếu áp dụng)
- [ ] Bất kỳ exceptions nào đối với standard coding patterns được ghi chú

## 3. HIỆU QUẢ THAM CHIẾU

- [ ] References đến external documents trỏ đến specific relevant sections
- [ ] Critical information từ previous stories được tóm tắt (không chỉ referenced)
- [ ] Context được cung cấp cho lý do tại sao references liên quan
- [ ] References sử dụng format nhất quán (ví dụ: `docs/filename.md#section`)

## 4. ĐÁNH GIÁ SELF-CONTAINMENT

- [ ] Core information cần thiết được bao gồm (không quá phụ thuộc vào external docs)
- [ ] Implicit assumptions được làm rõ
- [ ] Domain-specific terms hoặc concepts được giải thích
- [ ] Edge cases hoặc error scenarios được addressed

## 5. HƯỚNG DẪN TESTING

- [ ] Required testing approach được nêu rõ
- [ ] Key test scenarios được xác định
- [ ] Success criteria được định nghĩa
- [ ] Special testing considerations được ghi chú (nếu áp dụng)

## KẾT QUẢ VALIDATION

| Category                             | Status            | Issues |
| ------------------------------------ | ----------------- | ------ |
| 1. Goal & Context Clarity            | PASS/FAIL/PARTIAL |        |
| 2. Technical Implementation Guidance | PASS/FAIL/PARTIAL |        |
| 3. Reference Effectiveness           | PASS/FAIL/PARTIAL |        |
| 4. Self-Containment Assessment       | PASS/FAIL/PARTIAL |        |
| 5. Testing Guidance                  | PASS/FAIL/PARTIAL |        |

**Đánh Giá Cuối Cùng:**

- READY: Story cung cấp đủ context cho implementation
- NEEDS REVISION: Story cần updates (xem issues)
- BLOCKED: External information required (chỉ định thông tin gì cần thiết)