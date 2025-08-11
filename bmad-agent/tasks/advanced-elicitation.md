# Nhiệm Vụ Advanced Elicitation

## Mục Đích

- Cung cấp các hành động phản hồi và brainstorming tùy chọn để nâng cao chất lượng nội dung
- Cho phép khám phá sâu hơn các ý tưởng thông qua các kỹ thuật elicitation có cấu trúc
- Hỗ trợ tinh chỉnh lặp đi lặp lại thông qua nhiều góc nhìn phân tích

## Hướng Dẫn Nhiệm Vụ

### 1. Yêu cầu review và Trình bày Action List

[[LLM: Yêu cầu người dùng xem xét {phần tài liệu đã soạn thảo, hoặc bối cảnh hoặc tài liệu mà protocol này được thực thi}. Trong CÙNG tin nhắn, thông báo họ có thể đề xuất bổ sung, loại bỏ, hoặc sửa đổi, HOẶC họ có thể chọn một hành động theo số từ 'Advanced Reflective, Elicitation & Brainstorming Actions'. Sau đó, trình bày CHỈ danh sách đánh số (0-9) của những hành động này như được định nghĩa trong tasks#advanced-elicitation. Kết thúc bằng việc nêu rằng việc chọn 9 sẽ tiến hành đến phần tiếp theo. Chờ lựa chọn của người dùng. Nếu một hành động elicitation (0-8) được chọn, thực thi nó và sau đó đưa ra lại lựa chọn combined review/elicitation này. Nếu tùy chọn 9 được chọn, hoặc nếu người dùng cung cấp phản hồi trực tiếp về yêu cầu, tiến hành phù hợp.]]

**Trình bày danh sách đánh số (0-9) với format chính xác này:**

```
**Advanced Reflective, Elicitation & Brainstorming Actions**
Chọn một hành động (0-9 - 9 để bỏ qua - HELP để giải thích các tùy chọn này):

0. Mở rộng hoặc Thu gọn cho Đối tượng
1. Giải thích Lý do (CoT Step-by-Step)
2. Phê bình và Tinh chỉnh
3. Phân tích Luồng Logic và Dependencies
4. Đánh giá Alignment với Mục tiêu Tổng thể
5. Xác định Rủi ro Tiềm ẩn và Vấn đề Không lường trước
6. Thách thức từ Góc nhìn Phê bình (Bản thân hoặc Persona khác)
7. Khám phá Các Lựa chọn thay thế Đa dạng (ToT-Inspired)
8. Hindsight is 20/20: Phản hồi 'Giá như...'
9. Tiến hành / Không có Hành động nào khác
```

### 2. Hướng Dẫn Xử lý

**KHÔNG hiển thị:**

- Text protocol đầy đủ với hướng dẫn `[[LLM: ...]]`
- Giải thích chi tiết của mỗi tùy chọn trừ khi đang thực thi hoặc người dùng hỏi, khi đưa ra định nghĩa bạn có thể sửa đổi để gắn kết với tính liên quan của nó
- Bất kỳ internal template markup nào

**Sau khi người dùng chọn từ danh sách:**

- Thực thi hành động đã chọn theo hướng dẫn protocol bên dưới
- Hỏi xem họ có muốn chọn hành động khác hay tiến hành với tùy chọn 9 khi hoàn thành
- Tiếp tục cho đến khi người dùng chọn tùy chọn 9 hoặc chỉ ra hoàn thành

## Định Nghĩa Actions

0. Mở rộng hoặc Thu gọn cho Đối tượng
   [[LLM: Hỏi người dùng xem họ muốn 'mở rộng' nội dung (thêm chi tiết, elaborated) hay 'thu gọn' nó (đơn giản hóa, làm rõ, làm ngắn gọn hơn). Cũng hỏi xem có đối tượng mục tiêu cụ thể nào họ có trong tâm trí không. Một khi đã làm rõ, thực hiện expansion hoặc contraction từ góc nhìn vai trò hiện tại của bạn, được tailored cho đối tượng đã chỉ định nếu được cung cấp.]]

1. Giải thích Lý do (CoT Step-by-Step)
   [[LLM: Giải thích quy trình thinking step-by-step, đặc trưng của vai trò của bạn, mà bạn đã sử dụng để đến với đề xuất hiện tại cho nội dung này.]]

2. Phê bình và Tinh chỉnh
   [[LLM: Từ góc nhìn vai trò hiện tại của bạn, xem xét output cuối cùng hoặc section hiện tại để tìm lỗi, inconsistencies, hoặc areas để cải thiện, và sau đó đề xuất một phiên bản refined phản ánh chuyên môn của bạn.]]

3. Phân tích Luồng Logic và Dependencies
   [[LLM: Từ góc nhìn vai trò của bạn, xem xét cấu trúc nội dung để logical progression, internal consistency, và bất kỳ relevant dependencies nào. Xác nhận xem các elements có được trình bày theo thứ tự hiệu quả không.]]

4. Đánh giá Alignment với Mục tiêu Tổng thể
   [[LLM: Evaluate mức độ nội dung hiện tại đóng góp vào các mục tiêu tổng thể đã nêu của tài liệu, diễn giải điều này từ góc nhìn vai trò cụ thể của bạn và xác định bất kỳ misalignments nào bạn nhận thấy.]]

5. Xác định Rủi ro Tiềm ẩn và Vấn đề Không lường trước
   [[LLM: Dựa trên chuyên môn vai trò của bạn, brainstorm các rủi ro tiềm ẩn, overlooked edge cases, hoặc unintended consequences liên quan đến nội dung hoặc đề xuất hiện tại.]]

6. Thách thức từ Góc nhìn Phê bình (Bản thân hoặc Persona khác)
   [[LLM: Áp dụng một góc nhìn phê bình về nội dung hiện tại. Nếu người dùng chỉ định một vai trò hoặc persona khác (ví dụ: 'as a customer', 'as [Another Persona Name]'), phê bình nội dung hoặc play devil's advocate từ viewpoint đã chỉ định đó. Nếu không có vai trò khác được chỉ định, play devil's advocate từ viewpoint persona hiện tại của bạn, arguing against đề xuất hoặc nội dung hiện tại và highlighting weaknesses hoặc counterarguments cụ thể cho concerns của bạn. Điều này cũng có thể randomly bao gồm YAGNI khi thích hợp, chẳng hạn như khi trimming scope của một MVP, góc nhìn có thể challenge sự cần thiết cho một cái gì đó để cắt MVP scope.]]

7. Khám phá Các Lựa chọn thay thế Đa dạng (ToT-Inspired)
   [[LLM: Từ góc nhìn vai trò của bạn, đầu tiên broadly brainstorm một range của diverse approaches hoặc solutions cho chủ đề hiện tại. Sau đó, từ exploration rộng hơn này, chọn và trình bày 2 alternatives khác biệt, detailing pros, cons, và potential implications bạn dự đoán cho mỗi cái.]]

8. Hindsight is 20/20: Phản hồi 'Giá như...'
   [[LLM: Trong persona hiện tại của bạn, tưởng tượng đó là một retrospective cho một dự án dựa trên nội dung hiện tại. 'Giá như chúng ta đã biết/làm X...' nào mà vai trò của bạn sẽ highlight một cách hài hước hoặc dramatic, cùng với imagined consequences?]]

9. Tiến hành / Không có Hành động nào khác
   [[LLM: Acknowledge lựa chọn của người dùng để finalize công việc hiện tại, accept output cuối cùng của AI như là, hoặc move on đến bước tiếp theo mà không chọn hành động khác từ danh sách này. Chuẩn bị để proceed accordingly.]]