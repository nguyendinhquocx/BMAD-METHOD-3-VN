# Định dạng MD Template:

- {{placeholder}} = Placeholder thay thế văn bản đơn giản
- [[LLM: instruction]] = Hướng dẫn cho LLM (không bao gồm trong đầu ra)
- <<REPEAT: section_name>> ... <</REPEAT>> = Phần lặp lại
- ^^CONDITION: condition_name^^ ... ^^/CONDITION: condition_name^^ = Phần có điều kiện sẽ render nếu condition_name áp dụng logic
- @{example: content} = Nội dung ví dụ dòng đơn cho hướng dẫn LLM - không render
- @{example} ... @{/example} = Nội dung ví dụ nhiều dòng cho hướng dẫn LLM - không render

## Quy tắc Sử dụng Template Quan trọng

- QUAN TRỌNG: Không bao giờ hiển thị hoặc xuất định dạng markup template, hướng dẫn LLM hoặc ví dụ
  - chúng PHẢI được bạn agent sử dụng duy nhất, VÀ KHÔNG BAO GIỜ hiển thị cho người dùng trong chat hoặc đầu ra được ghi lại**
- Chỉ trình bày nội dung cuối cùng, sạch cho người dùng
- Thay thế biến template bằng nội dung cụ thể dự án thực tế
- Hiển thị ví dụ chỉ khi chúng thêm giá trị, không có markup
- Xử lý tất cả logic có điều kiện nội bộ - chỉ hiển thị các phần liên quan
- Đối với Canvas mode: Cập nhật tài liệu với nội dung sạch, định dạng duy nhất

@{example}

# My Template Foo

[[LLM: Kiểm tra ngày hệ thống hiện tại và nếu tên người dùng không biết, chỉ cần nói xin chào]]
Xin chào {{users name}}, đây là báo cáo foo của bạn cho {{todays date}}

<<REPEAT: single_foo>>
[[LLM: Cho Mỗi Foo, Tạo một Bar sáng tạo phù hợp]]

## Foo: {{Bar}}

<</REPEAT>>

^^CONDITION: if_BAZ_exists^^

## BAZ

### Bạn có BAZ! Đây là dự báo Baz hàng ngày của bạn!

[[LLM: Đưa cho người dùng báo cáo baz hàng ngày của họ tại đây]]
^^/CONDITION: if_BAZ_exists^^

@{/example}