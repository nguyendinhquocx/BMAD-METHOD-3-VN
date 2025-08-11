# Hướng Dẫn Học Tập BMAD Method - Từ Cơ Bản Đến Thành Thạo

## Mục Tiêu Của Hướng Dẫn Này

Sau khi đọc xong hướng dẫn này, bạn sẽ:
- Hiểu sâu về triết lý và cách hoạt động của BMAD Method
- Nắm vững cách sử dụng từng loại Agent và vai trò của chúng
- Biết cách áp dụng phương pháp để xây dựng ứng dụng thực tế
- Đưa việc sử dụng AI Agent lên một tầm cao mới

## Phần I: Hiểu Bản Chất BMAD Method

### 1. Bắt đầu với README.md
**File:** `README.md`
**Tại sao đọc đầu tiên:** Đây là cửa ngõ hiểu tổng quan về phương pháp

**Những điểm quan trọng cần nắm:**
- BMAD không chỉ là coding tool mà là một framework hoàn chỉnh
- Web Agent vs IDE Agent - hai cách tiếp cận khác nhau
- Khái niệm "Orchestrator" - điều phối viên AI có thể "biến hình"

### 2. Đọc docs/readme.md để hiểu kiến trúc
**File:** `docs/readme.md`
**Mục đích:** Hiểu cách BMAD giải quyết vấn đề "vibe coding" và nâng nó lên structured planning

**Key Insights:**
- Từ "vibe coding" đến "advanced project planning"
- Tại sao cần team AI agents thay vì 1 AI làm tất cả
- Concept của "Tasks" như mini-agents có thể gọi

## Phần II: Khám Phá Hệ Thống Agent

### 3. Tìm hiểu Orchestrator - Trái tim của hệ thống
**Files cần đọc theo thứ tự:**
1. `bmad-agent/personas/bmad.md` - Persona chính của Orchestrator
2. `bmad-agent/web-bmad-orchestrator-agent.md` - Web version
3. `bmad-agent/ide-bmad-orchestrator.md` - IDE version

**Tại sao Orchestrator quan trọng:**
- Đây là "manager" biết khi nào cần agent nào
- Có thể "trở thành" bất kỳ agent chuyên biệt nào
- Giải quyết vấn đề phải setup nhiều AI agents riêng biệt

### 4. Khám phá đội ngũ Agents chuyên biệt
**Đọc theo thứ tự vai trò trong dự án:**

#### A. Planning & Strategy Phase
1. `bmad-agent/personas/po.md` - Product Owner
   - Vai trò: Định nghĩa WHAT cần build
   - Khi nào dùng: Khi bạn có ý tưởng nhưng chưa rõ requirements

2. `bmad-agent/personas/analyst.md` - Business Analyst  
   - Vai trò: Deep dive vào requirements, research
   - Khi nào dùng: Cần phân tích chi tiết domain, user needs

#### B. Design & Architecture Phase  
3. `bmad-agent/personas/architect.md` - Solution Architect
   - Vai trò: Quyết định HOW build (technical approach)
   - Khi nào dùng: Sau khi có PRD, cần thiết kế technical solution

4. `bmad-agent/personas/design-architect.md` - Design Architect
   - Vai trò: UI/UX design, user experience
   - Khi nào dùng: Cần thiết kế interface và user flow

#### C. Execution Phase
5. `bmad-agent/personas/sm.md` - Scrum Master
   - Vai trò: Project management, break down tasks
   - Khi nào dùng: Chuyển từ planning sang execution

6. `bmad-agent/personas/pm.md` - Project Manager
   - Vai trò: Overall project coordination
   - Khi nào dùng: Manage multiple workstreams

## Phần III: Hiểu Công Cụ và Tài Liệu

### 5. Templates - Khung sườn cho output chất lượng
**Files cần đọc:**
- `bmad-agent/templates/template-format.md` - Hiểu cách viết template
- `bmad-agent/templates/project-brief-tmpl.md` - Mẫu project brief

**Tại sao Templates quan trọng:**
- Đảm bảo output consistent và professional
- Giúp AI tạo ra documents có cấu trúc rõ ràng
- Tiết kiệm thời gian không phải hướng dẫn format mỗi lần

### 6. Checklists - Đảm bảo chất lượng
**Files cần đọc:**
- `bmad-agent/checklists/architect-checklist.md`
- `bmad-agent/checklists/story-dod-checklist.md`

**Vai trò của Checklists:**
- QA/QC cho từng deliverable
- Đảm bảo không bỏ sót các yếu tố quan trọng
- Maintain standards across projects

### 7. Tasks - Chức năng chuyên biệt
**Files quan trọng cần hiểu:**
- `bmad-agent/tasks/create-prd.md`
- `bmad-agent/tasks/create-architecture.md`
- `bmad-agent/tasks/create-next-story-task.md`

**Concept của Tasks:**
- Mini-agents cho specific jobs
- Có thể được gọi bởi bất kỳ agent nào
- Tránh bloat trong main agents

## Phần IV: Data và Knowledge Base

### 8. Hiểu Data Foundation
**Files:**
- `bmad-agent/data/bmad-kb.md` - Core knowledge về method
- `bmad-agent/data/technical-preferences.md` - Tech stack preferences

**Tại sao quan trọng:**
- Provide context cho tất cả agents
- Ensure consistency trong decision making
- Customizable theo preferences của team/project

## Phần V: Thực Hành - Xây Dựng Todo App

### Bước 1: Thiết Lập Environment
1. **Chọn approach:** Web Agent (dễ hơn) hoặc IDE Agent
2. **Setup Web Agent:**
   - Tạo Gemini Gem mới
   - Copy nội dung `web-build-sample/agent-prompt.txt` vào Instructions
   - Upload tất cả files trong `web-build-sample/`

### Bước 2: Bắt đầu với BMad Orchestrator
**Lệnh đầu tiên:** `/help`
**Tiếp theo:** Chọn option 2 để hiểu method

### Bước 3: Workflow cho Todo App

#### Phase 1: Discovery & Requirements (với PO Agent)
```
/po
Tôi muốn xây dựng một ứng dụng todo list. Giúp tôi tạo PRD.
```

**Agent sẽ làm:**
- Hỏi deep questions về users, use cases
- Research competitors 
- Tạo comprehensive PRD

#### Phase 2: Technical Architecture (với Architect Agent)
```
/architect  
Dựa trên PRD vừa tạo, hãy thiết kế technical architecture cho todo app.
```

**Agent sẽ làm:**
- Analyze requirements từ PRD
- Propose tech stack
- Design system architecture
- Create technical specification

#### Phase 3: UI/UX Design (với Design Architect)
```
/design-architect
Thiết kế UI/UX cho todo app dựa trên PRD và technical architecture.
```

#### Phase 4: Project Planning (với Scrum Master)
```
/sm
Break down dự án todo app thành user stories và sprints.
```

#### Phase 5: Development Guidance
- Sử dụng various agents để get specific help
- Example: `/architect` cho technical questions
- `/pm` cho project coordination

### Bước 4: Execution Tips

**Best Practices:**
1. **Luôn bắt đầu với `/help`** để hiểu current context
2. **Sử dụng `/agent-list`** để see available agents
3. **Interactive mode** (default) tốt hơn YOLO mode
4. **`/doc-out`** để get full documents
5. **`/exit`** về BMad Orchestrator khi cần switch context

**Common Commands:**
- `/tasks` - xem tasks available cho current agent
- `/bmad {query}` - hỏi BMad Orchestrator bất cứ lúc nào
- `/{agent} {query}` - hỏi agent khác nhanh

## Phần VI: Tại Sao BMAD Method Hiệu Quả

### 1. Specialization Over Generalization
- Thay vì 1 AI làm tất cả → Team of specialists
- Mỗi agent focused on specific domain expertise
- Output quality cao hơn vì specialized knowledge

### 2. Structured Workflow
- From "vibe coding" → systematic approach  
- Clear handoffs between phases
- Built-in quality checks (checklists)

### 3. Consistency & Scalability
- Templates ensure consistent output format
- Knowledge base provides shared context
- Method có thể scale cho projects lớn

### 4. Flexibility
- Orchestrator có thể adapt theo project needs
- Tasks system cho specific requirements
- Customizable theo team preferences

## Phần VII: Level Up Việc Sử Dụng AI

### Mindset Shift Cần Thiết:

**Từ:** "AI, hãy code cho tôi một todo app"
**Thành:** "Tôi cần PO agent research requirements, architect agent thiết kế system, SM agent break down tasks..."

**Từ:** Treat AI như coding assistant  
**Thành:** Treat AI như professional team members với specialized roles

**Từ:** Ad-hoc requests
**Thành:** Structured workflow với clear handoffs

### Advanced Techniques:

1. **Agent Chaining:** PO → Architect → SM → Dev
2. **Context Switching:** Switch agents theo phase của project
3. **Quality Gates:** Sử dụng checklists tại mỗi deliverable
4. **Knowledge Management:** Build up data/ folder theo domain expertise

## Kết Luận

BMAD Method không chỉ là tool - đây là paradigm shift trong cách collaborate với AI. Thay vì sử dụng AI như một "smart autocomplete", bạn đang build một agile team với AI members, mỗi member có specialized expertise.

**Next Steps:**
1. Setup Web Agent và thử workflow với todo app
2. Experiment với different agents và observe output quality  
3. Customize templates/checklists theo needs của bạn
4. Scale up cho projects phức tạp hơn

Chúc bạn thành công trong journey nâng cấp AI collaboration skills!