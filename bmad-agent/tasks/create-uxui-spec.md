# Task Tạo Đặc tả UI/UX

## Mục đích

Hợp tác với người dùng để định nghĩa và ghi lại các đặc tả Giao diện Người dùng (UI) và Trải nghiệm Người dùng (UX) cho dự án. Điều này bao gồm hiểu nhu cầu người dùng, định nghĩa kiến trúc thông tin, nêu user flow và đảm bảo nền tảng vững chắc cho thiết kế trực quan và phát triển frontend. Đầu ra sẽ điền vào tài liệu mới có tên `front-end-spec.md` theo template `front-end-spec-tmpl`.

## Đầu vào

- Project Brief (`project-brief.md` hoặc tương đương)
- Product Requirements Document (PRD) (`prd.md` hoặc tương đương)
- Phản hồi hoặc nghiên cứu người dùng (nếu có)

## Hoạt động Chính & Hướng dẫn

### 1. Hiểu Yêu cầu Cốt lõi

- Xem xét Project Brief và PRD để nắm bắt mục tiêu dự án, đối tượng mục tiêu, tính năng chính và bất kỳ ràng buộc hiện có nào.
- Đặt câu hỏi làm rõ về nhu cầu người dùng, điểm đau và kết quả mong muốn.

### 2. Định nghĩa UX Goal & Nguyên tắc Tổng thể (cho `front-end-spec-tmpl`)

- Hợp tác thiết lập và ghi lại:
  - Target User Persona (gợi chi tiết hoặc xác nhận những cái hiện có).
  - Key Usability Goal.
  - Core Design Principle cho dự án.

### 3. Phát triển Information Architecture (IA) (cho `front-end-spec-tmpl`)

- Làm việc với người dùng để tạo Site Map hoặc Screen Inventory.
- Định nghĩa Navigation Structure chính và phụ.
- Sử dụng sơ đồ Mermaid hoặc danh sách phù hợp với template.

### 4. Nêu Key User Flow (cho `front-end-spec-tmpl`)

- Xác định task người dùng quan trọng từ PRD/brief.
- Đối với mỗi flow:
  - Định nghĩa mục tiêu của người dùng.
  - Hợp tác map ra các bước (sử dụng sơ đồ Mermaid hoặc mô tả từng bước chi tiết).
  - Xem xét edge case và error state.

### 5. Thảo luận Wireframe & Mockup Strategy (cho `front-end-spec-tmpl`)

- Làm rõ nơi thiết kế trực quan chi tiết sẽ được tạo (ví dụ: Figma, Sketch) và đảm bảo `front-end-spec-tmpl` liên kết đúng cách với những file thiết kế chính này.
- Nếu wireframe low-fidelity cần thiết trước, đề xuất giúp conceptualize layout cho các màn hình chính.

### 6. Định nghĩa Component Library / Design System Approach (cho `front-end-spec-tmpl`)

- Thảo luận nếu design system hiện có sẽ được sử dụng hoặc nếu một hệ thống mới cần được phát triển.
- Nếu mới, xác định một số component nền tảng để bắt đầu (ví dụ: Button, Input, Card) và state/behavior chính của chúng ở mức high-level. Đặc tả kỹ thuật chi tiết sẽ ở trong `front-end-architecture`.

### 7. Thiết lập Branding & Style Guide Cơ bản (cho `front-end-spec-tmpl`)

- Nếu style guide tồn tại, liên kết với nó.
- Nếu không, hợp tác định nghĩa placeholder cho: Color Palette, Typography, Iconography, Spacing.

### 8. Chỉ định Yêu cầu Accessibility (AX) (cho `front-end-spec-tmpl`)

- Xác định mức tuân thủ mục tiêu (ví dụ: WCAG 2.1 AA).
- Liệt kê bất kỳ yêu cầu AX cụ thể nào đã biết.

### 9. Định nghĩa Responsiveness Strategy (cho `front-end-spec-tmpl`)

- Thảo luận và ghi lại Breakpoint chính.
- Mô tả Adaptation Strategy chung.

### 10. Output Generation & Iterative Refinement (Được hướng dẫn bởi `front-end-spec-tmpl`)

- **a. Draft Section:** Điền dần một phần logic của file `front-end-spec-tmpl` dựa trên thảo luận của bạn.
- **b. Present & Incorporate Initial Feedback:** Trình bày phần đã soạn thảo cho người dùng để xem xét. Thảo luận, giải thích và kết hợp phản hồi và sửa đổi ban đầu của họ trực tiếp.
- **c. [Cung cấp Tùy chọn Advanced Self-Refinement & Elicitation](#cung-cấp-tùy-chọn-advanced-self-refinement--elicitation)**

## Cung cấp Tùy chọn Advanced Self-Refinement & Elicitation

(Phần này được gọi khi cần trước điều này)

Trình bày người dùng danh sách sau của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Giải thích rằng đây là các bước tùy chọn để giúp đảm bảo chất lượng, khám phá lựa chọn thay thế và làm sâu hiểu biết về phần hiện tại trước khi hoàn thiện nó và chuyển tiếp. Người dùng có thể chọn hành động bằng số hoặc chọn bỏ qua điều này và tiến hành hoàn thiện phần.

"Để đảm bảo chất lượng của phần hiện tại: **[Tên Phần Cụ thể]** và đảm bảo tính mạnh mẽ của nó, khám phá lựa chọn thay thế và xem xét tất cả góc độ, tôi có thể thực hiện bất kỳ hành động nào sau đây. Vui lòng chọn một số (8 để hoàn thiện và tiến hành):

**Advanced Reflective, Elicitation & Brainstorming Actions Tôi Có thể Thực hiện:**

{Hướng dẫn cho AI Agent: Hiển thị tiêu đề của mỗi mục được đánh số bên dưới. Nếu người dùng hỏi tùy chọn cụ thể có nghĩa gì, cung cấp giải thích ngắn gọn về hành động bạn sẽ thực hiện, rút ra từ mô tả chi tiết được điều chỉnh cho bối cảnh.}

1.  **Critical Self-Review & User Goal Alignment**
2.  **Generate & Evaluate Alternative Design Solutions**
3.  **User Journey & Interaction Stress Test (Conceptual)**
4.  **Deep Dive into Design Assumptions & Constraints**
5.  **Usability & Accessibility Audit Review & Probing Questions**
6.  **Collaborative Ideation & UI Feature Brainstorming**
7.  **Elicit 'Unforeseen User Needs' & Future Interaction Questions**
8.  **Finalize this Section and Proceed.**

Sau khi tôi thực hiện hành động đã chọn, chúng ta có thể thảo luận kết quả và quyết định về bất kỳ sửa đổi thêm nào cho phần này."

LẶP LẠI bằng Hỏi người dùng liệu họ có muốn thực hiện Advanced Reflective, Elicitation & Brainstorming Action khác ĐƠNVỊ cho đến khi người dùng chỉ ra đã đến lúc tiến hành phần tiếp theo (hoặc chọn #8)