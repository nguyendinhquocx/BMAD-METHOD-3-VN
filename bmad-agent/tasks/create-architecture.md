# Task Tạo Architecture

## Mục đích

- Thiết kế một kiến trúc kỹ thuật hoàn chỉnh, mạnh mẽ và được ghi lại tốt dựa trên yêu cầu dự án (PRD, epic, brief), kết quả nghiên cứu và đầu vào của người dùng.
- Đưa ra lựa chọn công nghệ dứt khoát và diễn đạt lý lẽ đằng sau chúng, tận dụng architecture template như một hướng dẫn cấu trúc.
- Sản xuất tất cả artifact kỹ thuật cần thiết, đảm bảo kiến trúc được tối ưu hóa để triển khai hiệu quả, đặc biệt bởi AI developer agent, và được xác thực với `architect-checklist`.

## Hướng dẫn

1. **Phân tích Đầu vào & Thiết lập Đối thoại:**

    - Đảm bảo bạn có tất cả đầu vào cần thiết: tài liệu PRD (cụ thể kiểm tra các phần 'Technical Assumptions' và 'Initial Architect Prompt' cho kiến trúc repository và service đã quyết định), project brief, bất kỳ báo cáo nghiên cứu sâu nào, và tùy chọn `technical-preferences.md`. Yêu cầu bất kỳ tài liệu quan trọng nào còn thiếu.
    - Xem xét kỹ lưỡng tất cả đầu vào.
    - Tóm tắt các yêu cầu kỹ thuật chính, ràng buộc, NFR (Non-Functional Requirements) và kiến trúc repository/service đã quyết định từ đầu vào. Trình bày tóm tắt này cho người dùng để xác nhận và đảm bảo hiểu biết chung.
    - Chia sẻ quan sát kiến trúc ban đầu, thách thức tiềm năng hoặc khu vực cần làm rõ dựa trên đầu vào.
      **Thiết lập Chế độ Tương tác để Tạo Architecture:**
      - Hỏi người dùng: "Bạn muốn tiến hành tạo kiến trúc cho dự án này như thế nào? Chúng ta có thể làm việc:
        A. **Incrementally (Mặc định & Khuyến nghị):** Chúng ta sẽ đi qua từng quyết định kiến trúc, phần tài liệu hoặc điểm thiết kế từng bước. Tôi sẽ trình bày bản thảo, và chúng ta sẽ tìm phản hồi và xác nhận của bạn trước khi chuyển đến phần tiếp theo. Đây là tốt nhất cho quyết định phức tạp và tinh chỉnh chi tiết.
        B. **"YOLO" Mode:** Tôi có thể tạo ra bản thảo ban đầu toàn diện hơn về kiến trúc (hoặc các phần quan trọng) để bạn xem xét rộng hơn trước. Sau đó chúng ta có thể lặp lại trên các phần cụ thể dựa trên phản hồi của bạn. Điều này có thể nhanh hơn để tạo ý tưởng ban đầu nhưng nói chung không được khuyến nghị nếu hợp tác chi tiết ở mỗi bước được ưa thích."
      - Yêu cầu người dùng chọn chế độ ưa thích của họ (ví dụ: "Vui lòng cho tôi biết nếu bạn thích A hoặc B.").
      - Khi người dùng chọn, xác nhận chế độ đã chọn (ví dụ: "Okay, chúng ta sẽ tiến hành ở chế độ Incremental."). Chế độ đã chọn này sẽ chi phối cách các bước tiếp theo trong task này được thực hiện.

2. **Giải quyết Mơ hồ & Thu thập Thông tin Còn thiếu:**

    - Nếu thông tin chính còn thiếu hoặc yêu cầu không rõ ràng sau xem xét ban đầu, xây dựng câu hỏi cụ thể, có mục tiêu.
    - **Chi tiết External API:** Nếu dự án liên quan đến tích hợp với external API, đặc biệt là những API ít phổ biến hoặc nơi bạn thiếu độ tin cậy cao trong dữ liệu huấn luyện của mình về request/response schema cụ thể của họ, và nếu giai đoạn "Deep Research" không được tiến hành cho những API này:
      - Chủ động yêu cầu người dùng cung cấp chi tiết chính xác. Điều này bao gồm:
        - Link đến tài liệu API chính thức.
        - Cấu trúc request mẫu (ví dụ: lệnh cURL, JSON payload).
        - Cấu trúc response mẫu (ví dụ: JSON response cho kịch bản điển hình, bao gồm error response).
      - Giải thích rằng thông tin này rất quan trọng để xác định chính xác hợp đồng tương tác API trong kiến trúc, để tạo facade/adapter mạnh mẽ, và để cho phép lập kế hoạch kỹ thuật chính xác (ví dụ: cho technical story hoặc tinh chỉnh epic).
    - Trình bày câu hỏi cho người dùng (nhóm logic nếu nhiều) và chờ đầu vào của họ.
    - Ghi lại tất cả quyết định và làm rõ nhận được trước khi tiến hành.

3. **Lựa chọn Công nghệ & Thiết kế Lặp (Tương tác, nếu không phải YOLO mode):**

    - Đối với mỗi component kiến trúc chính hoặc điểm quyết định (ví dụ: frontend framework, ngôn ngữ/framework backend, hệ thống cơ sở dữ liệu, nhà cung cấp đám mây, dịch vụ chính, pattern giao tiếp):
      - Nếu tồn tại nhiều tùy chọn khả thi dựa trên yêu cầu hoặc nghiên cứu, trình bày 2-3 lựa chọn, nêu ngắn gọn ưu điểm, nhược điểm và sự liên quan của chúng đến dự án. Xem xét bất kỳ sở thích nào được nêu trong `technical-preferences.md` khi xây dựng những tùy chọn này và khuyến nghị của bạn.
      - Nêu lựa chọn được khuyến nghị của bạn, cung cấp lý lẽ rõ ràng dựa trên yêu cầu, kết quả nghiên cứu, sở thích người dùng (nếu biết) và best practice (ví dụ: khả năng mở rộng, chi phí, sự quen thuộc của team, hệ sinh thái).
      - Hỏi phản hồi người dùng, giải quyết mối quan tâm và tìm sự phê duyệt rõ ràng trước khi hoàn thiện quyết định.
      - Ghi lại lựa chọn đã xác nhận và lý lẽ của nó trong tài liệu kiến trúc.
    - **Starter Template:** Nếu có thể áp dụng và được yêu cầu, nghiên cứu và khuyến nghị starter template phù hợp hoặc đánh giá codebase hiện có. Giải thích alignment với mục tiêu dự án và tìm xác nhận người dùng.

4. **Tạo Technical Artifact (Incrementally, trừ khi YOLO mode, được hướng dẫn bởi `architecture-tmpl`):**

    - Đối với mỗi artifact hoặc phần của Architecture Document chính:

      - **Giải thích Mục đích:** Mô tả ngắn gọn tầm quan trọng của artifact/phần và những gì nó sẽ bao gồm.
      - **Bản thảo Từng phần:** Trình bày bản thảo của một phần logic tại một thời điểm.
        - Đảm bảo các phần 'High-Level Overview' và 'Component View' phản ánh chính xác và chi tiết kiến trúc repository/service đã quyết định trong PRD.
        - Đảm bảo rằng Coding Standards được ghi lại (như một phần chuyên dụng hoặc được tham chiếu) và phần 'Testing Strategy' định nghĩa rõ ràng:
          - Quy ước cho vị trí file unit test (ví dụ: co-located với source file, hoặc trong thư mục riêng như `tests/` hoặc `__tests__/`).
          - Quy ước đặt tên cho file unit test (ví dụ: `*.test.js`, `*.spec.ts`, `test_*.py`).
        - Khi thảo luận về Coding Standards, thông báo người dùng rằng những điều này sẽ phục vụ như quy tắc chặt chẽ cho AI developer agent. Nhấn mạnh rằng những tiêu chuẩn này nên được giữ ở mức tối thiểu cần thiết để ngăn chặn code không mong muốn hoặc lộn xộn từ agent. Hướng dẫn người dùng hiểu rằng tiêu chuẩn quá quy định hoặc hiển nhiên (ví dụ: "sử dụng nguyên tắc SOLID," mà LLM được huấn luyện tốt đã biết) nên được tránh, vì người dùng, biết các agent và công cụ cụ thể họ sẽ sử dụng, có thể đánh giá tốt nhất mức độ chi tiết thích hợp.
        - **Kết hợp Phản hồi:** Thảo luận bản thảo với người dùng, kết hợp phản hồi của họ và lặp lại khi cần.
        - [Cung cấp Tùy chọn Advanced Self-Refinement & Elicitation](#cung-cấp-tùy-chọn-advanced-self-refinement--elicitation)
        - **Tìm Phê duyệt:** Có được phê duyệt rõ ràng của người dùng cho phần trước khi chuyển đến phần tiếp theo, hoặc cho toàn bộ artifact nếu được soạn thảo toàn diện (trong YOLO mode).

5. **Xác định Technical Story Còn thiếu / Tinh chỉnh Epic (Tương tác):**

    - Dựa trên kiến trúc đã thiết kế, xác định bất kỳ technical story/task cần thiết nào chưa được ghi lại trong PRD hoặc epic (ví dụ: "Set up CI/CD pipeline for frontend deployment," "Implement authentication module using JWT," "Create base Docker images for backend services," "Configure initial database schema based on data models").
    - Giải thích tầm quan trọng của những technical story này để cho phép yêu cầu chức năng và thực hiện dự án thành công.
    - Hợp tác với người dùng để tinh chỉnh những story này (mô tả rõ ràng, tiêu chí chấp nhận) và đề xuất thêm chúng vào project backlog hoặc epic liên quan.
    - Xem xét epic/story hiện có từ PRD và đề xuất cân nhắc kỹ thuật hoặc tinh chỉnh tiêu chí chấp nhận để đảm bảo chúng có thể triển khai dựa trên kiến trúc đã chọn. Ví dụ: chỉ định API endpoint được gọi, định dạng dữ liệu hoặc phiên bản library quan trọng.
    - Sau hợp tác, chuẩn bị tóm tắt súc tích chi tiết tất cả bổ sung, cập nhật hoặc sửa đổi được đề xuất cho epic và user story. Nếu không xác định thay đổi nào, nêu rõ ràng điều này.

6. **Xác thực Architecture với Checklist & Hoàn thiện Đầu ra:**
    - Khi các component tài liệu kiến trúc chính đã được soạn thảo và xem xét với người dùng, thực hiện xem xét toàn diện sử dụng `architect-checklist`.
    - Đi qua từng mục trong checklist để đảm bảo tài liệu kiến trúc là toàn diện, giải quyết tất cả mối quan tâm kiến trúc chính (ví dụ: bảo mật, khả năng mở rộng, khả năng duy trì, khả năng test (bao gồm xác nhận rằng coding standard và testing strategy định nghĩa rõ ràng vị trí và quy ước đặt tên unit test), trải nghiệm developer), và các giải pháp được đề xuất là mạnh mẽ.
    - Đối với mỗi mục checklist, xác nhận trạng thái của nó (ví dụ: \[x] Hoàn thành, \[ ] N/A, \[!] Cần Chú ý).
    - Nếu thiếu sót, khoảng trống hoặc khu vực cần chi tiết hoặc làm rõ thêm được xác định dựa trên checklist:
      - Thảo luận những phát hiện này với người dùng.
      - Hợp tác thực hiện cập nhật, bổ sung hoặc tinh chỉnh cần thiết cho tài liệu kiến trúc để giải quyết những điểm này.
    - Sau khi giải quyết tất cả điểm checklist và đảm bảo tài liệu kiến trúc mạnh mẽ và hoàn chỉnh, trình bày tóm tắt xem xét checklist cho người dùng. Tóm tắt này nên làm nổi bật:
      - Xác nhận rằng tất cả phần/mục liên quan của checklist đã được kiến trúc thỏa mãn.
      - Bất kỳ mục nào được đánh dấu N/A, với lý lẽ ngắn gọn.
      - Ghi chú ngắn gọn về bất kỳ thảo luận, quyết định hoặt thay đổi quan trọng nào được thực hiện cho tài liệu kiến trúc kết quả từ xem xét checklist.
    - **Cung cấp Design Architect Prompt (Nếu Có thể áp dụng):**
      - Nếu kiến trúc bao gồm UI component, hỏi người dùng liệu họ có muốn bao gồm prompt chuyên dụng cho "Design Architect" ở cuối tài liệu kiến trúc chính.
      - Giải thích rằng prompt này có thể ghi lại cân nhắc UI cụ thể, ghi chú từ thảo luận hoặc quyết định không phù hợp với tài liệu kiến trúc kỹ thuật cốt lõi nhưng rất quan trọng cho Design Architect.
      - Prompt cũng nên nêu rằng Design Architect sau đó sẽ hoạt động trong chế độ chuyên biệt của nó để định nghĩa kiến trúc frontend chi tiết.
      - Nếu người dùng đồng ý, hợp tác soạn thảo prompt này và thêm vào tài liệu kiến trúc.
    - Có được phê duyệt cuối cùng của người dùng để tạo tài liệu kiến trúc hoàn chỉnh.
    - **Khuyến nghị Bước Tiếp theo cho UI (Nếu Có thể áp dụng):**
      - Sau khi tài liệu kiến trúc chính được hoàn thiện và phê duyệt:
      - Nếu dự án liên quan đến giao diện người dùng (như nên rõ ràng từ PRD đầu vào và có thể tài liệu kiến trúc chính nêu UI component hoặc tham chiếu đầu ra từ giai đoạn UI/UX Specification của Design Architect):
        - Khuyến nghị mạnh mẽ cho người dùng rằng bước quan trọng tiếp theo cho UI là tương tác **Design Architect** agent.
        - Cụ thể, khuyên họ sử dụng **'Frontend Architecture Mode'** của Design Architect.
        - Giải thích rằng Design Architect sẽ sử dụng Architecture Document chính hiện đã hoàn thành và đặc tả UI/UX chi tiết (ví dụ: `front-end-spec-tmpl.txt` hoặc PRD được làm phong phú) làm đầu vào chính để định nghĩa kiến trúc frontend cụ thể, chọn frontend library/framework (nếu chưa quyết định), cấu trúc frontend component và chi tiết pattern tương tác.

### Deliverable Đầu ra cho Giai đoạn Tạo Architecture

- Một Architecture Document toàn diện, được cấu trúc theo `architecture-tmpl` (tất cả là markdown) hoặc định dạng được thỏa thuận, bao gồm tất cả phần được chi tiết ở trên.
- Sơ đồ Mermaid rõ ràng cho tổng quan kiến trúc, data model, v.v.
- Danh sách technical user story/task mới hoặc đã tinh chỉnh sẵn sàng để tích hợp backlog.
- Tóm tắt bất kỳ thay đổi đã xác định (bổ sung, cập nhật, sửa đổi) cần thiết cho epic hoặc user story hiện có, hoặc xác nhận rõ ràng nếu không cần thay đổi như vậy.
- `architect-checklist` đã hoàn thành (hoặc tóm tắt xác thực của nó).
- Tùy chọn, nếu UI component có liên quan và người dùng đồng ý: Prompt cho "Design Architect" được thêm vào tài liệu kiến trúc chính, tóm tắt cân nhắc UI liên quan và nêu bước tiếp theo của Design Architect.

## Cung cấp Tùy chọn Advanced Self-Refinement & Elicitation

(Phần này được gọi khi cần trước điều này)

Trình bày người dùng danh sách sau của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Giải thích rằng đây là các bước tùy chọn để giúp đảm bảo chất lượng, khám phá lựa chọn thay thế và làm sâu hiểu biết về phần hiện tại trước khi hoàn thiện nó và chuyển tiếp. Người dùng có thể chọn hành động bằng số hoặc chọn bỏ qua điều này và tiến hành hoàn thiện phần.

"Để đảm bảo chất lượng của phần hiện tại: **[Tên Phần Cụ thể]** và đảm bảo tính mạnh mẽ của nó, khám phá lựa chọn thay thế và xem xét tất cả góc độ, tôi có thể thực hiện bất kỳ hành động nào sau đây. Vui lòng chọn một số (8 để hoàn thiện và tiến hành):

**Advanced Reflective, Elicitation & Brainstorming Actions Tôi Có thể Thực hiện:**

{Hướng dẫn cho AI Agent: Hiển thị tiêu đề của mỗi mục được đánh số bên dưới. Nếu người dùng hỏi tùy chọn cụ thể có nghĩa gì, cung cấp giải thích ngắn gọn về hành động bạn sẽ thực hiện, rút ra từ mô tả chi tiết được điều chỉnh cho bối cảnh.}

1. **Critical Self-Review & User Goal Alignment**
2. **Generate & Evaluate Alternative Design Solutions**
3. **User Journey & Interaction Stress Test (Conceptual)**
4. **Deep Dive into Design Assumptions & Constraints**
5. **Usability & Accessibility Audit Review & Probing Questions**
6. **Collaborative Ideation & UI Feature Brainstorming**
7. **Elicit 'Unforeseen User Needs' & Future Interaction Questions**
8. **Finalize this Section and Proceed.**

Sau khi tôi thực hiện hành động đã chọn, chúng ta có thể thảo luận kết quả và quyết định về bất kỳ sửa đổi thêm nào cho phần này."

LẶP LẠI bằng Hỏi người dùng liệu họ có muốn thực hiện Advanced Reflective, Elicitation & Brainstorming Action khác ĐƠNVỊ cho đến khi người dùng chỉ ra đã đến lúc tiến hành phần tiếp theo (hoặc chọn #8)