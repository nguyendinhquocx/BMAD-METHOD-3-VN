# Hướng Dẫn BMAD Method Chi Tiết
## Build, Measure, Analyze, Decide - Phương pháp phát triển phần mềm với AI Agents

---

## 📋 Tổng Quan

**BMAD Method** là một phương pháp phát triển phần mềm có cấu trúc, sử dụng nhiều AI Agents chuyên biệt để thực hiện từng giai đoạn của dự án. Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, BMAD đảm bảo chất lượng và tính nhất quán thông qua quy trình chuẩn hóa.

### Đặc điểm chính:
- **Phân chia vai trò rõ ràng**: Mỗi AI Agent có chuyên môn riêng
- **Quy trình có cấu trúc**: Từng bước có input/output cụ thể  
- **Kiểm soát chất lượng**: Checklist và validation ở mỗi giai đoạn
- **Tích hợp với Claude Code**: Tự động hóa implementation

---

## 🏗️ Cấu Trúc Hệ Thống Spaces

### Vấn đề với Single Space
- GitHub Copilot Space có giới hạn dung lượng
- File `tasks.txt` chiếm 47% dung lượng
- Tổng cộng 6 files = 144% > 100% giới hạn

### Giải pháp: Hệ thống Spaces Phân Cấp

```
BMAD-Main (Trung tâm điều hành)
    ├── BMAD-Planning (Lập kế hoạch)
    ├── BMAD-Architecture (Thiết kế)
    ├── BMAD-Development (Phát triển)
    └── BMAD-Operations (Vận hành)
```

---

## 🎯 Chi Tiết Từng Space

### 🏠 BMAD-Main (Space Chính)
**Mục đích**: Điểm khởi đầu và điều phối toàn bộ hệ thống

**Nội dung (40-50% dung lượng):**
- `agent-config-main.txt`: Danh sách agents cơ bản
- `bmad-overview.txt`: Giới thiệu phương pháp
- `workflow-guide.txt`: Hướng dẫn quy trình tổng thể
- `space-navigator.txt`: Links đến các spaces khác
- `personas-core.txt`: BMAD Orchestrator persona

**Ai sử dụng**: 
- Project Manager
- Team Lead
- Người mới bắt đầu với BMAD

### 📋 BMAD-Planning (Space Lập Kế Hoạch)  
**Mục đích**: Từ ý tưởng đến requirements hoàn chỉnh

**Nội dung (70-80% dung lượng):**
- `personas-planning.txt`: Analyst, PM personas
- `templates-planning.txt`: PRD template, project brief template  
- `checklists-planning.txt`: PM checklist, change checklist
- `tasks-planning.txt`: Brainstorming, research tasks
- `planning-workflows.txt`: Quy trình chi tiết

**Ai sử dụng**:
- Business Analyst  
- Product Manager
- Stakeholders

### 🏗️ BMAD-Architecture (Space Thiết Kế)
**Mục đích**: Từ requirements đến technical design

**Nội dung (80-90% dung lượng):**
- `personas-architecture.txt`: Architect, Design Architect personas
- `templates-architecture.txt`: Architecture, frontend templates
- `checklists-architecture.txt`: Architecture validation
- `tasks-architecture.txt`: Design, tech selection tasks  
- `patterns-library.txt`: Thư viện patterns thường dùng

**Ai sử dụng**:
- Solution Architect
- Technical Lead
- UI/UX Designer

### 💻 BMAD-Development (Space Phát Triển)
**Mục đích**: Từ design đến development-ready stories

**Nội dung (90-95% dung lượng):**
- `personas-development.txt`: PO, SM, Developer personas
- `templates-development.txt`: Story, DoD templates
- `checklists-development.txt`: Story validation
- `tasks-development.txt`: Story creation, dev tasks
- `dev-guidelines.txt`: Coding standards

**Ai sử dụng**:
- Product Owner
- Scrum Master  
- Development Team
- AI Developer Agents

### ⚙️ BMAD-Operations (Space Vận Hành)
**Mục đích**: DevOps, deployment, monitoring

**Nội dung (60-70% dung lượng):**
- `personas-operations.txt`: Platform Engineer persona
- `checklists-operations.txt`: Infrastructure checklist  
- `tasks-operations.txt`: DevOps, monitoring tasks
- `operational-guides.txt`: Production guidelines
- `troubleshooting.txt`: Xử lý sự cố

**Ai sử dụng**:
- DevOps Engineer
- Platform Engineer
- Operations Team

---

## 🔄 Quy Trình BMAD Chi Tiết

### Giai Đoạn 1: Planning (BMAD-Planning Space)

#### Bước 1.1: Brainstorming với Analyst
**Input**: Ý tưởng/requirement ban đầu

**Quy trình**:
1. Mở BMAD-Planning space
2. Activate Analyst persona (Mary)
3. Chạy brainstorming session
4. Khám phá ý tưởng, xác định vấn đề cốt lõi
5. Nghiên cứu thị trường, competitors

**Output**:
- `project-insights.md`: Tóm tắt insights chính
- `research-findings.md`: Kết quả nghiên cứu
- `problem-definition.md`: Định nghĩa vấn đề rõ ràng

#### Bước 1.2: Deep Research (Tùy chọn)
**Input**: Kết quả brainstorming

**Quy trình**:
1. Analyst tạo deep research prompt  
2. Thực hiện nghiên cứu sâu về:
   - Technical feasibility
   - Market opportunities  
   - Competitive landscape
   - User needs

**Output**:
- `deep-research-report.md`: Báo cáo nghiên cứu chi tiết

#### Bước 1.3: PRD Creation với PM
**Input**: Research findings, problem definition

**Quy trình**:
1. Activate PM persona (John)
2. Sử dụng PRD template
3. Định nghĩa:
   - Goals & success metrics
   - Target users & personas
   - Functional requirements
   - Non-functional requirements  
   - MVP scope
   - Technical constraints
4. Validate với PM checklist

**Output**:
- `PRD.md`: Product Requirements Document hoàn chỉnh
- `epics-overview.md`: Tổng quan các epics
- `mvp-scope.md`: Phạm vi MVP rõ ràng

**Điều kiện chuyển giai đoạn**: PRD pass qua PM checklist

---

### Giai Đoạn 2: Architecture (BMAD-Architecture Space)

#### Bước 2.1: System Architecture với Architect  
**Input**: PRD.md, epics-overview.md

**Quy trình**:
1. Chuyển sang BMAD-Architecture space
2. Activate Architect persona (Fred)  
3. Analyze PRD requirements
4. Thiết kế:
   - Overall system architecture
   - Technology stack selection
   - Component design
   - Data architecture
   - API specifications
   - Security architecture
5. Validate với Architecture checklist

**Output**:
- `architecture.md`: System architecture document
- `tech-stack.md`: Definitive technology choices
- `data-models.md`: Database schemas
- `api-specifications.md`: API contracts

#### Bước 2.2: Frontend Architecture với Design Architect
**Input**: System architecture, PRD UI requirements  

**Quy trình**:
1. Activate Design Architect persona (Jane)
2. Thiết kế frontend architecture:
   - Component structure
   - State management
   - UI/UX specifications
   - Frontend build strategy
3. Validate với Frontend checklist

**Output**:
- `frontend-architecture.md`: Frontend architecture
- `ui-specifications.md`: UI/UX design specs  
- `component-library.md`: Component specifications

#### Bước 2.3: Infrastructure Architecture với Platform Engineer
**Input**: System architecture, deployment requirements

**Quy trình**:
1. Activate Platform Engineer persona (Alex)
2. Thiết kế infrastructure:
   - Cloud architecture
   - CI/CD pipeline
   - Monitoring strategy
   - Security implementation
3. Validate với Infrastructure checklist

**Output**:
- `infrastructure-architecture.md`: Cloud & DevOps architecture  
- `deployment-strategy.md`: Deployment approach
- `monitoring-strategy.md`: Observability plan

**Điều kiện chuyển giai đoạn**: Tất cả architecture docs pass validation

---

### Giai Đoạn 3: Development Planning (BMAD-Development Space)

#### Bước 3.1: Epic Breakdown với PO
**Input**: PRD, Architecture documents

**Quy trình**:
1. Chuyển sang BMAD-Development space  
2. Activate PO persona (Sarah)
3. Breakdown PRD thành detailed epics:
   - Epic 1: Project setup & infrastructure
   - Epic 2: Core backend services
   - Epic 3: Frontend implementation
   - Epic 4: Integration & testing
4. Validate với PO Master checklist

**Output**:
```
epics/
├── epic-01-setup.md
├── epic-02-backend.md  
├── epic-03-frontend.md
└── epic-04-integration.md
```

#### Bước 3.2: Story Creation với SM
**Input**: Epic documents, architecture specifications

**Quy trình**:
1. Activate SM persona (Bob)
2. Với mỗi epic, tạo detailed stories:
   - Story goal & context
   - Acceptance criteria  
   - Technical implementation guidance
   - Testing requirements
   - Dependencies & sequencing
3. Validate với Story Draft checklist

**Output**:
```
stories/
├── epic-01/
│   ├── story-001-project-setup.md
│   ├── story-002-database-setup.md
│   └── story-003-ci-cd-setup.md
├── epic-02/
│   ├── story-004-api-framework.md
│   ├── story-005-authentication.md
│   └── story-006-core-services.md
└── ...
```

**Điều kiện chuyển giai đoạn**: Tất cả stories pass Story Draft checklist

---

### Giai Đoạn 4: Implementation với Claude Code

#### Setup Claude Code Environment
```bash
# Install Claude Code CLI
npm install -g @anthropic/claude-code

# Initialize project workspace  
claude-code init my-project

# Load BMAD configurations
claude-code config load bmad-development-config.json
```

#### Story Implementation Loop

##### Bước 4.1: Story Assignment
```bash
# Assign story to Claude Code
claude-code story start stories/epic-01/story-001-project-setup.md
```

##### Bước 4.2: Claude Code Analysis
Claude Code tự động:
1. **Read & Parse Story**: Hiểu requirements, acceptance criteria
2. **Reference Architecture**: Load architecture docs, patterns  
3. **Dependency Analysis**: Xác định prerequisites
4. **Create Implementation Plan**: Chi tiết steps to implement

##### Bước 4.3: Automated Implementation  
Claude Code thực hiện:
```bash
# Tạo project structure
mkdir -p src/{backend,frontend,shared} tests docs

# Install dependencies từ tech-stack specifications
npm init && npm install express react typescript mongoose

# Generate boilerplate code theo architecture patterns
# Implement actual functionality theo story requirements
# Create comprehensive tests
# Update documentation
```

##### Bước 4.4: Quality Validation
Claude Code tự động validate:
```bash
# Run all tests
npm test

# Check code quality
npm run lint
npm run type-check  

# Verify functionality
npm run dev

# Security scan
npm audit

# Performance check
npm run perf-test
```

##### Bước 4.5: Story Completion
Claude Code:
1. Mark story tasks complete
2. Update story file với implementation notes
3. Generate changelog entry
4. Commit code với proper message  
5. Prepare handoff notes for next story

**Output sau mỗi story**:
```
✅ Working code implementation
✅ All tests passing (unit, integration)
✅ Code meets quality standards
✅ Documentation updated
✅ Story marked complete
📝 Handoff notes for next story
```

#### Parallel Development Strategy
```bash
# Multiple Claude Code instances có thể chạy parallel
claude-code story start epic-01/story-001 --agent backend-dev
claude-code story start epic-01/story-003 --agent frontend-dev  
claude-code story start epic-02/story-004 --agent fullstack-dev
```

---

## 🔗 Liên Kết Giữa Các Spaces

### Cross-Reference System
Mỗi space có file `_navigation.txt`:

```markdown
# BMAD Navigation
📍 Space hiện tại: BMAD-Planning

🔗 Related Spaces:
- 🏠 Main Hub: [BMAD-Main](link-to-main-space)
- 🏗️ Architecture: [BMAD-Architecture](link-to-arch-space)
- 💻 Development: [BMAD-Development](link-to-dev-space)  
- ⚙️ Operations: [BMAD-Operations](link-to-ops-space)

📋 Phase hiện tại: Planning & Analysis
➡️ Phase tiếp theo: Architecture Design
   👉 Chuyển sang BMAD-Architecture space
   📎 Cần attach: PRD.md, epics-overview.md
```

### Handoff Protocols
```markdown
# Handoff từ Planning sang Architecture
✅ PRD completed và validated với PM checklist
✅ Epics được định nghĩa rõ ràng  
✅ MVP scope được confirm
✅ Technical constraints được identify

➡️ Action: Switch sang BMAD-Architecture space
📎 Required attachments:
   - PRD.md
   - epics-overview.md
   - technical-constraints.md
   
👤 Next agent: Architect (Fred)
🎯 Next task: System Architecture Design
```

---

## 📊 Tracking Progress & Quality

### Progress Tracking
```markdown
# Project Status Dashboard

## Overall Progress: 45%
- ✅ Planning Phase: Complete
- ✅ Architecture Phase: Complete  
- 🔄 Development Phase: In Progress (45%)
- ⏳ Operations Phase: Pending

## Current Epic: Epic-02 Backend Services
- ✅ Story 004: API Framework Setup
- ✅ Story 005: Authentication System
- 🔄 Story 006: Core Services (60%)
- ⏳ Story 007: Data Validation  
- ⏳ Story 008: Error Handling

## Metrics
- Stories Completed: 12/28
- Test Coverage: 87%
- Code Quality Score: A+
- Performance Benchmarks: ✅ Pass
```

### Quality Gates
Mỗi giai đoạn phải pass quality gates:

**Planning Quality Gate:**
- ✅ PRD complete với PM checklist
- ✅ User personas defined
- ✅ MVP scope clear
- ✅ Technical constraints identified

**Architecture Quality Gate:**  
- ✅ System architecture complete
- ✅ Tech stack finalized
- ✅ API specifications defined
- ✅ Security architecture reviewed

**Development Quality Gate:**
- ✅ All stories pass DoD checklist
- ✅ Code coverage > 80%
- ✅ Performance benchmarks met
- ✅ Security scan passed

---

## ⚠️ Xử Lý Vấn Đề Thường Gặp

### Context Switching giữa Spaces
**Vấn đề**: Mất context khi chuyển spaces

**Giải pháp**:
- Sử dụng handoff protocols rõ ràng
- Include summary of previous work
- Cross-reference relevant documents
- Maintain shared glossary

### Information Fragmentation  
**Vấn đề**: Thông tin bị phân tán

**Giải pháp**:
- Central navigation trong mỗi space
- Consistent file naming conventions
- Cross-space reference links
- Summary documents

### Learning Curve
**Vấn đề**: Phức tạp cho người mới

**Giải pháp**:  
- Comprehensive onboarding guide trong BMAD-Main
- Step-by-step tutorials
- Template examples
- FAQ section

### Story Dependencies
**Vấn đề**: Stories phụ thuộc lẫn nhau

**Giải pháp**:
- Clear dependency mapping
- Sequential story numbering  
- Prerequisite checking trong Claude Code
- Parallel development planning

---

## 🎯 Best Practices

### Khi Bắt Đầu Dự Án Mới
1. **Luôn bắt đầu từ BMAD-Main space**
2. **Đọc kỹ workflow-guide và space-navigator**  
3. **Follow quy trình tuần tự: Planning → Architecture → Development**
4. **Không skip quality gates**

### Khi Làm Việc với Claude Code
1. **Đảm bảo stories đã pass Story Draft checklist**
2. **Load đầy đủ architecture documents**
3. **Set up proper development environment**
4. **Regular testing và validation**

### Khi Handoff giữa Spaces
1. **Complete checklist của space hiện tại**  
2. **Prepare handoff documents**
3. **Update progress tracking**
4. **Inform team members về status change**

### Quality Assurance
1. **Run checklists ở mỗi giai đoạn**
2. **Peer review major decisions**  
3. **Regular retrospectives**
4. **Continuous improvement của process**

---

## 📚 Tài Liệu Tham Khảo

### Files Cấu Hình Chính
- `agent-config.txt`: Định nghĩa tất cả agents
- `personas.txt`: Chi tiết personas của agents
- `tasks.txt`: Task definitions cho mỗi agent  
- `templates.txt`: Templates cho documents
- `checklists.txt`: Quality validation checklists
- `data.txt`: Knowledge base và references

### Architecture Documents
- `architecture.md`: System architecture
- `frontend-architecture.md`: Frontend specifications
- `infrastructure-architecture.md`: DevOps architecture  

### Development Artifacts
- `PRD.md`: Product Requirements
- `epic-*.md`: Epic definitions
- `story-*.md`: Story specifications

### Quality Artifacts  
- Various checklists cho validation
- DoD (Definition of Done) criteria
- Testing strategies
- Performance benchmarks

---

## 🚀 Kết Luận

BMAD Method cung cấp một framework hoàn chỉnh để phát triển phần mềm với AI assistance. Bằng cách:

- **Chia nhỏ quy trình** thành các giai đoạn rõ ràng
- **Sử dụng AI Agents chuyên biệt** cho từng vai trò  
- **Áp dụng quality gates** ở mỗi bước
- **Tích hợp với Claude Code** cho automation

Bạn có thể đạt được:
- ⚡ **Tốc độ phát triển nhanh**
- 🎯 **Chất lượng code cao**  
- 📋 **Quy trình có cấu trúc**
- 🤖 **Tự động hóa tối đa**

**Bắt đầu từ BMAD-Main space và follow the journey! 🎉**