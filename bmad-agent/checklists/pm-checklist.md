# Danh Sách Kiểm Tra Yêu Cầu Product Manager (PM)

Danh sách kiểm tra này phục vụ như một khung tham chiếu toàn diện để đảm bảo Product Requirements Document (PRD) và định nghĩa Epic hoàn chỉnh, có cấu trúc tốt, và phù hợp phạm vi cho phát triển MVP. PM nên làm việc có hệ thống qua từng mục trong quá trình định nghĩa sản phẩm.

## 1. ĐỊNH NGHĨA VẤN ĐỀ & BỐI CẢNH

### 1.1 Tuyên Bố Vấn Đề

- [ ] Diễn đạt rõ ràng vấn đề được giải quyết
- [ ] Xác định ai trải nghiệm vấn đề
- [ ] Giải thích tại sao việc giải quyết vấn đề này quan trọng
- [ ] Định lượng tác động của vấn đề (nếu có thể)
- [ ] Phân biệt với các giải pháp hiện có

### 1.2 Mục Tiêu Kinh Doanh & Metrics Thành Công

- [ ] Mục tiêu kinh doanh cụ thể, có thể đo lường được định nghĩa
- [ ] Success metrics và KPIs rõ ràng được thiết lập
- [ ] Metrics được gắn với user và business value
- [ ] Baseline measurements được xác định (nếu áp dụng)
- [ ] Khung thời gian để đạt được mục tiêu được chỉ định

### 1.3 User Research & Insights

- [ ] Target user personas được định nghĩa rõ ràng
- [ ] User needs và pain points được ghi chép
- [ ] Kết quả user research được tóm tắt (nếu có sẵn)
- [ ] Phân tích cạnh tranh được bao gồm
- [ ] Bối cảnh thị trường được cung cấp

## 2. ĐỊNH NGHĨA PHẠM VI MVP

### 2.1 Chức Năng Cốt Lõi

- [ ] Tính năng thiết yếu được phân biệt rõ ràng với nice-to-haves
- [ ] Tính năng trực tiếp giải quyết problem statement đã định nghĩa
- [ ] Mỗi Epic liên kết trở lại với user needs cụ thể
- [ ] Features và Stories được mô tả từ góc nhìn người dùng
- [ ] Yêu cầu tối thiểu cho thành công được định nghĩa

### 2.2 Ranh Giới Phạm Vi

- [ ] Diễn đạt rõ ràng những gì NGOÀI phạm vi
- [ ] Phần future enhancements được bao gồm
- [ ] Lý do cho các quyết định phạm vi được ghi chép
- [ ] MVP giảm thiểu functionality trong khi tối đa hóa learning
- [ ] Phạm vi đã được xem xét và tinh chỉnh nhiều lần

### 2.3 Cách Tiếp Cận Validation MVP

- [ ] Phương pháp để test thành công MVP được định nghĩa
- [ ] Cơ chế phản hồi người dùng ban đầu được lên kế hoạch
- [ ] Tiêu chí để vượt qua MVP được chỉ định
- [ ] Learning goals cho MVP được diễn đạt
- [ ] Kỳ vọng timeline được đặt

## 3. YÊU CẦU TRẢI NGHIỆM NGƯỜI DÙNG

### 3.1 User Journeys & Flows

- [ ] Primary user flows được ghi chép
- [ ] Entry và exit points cho mỗi flow được xác định
- [ ] Decision points và branches được map
- [ ] Critical path được highlight
- [ ] Edge cases được xem xét

### 3.2 Yêu Cầu Khả Dụng

- [ ] Accessibility considerations được ghi chép
- [ ] Platform/device compatibility được chỉ định
- [ ] Performance expectations từ góc nhìn người dùng được định nghĩa
- [ ] Error handling và recovery approaches được nêu rõ
- [ ] User feedback mechanisms được xác định

### 3.3 Yêu Cầu UI

- [ ] Information architecture được nêu rõ
- [ ] Critical UI components được xác định
- [ ] Visual design guidelines được tham chiếu (nếu áp dụng)
- [ ] Content requirements được chỉ định
- [ ] High-level navigation structure được định nghĩa

## 4. YÊU CẦU CHỨC NĂNG

### 4.1 Tính Đầy Đủ Feature

- [ ] Tất cả required features cho MVP được ghi chép
- [ ] Features có mô tả rõ ràng, tập trung vào người dùng
- [ ] Priority/criticality của feature được chỉ ra
- [ ] Requirements có thể test và verify được
- [ ] Dependencies giữa các features được xác định

### 4.2 Chất Lượng Requirements

- [ ] Requirements cụ thể và không mơ hồ
- [ ] Requirements tập trung vào WHAT không phải HOW
- [ ] Requirements sử dụng terminology nhất quán
- [ ] Complex requirements được chia thành các phần đơn giản hơn
- [ ] Technical jargon được giảm thiểu hoặc giải thích

### 4.3 User Stories & Acceptance Criteria

- [ ] Stories tuân theo format nhất quán
- [ ] Acceptance criteria có thể test được
- [ ] Stories có kích thước phù hợp (không quá lớn)
- [ ] Stories độc lập khi có thể
- [ ] Stories bao gồm context cần thiết
- [ ] Local testability requirements (ví dụ: qua CLI) được định nghĩa trong ACs cho relevant backend/data stories

## 5. YÊU CẦU NON-FUNCTIONAL

### 5.1 Performance Requirements

- [ ] Kỳ vọng response time được định nghĩa
- [ ] Throughput/capacity requirements được chỉ định
- [ ] Scalability needs được ghi chép
- [ ] Resource utilization constraints được xác định
- [ ] Load handling expectations được đặt

### 5.2 Security & Compliance

- [ ] Data protection requirements được chỉ định
- [ ] Authentication/authorization needs được định nghĩa
- [ ] Compliance requirements được ghi chép
- [ ] Security testing requirements được nêu rõ
- [ ] Privacy considerations được giải quyết

### 5.3 Reliability & Resilience

- [ ] Availability requirements được định nghĩa
- [ ] Backup và recovery needs được ghi chép
- [ ] Fault tolerance expectations được đặt
- [ ] Error handling requirements được chỉ định
- [ ] Maintenance và support considerations được bao gồm

### 5.4 Technical Constraints

- [ ] Platform/technology constraints được ghi chép
- [ ] Integration requirements được nêu rõ
- [ ] Third-party service dependencies được xác định
- [ ] Infrastructure requirements được chỉ định
- [ ] Development environment needs được xác định

## 6. CẤU TRÚC EPIC & STORY

### 6.1 Định Nghĩa Epic

- [ ] Epics đại diện cho các đơn vị functionality gắn kết
- [ ] Epics tập trung vào user/business value delivery
- [ ] Epic goals được diễn đạt rõ ràng
- [ ] Epics có kích thước phù hợp cho incremental delivery
- [ ] Epic sequence và dependencies được xác định

### 6.2 Story Breakdown

- [ ] Stories được chia nhỏ đến kích thước phù hợp
- [ ] Stories có giá trị rõ ràng, độc lập
- [ ] Stories bao gồm acceptance criteria thích hợp
- [ ] Story dependencies và sequence được ghi chép
- [ ] Stories phù hợp với epic goals

### 6.3 Tính Đầy Đủ Epic Đầu Tiên

- [ ] Epic đầu tiên bao gồm tất cả setup steps cần thiết
- [ ] Project scaffolding và initialization được giải quyết
- [ ] Core infrastructure setup được bao gồm
- [ ] Development environment setup được giải quyết
- [ ] Local testability được thiết lập sớm

## 7. HƯỚNG DẪN KỸ THUẬT

### 7.1 Architecture Guidance

- [ ] Initial architecture direction được cung cấp
- [ ] Technical constraints được communicate rõ ràng
- [ ] Integration points được xác định
- [ ] Performance considerations được highlight
- [ ] Security requirements được diễn đạt
- [ ] Known areas của high complexity hoặc technical risk được flag để architectural deep-dive

### 7.2 Framework Quyết Định Kỹ Thuật

- [ ] Decision criteria cho technical choices được cung cấp
- [ ] Trade-offs được diễn đạt cho key decisions
- [ ] Rationale để chọn primary approach thay vì considered alternatives được ghi chép (cho key design/feature choices)
- [ ] Non-negotiable technical requirements được highlight
- [ ] Areas cần technical investigation được xác định
- [ ] Guidance về technical debt approach được cung cấp

### 7.3 Implementation Considerations

- [ ] Development approach guidance được cung cấp
- [ ] Testing requirements được diễn đạt
- [ ] Deployment expectations được đặt
- [ ] Monitoring needs được xác định
- [ ] Documentation requirements được chỉ định

## 8. YÊU CẦU CROSS-FUNCTIONAL

### 8.1 Data Requirements

- [ ] Data entities và relationships được xác định
- [ ] Data storage requirements được chỉ định
- [ ] Data quality requirements được định nghĩa
- [ ] Data retention policies được xác định
- [ ] Data migration needs được giải quyết (nếu áp dụng)
- [ ] Schema changes được lên kế hoạch iteratively, gắn với stories yêu cầu chúng

### 8.2 Integration Requirements

- [ ] External system integrations được xác định
- [ ] API requirements được ghi chép
- [ ] Authentication cho integrations được chỉ định
- [ ] Data exchange formats được định nghĩa
- [ ] Integration testing requirements được nêu rõ

### 8.3 Operational Requirements

- [ ] Deployment frequency expectations được đặt
- [ ] Environment requirements được định nghĩa
- [ ] Monitoring và alerting needs được xác định
- [ ] Support requirements được ghi chép
- [ ] Performance monitoring approach được chỉ định

## 9. RÕ RÀNG & COMMUNICATION

### 9.1 Chất Lượng Tài Liệu

- [ ] Documents sử dụng ngôn ngữ rõ ràng, nhất quán
- [ ] Documents có cấu trúc tốt và được tổ chức
- [ ] Technical terms được định nghĩa khi cần thiết
- [ ] Diagrams/visuals được bao gồm khi hữu ích
- [ ] Documentation được version thích hợp

### 9.2 Stakeholder Alignment

- [ ] Key stakeholders được xác định
- [ ] Stakeholder input được tích hợp
- [ ] Potential areas của disagreement được giải quyết
- [ ] Communication plan cho updates được thiết lập
- [ ] Approval process được định nghĩa

## TÓM TẮT VALIDATION PRD & EPIC

### Trạng Thái Categories

| Category | Status | Critical Issues |
|----------|--------|----------------|
| 1. Problem Definition & Context | PASS/FAIL/PARTIAL | |
| 2. MVP Scope Definition | PASS/FAIL/PARTIAL | |
| 3. User Experience Requirements | PASS/FAIL/PARTIAL | |
| 4. Functional Requirements | PASS/FAIL/PARTIAL | |
| 5. Non-Functional Requirements | PASS/FAIL/PARTIAL | |
| 6. Epic & Story Structure | PASS/FAIL/PARTIAL | |
| 7. Technical Guidance | PASS/FAIL/PARTIAL | |
| 8. Cross-Functional Requirements | PASS/FAIL/PARTIAL | |
| 9. Clarity & Communication | PASS/FAIL/PARTIAL | |

### Deficiencies Quan Trọng

- Liệt kê tất cả critical issues phải được giải quyết trước khi handoff cho Architect

### Recommendations

- Cung cấp recommendations cụ thể để giải quyết mỗi deficiency

### Quyết Định Cuối Cùng

- **READY FOR ARCHITECT**: PRD và epics toàn diện, cấu trúc đúng cách, và sẵn sàng cho architectural design.
- **NEEDS REFINEMENT**: Requirements documentation cần công việc bổ sung để giải quyết các deficiencies đã xác định.