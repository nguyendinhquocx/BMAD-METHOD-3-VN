# Task Tạo Story Tiếp theo

## Mục đích

Xác định story logic tiếp theo dựa trên tiến độ dự án và định nghĩa epic, sau đó chuẩn bị một file story toàn diện, tự chứa và có thể thực hiện được sử dụng `Story Template`. Task này đảm bảo story được làm phong phú với tất cả bối cảnh kỹ thuật, yêu cầu và tiêu chí chấp nhận cần thiết, khiến nó sẵn sàng cho triển khai hiệu quả bởi Developer Agent với nhu cầu tìm hiểu thêm tối thiểu.

## Đầu vào cho Task này

- Quyền truy cập vào repository tài liệu của dự án, cụ thể:
  - `docs/index.md` (sau đây gọi là "Index Doc")
  - Tất cả file Epic (ví dụ: `docs/epic-{n}.md` - sau đây gọi là "Epic Files")
  - File story hiện có trong `docs/stories/`
  - PRD chính (sau đây gọi là "PRD Doc")
  - Tài liệu Architecture chính (sau đây gọi là "Main Arch Doc")
  - Tài liệu Frontend Architecture (sau đây gọi là "Frontend Arch Doc," nếu có liên quan)
  - Hướng dẫn Cấu trúc Dự án (`docs/project-structure.md`)
  - Tài liệu Hướng dẫn Vận hành (`docs/operational-guidelines.md`)
  - Tài liệu Technology Stack (`docs/tech-stack.md`)
  - Tài liệu Data Models (như được tham chiếu trong Index Doc)
  - Tài liệu API Reference (như được tham chiếu trong Index Doc)
  - Đặc tả UI/UX, Style Guide, Component Guide (nếu có liên quan, như được tham chiếu trong Index Doc)
- `bmad-agent/templates/story-tmpl.md` (sau đây gọi là "Story Template")
- `bmad-agent/checklists/story-draft-checklist.md` (sau đây gọi là "Story Draft Checklist")
- Xác nhận của người dùng để tiến hành xác định story và, nếu cần, ghi đè cảnh báo về story prerequisite chưa hoàn thành.

## Hướng dẫn Thực hiện Task

### 1. Xác định Story Tiếp theo để Chuẩn bị

- Xem xét `docs/stories/` để tìm file story có số cao nhất.
- **Nếu file story cao nhất tồn tại (`{lastEpicNum}.{lastStoryNum}.story.md`):**

  - Xác minh `Status` của nó là 'Done' (hoặc tương đương).
  - Nếu không phải 'Done', trình bày cảnh báo cho người dùng:

    ```plaintext
    ALERT: Tìm thấy story chưa hoàn thành:
    File: {lastEpicNum}.{lastStoryNum}.story.md
    Status: [trạng thái hiện tại]

    Bạn có muốn:
    1. Xem chi tiết story chưa hoàn thành (hướng dẫn người dùng làm việc đó, agent không hiển thị)
    2. Hủy tạo story mới tại thời điểm này
    3. Chấp nhận rủi ro & Ghi đè để tạo story tiếp theo trong draft

    Vui lòng chọn một tùy chọn (1/2/3):
    ```

  - Chỉ tiến hành nếu người dùng chọn tùy chọn 3 (Ghi đè) hoặc nếu story cuối cùng là 'Done'.
  - Nếu tiến hành: Kiểm tra Epic File cho `{lastEpicNum}` cho một story được đánh số `{lastStoryNum + 1}`. Nếu nó tồn tại và các prerequisite của nó (theo Epic File) được đáp ứng, đây là story tiếp theo.
  - Khác (story không tìm thấy hoặc prerequisite không được đáp ứng): Story tiếp theo là story đầu tiên trong Epic File tiếp theo (ví dụ: `docs/epic-{lastEpicNum + 1}.md`, sau đó `{lastEpicNum + 2}.md`, v.v.) có prerequisite được đáp ứng.

- **Nếu không có file story nào tồn tại trong `docs/stories/`:**
  - Story tiếp theo là story đầu tiên trong `docs/epic-1.md` (sau đó `docs/epic-2.md`, v.v.) có prerequisite được đáp ứng.
- Nếu không tìm thấy story phù hợp với prerequisite được đáp ứng, báo cáo cho người dùng rằng việc tạo story bị chặn, chỉ định prerequisite nào đang chờ xử lý. DỪNG task.
- Thông báo story đã xác định cho người dùng: "Identified next story for preparation: {epicNum}.{storyNum} - {Story Title}".

### 2. Thu thập Yêu cầu Story Cốt lõi (từ Epic File)

- Đối với story đã xác định, mở Epic File cha của nó.
- Trích xuất: Tiêu đề Chính xác, tuyên bố đầy đủ Goal/User Story, danh sách yêu cầu ban đầu, tất cả Tiêu chí Chấp nhận (AC) và bất kỳ Task cấp cao đã xác định trước nào.
- Giữ bản ghi về phạm vi được epic xác định ban đầu này để phân tích độ lệch sau này.

### 3. Thu thập & Tổng hợp Bối cảnh Kỹ thuật Sâu cho Dev Agent

- <critical_rule>Hệ thống sử dụng Index Doc (`docs/index.md`) làm hướng dẫn chính của bạn để khám phá đường dẫn đến TẤT CẢ tài liệu chi tiết liên quan đến nhu cầu triển khai story hiện tại.</critical_rule>
- Xem xét kỹ lưỡng PRD Doc, Main Arch Doc và Frontend Arch Doc (nếu là UI story).
- Được hướng dẫn bởi Index Doc và nhu cầu của story, định vị, phân tích và tổng hợp thông tin cụ thể, có liên quan từ các nguồn như:
  - Data Models Doc (cấu trúc, quy tắc validation).
  - API Reference Doc (endpoint, request/response schema, auth).
  - Pattern kiến trúc hoặc thiết kế component áp dụng từ Arch Docs.
  - UI/UX Spec, Style Guide, Component Guide (cho UI story).
  - Đặc điểm từ Tech Stack Doc nếu phiên bản hoặc cấu hình là chìa khóa cho story này.
  - Phần liên quan của Operational Guidelines Doc (ví dụ: sắc thái xử lý lỗi cụ thể story, cân nhắc bảo mật cho dữ liệu được xử lý trong story này).
- Mục tiêu là thu thập tất cả chi tiết cần thiết mà Dev Agent sẽ cần, để tránh họ phải tìm kiếm rộng rãi. Lưu ý bất kỳ sự khác biệt nào giữa epic và những chi tiết này cho "Deviation Analysis."

### 4. Xác minh Alignment Cấu trúc Dự án

- Tham chiếu chéo yêu cầu story và thao tác file dự kiến với Project Structure Guide (và cấu trúc frontend nếu có thể áp dụng).
- Đảm bảo bất kỳ đường dẫn file, vị trí component hoặc tên module nào được ngụ ý bởi story phù hợp với cấu trúc đã xác định.
- Ghi lại bất kỳ xung đột cấu trúc, làm rõ cần thiết hoặc component/đường dẫn không xác định nào trong phần "Project Structure Notes" trong bản thảo story.

### 5. Điền Story Template với Bối cảnh Đầy đủ

- Tạo file story mới: `docs/stories/{epicNum}.{storyNum}.story.md`.
- Sử dụng Story Template để cấu trúc file.
- Điền vào:
  - Story `{EpicNum}.{StoryNum}: {Short Title Copied from Epic File}`
  - `Status: Draft`
  - `Story` (tuyên bố User Story từ Epic)
  - `Acceptance Criteria (ACs)` (từ Epic, cần tinh chỉnh nếu cần dựa trên bối cảnh)
- **Phần `Dev Technical Guidance` (QUAN TRỌNG):**
  - Dựa trên tất cả bối cảnh đã thu thập (Bước 3 & 4), nhúng đoạn thông tin súc tích nhưng quan trọng, cấu trúc dữ liệu cụ thể, chi tiết API endpoint, tham chiếu chính xác đến _các phần cụ thể_ trong tài liệu khác (ví dụ: "Xem `Data Models Doc#User-Schema-ValidationRules` để biết chi tiết"), hoặc giải thích ngắn gọn về cách pattern kiến trúc áp dụng cho _story này_.
  - Nếu UI story, cung cấp tham chiếu cụ thể đến Component/Style Guide liên quan đến _các phần tử của story này_.
  - Mục đích là làm cho phần này trở thành nguồn chính của Dev Agent cho bối cảnh kỹ thuật _cụ thể story_.
- **Phần `Tasks / Subtasks`:**
  - Tạo danh sách chi tiết, tuần tự các task kỹ thuật và subtask mà Dev Agent phải thực hiện để hoàn thành story, dựa trên bối cảnh đã thu thập.
  - Liên kết task với AC khi có thể áp dụng (ví dụ: `Task 1 (AC: 1, 3)`).
- Thêm ghi chú về alignment hoặc sự khác biệt cấu trúc dự án được tìm thấy trong Bước 4.
- Chuẩn bị nội dung cho "Deviation Analysis" dựa trên sự khác biệt được ghi chú trong Bước 3.