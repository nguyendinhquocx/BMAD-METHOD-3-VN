# Cơ sở Tri thức BMAD

## MỤC LỤC CHỦ ĐỀ

- [Cơ sở Tri thức BMAD](#cơ-sở-tri-thức-bmad)
  - [MỤC LỤC CHỦ ĐỀ](#mục-lục-chủ-đề)
  - [BMAD METHOD - TRIẾT LÝ CỐT LÕI](#bmad-method---triết-lý-cốt-lõi)
  - [BMAD METHOD - TỔNG QUAN PHƯƠNG PHÁP AGILE](#bmad-method---tổng-quan-phương-pháp-agile)
    - [NGUYÊN TẮC CỐT LÕI CỦA AGILE](#nguyên-tắc-cốt-lõi-của-agile)
    - [THỰC HÀNH CHÍNH TRONG AGILE](#thực-hành-chính-trong-agile)
    - [LỢI ÍCH CỦA AGILE](#lợi-ích-của-agile)
  - [BMAD METHOD - SO SÁNH VỚI NGUYÊN TẮC AGILE](#bmad-method---so-sánh-với-nguyên-tắc-agile)
  - [BMAD METHOD - CÔNG CỤ VÀ VỊ TRÍ TÀI NGUYÊN](#bmad-method---công-cụ-và-vị-trí-tài-nguyên)
  - [BMAD METHOD - CỘNG ĐỒNG VÀ ĐÓNG GÓP](#bmad-method---cộng-đồng-và-đóng-góp)
    - [Licensing](#licensing)
  - [BMAD METHOD - TINH THẦN & BEST PRACTICE](#bmad-method---tinh-thần--best-practice)
  - [VAI TRÒ VÀ TRÁCH NHIỆM AGENT](#vai-trò-và-trách-nhiệm-agent)
  - [ĐIỀU HƯỚNG BMAD WORKFLOW - HƯỚNG DẪN BAN ĐẦU](#điều-hướng-bmad-workflow---hướng-dẫn-ban-đầu)
    - [BẮT ĐẦU DỰ ÁN CỦA BẠN - ANALYST HAY PM?](#bắt-đầu-dự-án-của-bạn---analyst-hay-pm)
    - [HIỂU VỀ EPIC - ĐƠN LẺ HAY NHIỀU?](#hiểu-về-epic---đơn-lẻ-hay-nhiều)
  - [BẮT ĐẦU VỚI BMAD](#bắt-đầu-với-bmad)
    - [Thiết lập Dự án Ban đầu](#thiết-lập-dự-án-ban-đầu)
    - [Export Artifact từ Nền tảng AI](#export-artifact-từ-nền-tảng-ai)
    - [Document Sharding](#document-sharding)
    - [Sử dụng IDE Agent Chuyên dụng (SM và Dev)](#sử-dụng-ide-agent-chuyên-dụng-sm-và-dev)
    - [Khi nào Sử dụng BMAD IDE Orchestrator](#khi-nào-sử-dụng-bmad-ide-orchestrator)
  - [THỨ TỰ ĐỀ XUẤT TƯƠNG TÁC AGENT (LUỒNG ĐIỂN HÌNH)](#thứ-tự-đề-xuất-tương-tác-agent-luồng-điển-hình)
  - [XỬ LÝ THAY ĐỔI LỚN](#xử-lý-thay-đổi-lớn)
  - [IDE VS UI USAGE - KHUYẾN NGHỊ CHUNG](#ide-vs-ui-usage---khuyến-nghị-chung)
    - [GIA ĐOẠN KHÁI NIỆM VÀ LẬP KẾ HOẠCH](#giai-đoạn-khái-niệm-và-lập-kế-hoạch)
    - [QUẢN LÝ TÀI LIỆU & GIAI ĐOẠN TRIỂN KHAI](#quản-lý-tài-liệu--giai-đoạn-triển-khai)
    - [FILE BMAD METHOD](#file-bmad-method)
  - [TẬN DỤNG IDE TASK ĐỂ HIỆU QUẢ](#tận-dụng-ide-task-để-hiệu-quả)
    - [MỤC ĐÍCH CỦA IDE TASK](#mục-đích-của-ide-task)
    - [VÍ DỤ VỀ CHỨC NĂNG TASK](#ví-dụ-về-chức-năng-task)

## BMAD METHOD - TRIẾT LÝ CỐT LÕI

**TUYÊN BỐ:** "Vibe CEO'ing" là về việc chấp nhận hỗn loạn, suy nghĩ như một CEO với tài nguyên không giới hạn và tầm nhìn đơn lẻ, và tận dụng AI làm team mạnh mẽ của bạn để đạt được mục tiêu đầy tham vọng một cách nhanh chóng. BMAD Method (Breakthrough Method of Agile (ai-driven) Development), với "Bmad Agent" được tích hợp, nâng "vibe coding" lên lập kế hoạch dự án nâng cao, cung cấp framework có cấu trúc nhưng linh hoạt để lập kế hoạch, thực hiện và quản lý dự án phần mềm sử dụng team các AI agent chuyên biệt.

**CHI TIẾT:**

- Tập trung vào mục tiêu đầy tham vọng và lặp nhanh.
- Sử dụng AI như một nhân tố nhân lực.
- Thích nghi và vượt qua trở ngại với tư duy chủ động.

## BMAD METHOD - TỔNG QUAN PHƯƠNG PHÁP AGILE

### NGUYÊN TẮC CỐT LÕI CỦA AGILE

- Cá nhân và tương tác hơn quy trình và công cụ.
- Phần mềm hoạt động hơn tài liệu toàn diện.
- Hợp tác khách hàng hơn đàm phán hợp đồng.
- Phản ứng với thay đổi hơn theo kế hoạch.

### THỰC HÀNH CHÍNH TRONG AGILE

- Phát triển Lặp: Xây dựng trong chu kỳ ngắn (sprint).
- Giao hàng Tăng dần: Phát hành các phần chức năng của sản phẩm.
- Daily Stand-up: Cuộc họp team ngắn để đồng bộ hóa.
- Retrospective: Đánh giá thường xuyên để cải thiện quy trình.
- Phản hồi Liên tục: Đầu vào liên tục từ stakeholder.

### LỢI ÍCH CỦA AGILE

- Tăng Tính linh hoạt: Khả năng thích nghi với yêu cầu thay đổi.
- Time to Market Nhanh hơn: Giao hàng tính năng có giá trị nhanh hơn.
- Cải thiện Chất lượng: Testing liên tục và vòng phản hồi.
- Tăng cường Tương tác Stakeholder: Hợp tác chặt chẽ với người dùng/khách hàng.
- Tinh thần Team Cao hơn: Team được trao quyền và tự tổ chức.

## BMAD METHOD - SO SÁNH VỚI NGUYÊN TẮC AGILE

BMAD Method, trong khi riêng biệt trong cách tiếp cận "Vibe CEO'ing" với AI, chia sẻ những điểm tương đồng cơ bản với phương pháp Agile:

- **Cá nhân và Tương tác vs Công cụ và Quy trình (Agile) vs. Vibe CEO & AI Team (BMAD):**

  - **Agile:** Nhấn mạnh tầm quan trọng của cá nhân lành nghề và giao tiếp hiệu quả.
  - **BMAD:** "Vibe CEO" (bạn) tích cực hướng dẫn và tương tác với AI agent, coi chúng như team mạnh mẽ. Chất lượng của tương tác này và hướng dẫn rõ ràng ("CLEAR_INSTRUCTIONS", "KNOW_YOUR_AGENTS") là quan trọng nhất, phản ánh tập trung của Agile vào yếu tố con người.

- **Phần mềm Hoạt động vs Tài liệu Toàn diện (Agile) vs. Lặp Nhanh & Đầu ra Chất lượng (BMAD):**

  - **Agile:** Ưu tiên giao phần mềm chức năng nhanh chóng.
  - **BMAD:** Nhấn mạnh "START_SMALL_SCALE_FAST" và "ITERATIVE_REFINEMENT." Trong khi "DOCUMENTATION_IS_KEY" cho đầu vào tốt (brief, PRD), mục tiêu là tận dụng AI để tạo ra nhanh chóng các component hoặc giải pháp hoạt động. Trọng tâm là đạt được mục tiêu đầy tham vọng nhanh chóng.

## BMAD METHOD - TINH THẦN & BEST PRACTICE

- **CORE_ETHOS:** Bạn là "Vibe CEO." Suy nghĩ như CEO với tài nguyên không giới hạn và tầm nhìn đơn lẻ. AI agent của bạn là team mạnh mẽ của bạn. Công việc của bạn là chỉ đạo, tinh chỉnh và đảm bảo chất lượng hướng tới mục tiêu đầy tham vọng của bạn. Method nâng "vibe coding" lên lập kế hoạch dự án nâng cao.
- **MAXIMIZE_AI_LEVERAGE:** Đẩy AI. Yêu cầu nhiều hơn. Thách thức đầu ra của nó. Lặp lại.
- **QUALITY_CONTROL:** Bạn là người quyết định cuối cùng về chất lượng. Xem xét tất cả đầu ra.
- **STRATEGIC_OVERSIGHT:** Duy trì tầm nhìn high-level. Đảm bảo đầu ra agent phù hợp.
- **ITERATIVE_REFINEMENT:** Kỳ vọng xem lại các bước. Đây không phải là quy trình tuyến tính.
- **CLEAR_INSTRUCTIONS:** Yêu cầu càng chính xác, đầu ra của AI càng tốt.
- **DOCUMENTATION_IS_KEY:** Đầu vào tốt (brief, PRD) dẫn đến đầu ra tốt. POSM agent rất quan trọng để tổ chức điều này.
- **KNOW_YOUR_AGENTS:** Hiểu vai trò của mỗi agent. Điều này bao gồm hiểu khả năng của Orchestrator agent nếu bạn đang sử dụng một cái.
- **START_SMALL_SCALE_FAST:** Test khái niệm, sau đó mở rộng.
- **EMBRACE_THE_CHAOS:** Tiên phẩm phương pháp mới thì lộn xộn. Thích nghi và vượt qua.
- **ADAPT & EXPERIMENT:** BMAD Method cung cấp cấu trúc, nhưng hãy tự do thích nghi các nguyên tắc, thứ tự agent hoặc template của nó để phù hợp với nhu cầu dự án cụ thể và phong cách làm việc của bạn.

## VAI TRÒ VÀ TRÁCH NHIỆM AGENT

Hiểu vai trò và trách nhiệm riêng biệt của mỗi agent là chìa khóa để điều hướng hiệu quả BMAD workflow. Trong khi "Vibe CEO" cung cấp hướng dẫn tổng thể, mỗi agent chuyên về các khía cạnh khác nhau của chu kỳ dự án.

- **Orchestrator Agent (BMAD):**
  - **Chức năng:** Orchestrator chính, ban đầu "BMAD." Nó có thể hiện thân các persona agent chuyên biệt khác nhau. Nó xử lý truy vấn BMAD chung, cung cấp giám sát và là lựa chọn khi không chắc chắn cần specialist nào.

- **Analyst:**
  - **Chức năng:** Xử lý nghiên cứu, thu thập yêu cầu, brainstorming và tạo Project Brief.
  - **Đầu ra:** `Project Brief`.

- **Product Manager (PM):**
  - **Chức năng:** Chịu trách nhiệm tạo và duy trì Product Requirements Document (PRD), lập kế hoạch dự án tổng thể và ý tưởng liên quan đến sản phẩm.
  - **Đầu ra:** `Product Requirements Document (PRD)`.

- **Architect:**
  - **Chức năng:** Thiết kế kiến trúc hệ thống, xử lý thiết kế kỹ thuật và đảm bảo tính khả thi kỹ thuật.
  - **Đầu ra:** `Architecture Document`.

- **Design Architect:**
  - **Chức năng:** Tập trung vào đặc tả UI/UX, kiến trúc kỹ thuật front-end và có thể tạo prompt cho dịch vụ tạo UI AI.
  - **Đầu ra:** `UX/UI Specification`, `Front-end Architecture Plan`, prompt tạo UI AI.

- **Product Owner (PO):**
  - **Chức năng:** Agile Product Owner chịu trách nhiệm xác thực tài liệu, đảm bảo trình tự phát triển, quản lý product backlog, chạy master checklist, xử lý re-planning mid-sprint và soạn thảo user story.
  - **Đầu ra:** User Story, PRD/Backlog được quản lý.

- **Scrum Master (SM):**
  - **Chức năng:** Vai trò kỹ thuật tập trung vào giúp team chạy quy trình Scrum, tạo điều kiện phát triển và thường liên quan đến tạo và tinh chỉnh story.

- **Developer Agent (DEV):**
  - **Chức năng:** Triển khai user story từng cái một. Có thể generic hoặc chuyên biệt.
  - **Khi sử dụng:** Trong giai đoạn triển khai, thường làm việc trong IDE.

## THỨ TỰ ĐỀ XUẤT TƯƠNG TÁC AGENT (LUỒNG ĐIỂN HÌNH)

**LƯU Ý:** Đây là hướng dẫn chung. BMAD method là lặp; phase/agent có thể được xem lại.

1. **Analyst** - brainstorm và tạo project brief.
2. **PM (Product Manager)** - sử dụng brief để sản xuất PRD với epic và story high level.
3. **Design Architect UX UI Spec for PRD (Nếu dự án có UI)** - tạo front end UX/UI Specification.
4. **Architect** - tạo kiến trúc và đảm bảo chúng ta có thể đáp ứng yêu cầu prd về mặt kỹ thuật - với đủ đặc tả để dev agent hoạt động nhất quán.
5. **Design Architect (Nếu dự án có UI)** - tạo front end architecture và đảm bảo chúng ta có thể đáp ứng yêu cầu prd về mặt kỹ thuật.
6. **Design Architect (Nếu dự án có UI)** - Tùy chọn tạo prompt để tạo UI từ dịch vụ AI như Lovable hoặc V0 từ Vercel.
7. **PO**: Xác thực tài liệu được aligned, trình tự có ý nghĩa, chạy master checklist cuối cùng.
8. **PO hoặc SM**: Tạo Story từng cái một - điều này thường được thực hiện trong IDE sau khi mỗi story được hoàn thành bởi Developer Agent.
9. **Developer Agent**: Triển khai Story từng cái một. Bạn có thể tạo Developer Agent chuyên biệt khác nhau hoặc sử dụng generic developer agent.

## TẬN DỤNG IDE TASK ĐỂ HIỆU QUẢ

### MỤC ĐÍCH CỦA IDE TASK

- **Giảm Agent Bloat:** Tránh thêm nhiều hướng dẫn ít sử dụng vào IDE agent mode chính.
- **Chức năng On-Demand:** Hướng dẫn IDE agent hoạt động thực hiện task bằng cách cung cấp nội dung của task file liên quan.
- **Tính linh hoạt:** Bất kỳ agent có khả năng đủ nào đều có thể được yêu cầu thực hiện task.

### VÍ DỤ VỀ CHỨC NĂNG TASK

- **`create-prd.md`:** Hướng dẫn tạo Product Requirements Document.
- **`create-next-story-task.md`:** Giúp định nghĩa và tạo user story tiếp theo cho phát triển.
- **`create-architecture.md`:** Hỗ trợ trong việc nêu kiến trúc kỹ thuật cho dự án.
- **`create-frontend-architecture.md`:** Tập trung cụ thể vào thiết kế kiến trúc front-end.
- **`create-uxui-spec.md`:** Tạo điều kiện cho việc tạo tài liệu UX/UI Specification.
- **`create-ai-frontend-prompt.md`:** Giúp soạn thảo prompt cho dịch vụ AI để tạo UI/frontend element.
- **`doc-sharding-task.md`:** Cung cấp quy trình để chia tài liệu lớn thành các phần nhỏ, có thể quản lý được.
- **`checklist-run-task.md`:** Thực hiện checklist đã xác định trước.
- **`correct-course.md`:** Cung cấp hướng dẫn khi dự án cần điều chỉnh hướng đi.
- **`create-deep-research-prompt.md`:** Giúp xây dựng prompt để tiến hành nghiên cứu sâu về chủ đề.