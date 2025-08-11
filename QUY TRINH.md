# BMAD Method: Thứ Tự Agent & Lệnh Gọi Tắt

## 1. Thứ Tự Chuẩn Các Agent Trong Quy Trình BMAD

1. **Analyst (Mary)**  
   - Brainstorm ý tưởng, nghiên cứu, tạo Project Brief.  
   - Lệnh: `/analyst`
2. **Product Manager / PM (John)**  
   - Tạo PRD dựa trên brief, xác định Epics, Stories.
   - Lệnh: `/pm`
3. **Design Architect (Jane)** *(nếu có UI)*  
   - Đặc tả UI/UX, tạo Frontend Architecture, UX Spec, AI UI Prompt.
   - Lệnh: `/design-architect` hoặc `/da`
4. **Architect (Fred)**  
   - Thiết kế kiến trúc hệ thống, lựa chọn stack, module, patterns.
   - Lệnh: `/architect`
5. **Design Architect (Jane)** *(lặp lại nếu cần UI / FE)*  
   - Tạo Frontend Architecture chi tiết, hoặc AI UI Prompt.
   - Lệnh: `/design-architect` hoặc `/da`
6. **Product Owner / PO (Sarah)**  
   - Kiểm tra tài liệu, sequencing epics/stories, chạy checklist tổng hợp, doc sharding.
   - Lệnh: `/po`
7. **Scrum Master / SM (Bob)**  
   - Soạn Stories cụ thể, hỗ trợ quy trình Scrum, quản lý backlog.
   - Lệnh: `/sm`
8. **Developer Agent(s)**  
   - Thực hiện từng story, phát triển code.
   - (Config theo IDE, không có lệnh chuyển nhanh)

> **Lưu ý:** Có thể quay lại bất kỳ agent nào nếu cần điều chỉnh/prune/pivot.

---

## 2. Lệnh Gọi Agent & Lệnh Thao Tác

### Chuyển Agent

- `/agent-list`       → Xem toàn bộ danh sách agent, role, tasks.
- `/analyst`         → Chọn Analyst (Mary).
- `/pm`            → Chọn Product Manager (John).
- `/design-architect` hoặc `/da` → Chọn Design Architect (Jane).
- `/architect`        → Chọn Architect (Fred).
- `/po`            → Chọn Product Owner (Sarah).
- `/sm`            → Chọn Scrum Master (Bob).
- `/exit`           → Thoát khỏi agent hiện tại, quay về BMAD Orchestrator.

### Lệnh Thao Tác Chung

- `/help`           → Xem hướng dẫn và danh sách lệnh.
- `/tasks`          → Xem tasks của agent đang active.
- `/doc-out`        → Xuất toàn bộ tài liệu đang soạn/thảo luận.
- `/yolo`           → Chuyển sang chế độ tạo tài liệu/story nhanh (không hỏi từng bước).
- `/party-mode`      → Chuyển sang group chat (mọi agent cùng tham gia).
- `/load-{agent}`     → Chuyển ngay sang agent mới (bỏ xác nhận).
- `/bmad {query}`     → Hỏi Orchestrator BMAD trực tiếp.
- `/{agent} {query}`    → Hỏi agent khác mà vẫn giữ persona hiện tại (không khuyến khích khi làm tài liệu).

---

## 3. Ghi Chú Bổ Sung

- Tất cả output/tài liệu nên lưu trong thư mục `docs/` của project.
- Trong quá trình làm việc, ưu tiên dùng agent chuyên biệt cho từng bước (theo flow trên), tránh nhảy bước để đảm bảo chất lượng.
- Khi bắt đầu mới, nên dùng analyst hoặc pm trước, đừng vào dev agent ngay.

---

## 4. Bảng Tổng Hợp Nhanh

| Thứ tự | Agent             | Lệnh Gọi    | Vai trò chính                                |
|--------|-------------------|-------------|----------------------------------------------|
| 1      | Analyst           | /analyst    | Brainstorm, research, project brief          |
| 2      | Product Manager   | /pm         | Tạo PRD, xác lập epics, stories              |
| 3      | Design Architect  | /da         | UX/UI Spec, Frontend Architecture, AI Prompt |
| 4      | Architect         | /architect  | Kiến trúc hệ thống, patterns, stack          |
| 5      | Product Owner     | /po         | Checklist, validate, sharding, backlog       |
| 6      | Scrum Master      | /sm         | Soạn story, quản lý scrum                    |
| 7      | Developer Agent   | (IDE config)| Code từng story (không có lệnh nhanh)        |

---

**Tham khảo thêm:**  
- Danh sách đầy đủ tasks, checklist và template: xem file cấu hình agent hoặc dùng `/tasks` khi đã chọn agent.
