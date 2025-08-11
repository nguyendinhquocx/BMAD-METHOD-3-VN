# Nhiệm Vụ Correct Course

## Mục Đích

- Hướng dẫn phản hồi có cấu trúc cho change trigger sử dụng `change-checklist`.
- Phân tích impacts của thay đổi trên epics, project artifacts, và MVP, được hướng dẫn bởi cấu trúc checklist.
- Khám phá potential solutions (ví dụ: điều chỉnh scope, rollback elements, rescope features) như được prompted bởi checklist.
- Soạn thảo specific, actionable proposed updates cho bất kỳ affected project artifacts nào (ví dụ: epics, user stories, PRD sections, architecture document sections) dựa trên analysis.
- Tạo ra "Sprint Change Proposal" document consolidated chứa impact analysis và clearly drafted proposed edits để user review và approval.
- Đảm bảo clear handoff path nếu bản chất của thay đổi cần fundamental replanning bởi other core agents (như PM hoặc Architect).

## Hướng Dẫn

### 1. Initial Setup & Mode Selection

- **Acknowledge Task & Inputs:**
  - Xác nhận với user rằng "Correct Course Task" (Change Navigation & Integration) đang được khởi tạo.
  - Verify change trigger và đảm bảo bạn có giải thích ban đầu của user về issue và perceived impact của nó.
  - Xác nhận quyền truy cập vào tất cả relevant project artifacts (ví dụ: PRD, Epics/Stories, Architecture Documents, UI/UX Specifications) và, quan trọng, `change-checklist` (ví dụ: `change-checklist`).
- **Establish Interaction Mode:**
  - Hỏi user preferred interaction mode của họ cho nhiệm vụ này:
    - **"Incrementally (Default & Recommended):** Chúng ta sẽ làm việc qua `change-checklist` từng section, thảo luận findings và collaboratively drafting proposed changes cho mỗi relevant part trước khi chuyển sang tiếp theo? Điều này cho phép detailed, step-by-step refinement."
    - **"YOLO Mode (Batch Processing):** Hoặc, bạn có muốn tôi conduct analysis batched hơn dựa trên checklist và sau đó trình bày consolidated set của findings và proposed changes để broader review không? Điều này có thể nhanh hơn cho initial assessment nhưng có thể yêu cầu extensive review hơn của combined proposals."
  - Yêu cầu user chọn preferred mode của họ.
  - Một khi user chọn, xác nhận selected mode (ví dụ: "Okay, chúng ta sẽ tiến hành trong Incremental mode."). Chosen mode này sẽ govern cách subsequent steps trong nhiệm vụ này được thực thi.
- **Explain Process:** Briefly inform user: "Chúng ta bây giờ sẽ sử dụng `change-checklist` để analyze thay đổi và draft proposed updates. Tôi sẽ hướng dẫn bạn qua checklist items dựa trên chosen interaction mode của chúng ta."
  <rule>Khi hỏi multiple questions hoặc trình bày multiple points cho user input cùng lúc, đánh số chúng rõ ràng (ví dụ: 1., 2a., 2b.) để làm cho user dễ dàng cung cấp specific responses hơn.</rule>

### 2. Execute Checklist Analysis (Iteratively hoặc Batched, theo Interaction Mode)

- Systematically làm việc qua Sections 1-4 của `change-checklist` (typically covering Change Context, Epic/Story Impact Analysis, Artifact Conflict Resolution, và Path Evaluation/Recommendation).
- Cho mỗi checklist item hoặc logical group của items (depending on interaction mode):
  - Trình bày relevant prompt(s) hoặc considerations từ checklist cho user.
  - Yêu cầu necessary information và actively analyze relevant project artifacts (PRD, epics, architecture documents, story history, v.v.) để assess impact.
  - Thảo luận findings của bạn cho mỗi item với user.
  - Ghi chép status của mỗi checklist item (ví dụ: `[x] Addressed`, `[N/A]`, `[!] Further Action Needed`) và bất kỳ pertinent notes hoặc decisions nào.
  - Collaboratively đồng ý về "Recommended Path Forward" như được prompted bởi Section 4 của checklist.

### 3. Draft Proposed Changes (Iteratively hoặc Batched)

- Dựa trên completed checklist analysis (Sections 1-4) và agreed "Recommended Path Forward" (excluding scenarios requiring fundamental replans sẽ necessitate immediate handoff cho PM/Architect):
  - Xác định specific project artifacts cần updates (ví dụ: specific epics, user stories, PRD sections, architecture document components, diagrams).
  - **Draft proposed changes directly và explicitly cho mỗi identified artifact.** Ví dụ bao gồm:
    - Revising user story text, acceptance criteria, hoặc priority.
    - Adding, removing, reordering, hoặc splitting user stories trong epics.
    - Proposing modified architecture diagram snippets (ví dụ: cung cấp updated Mermaid diagram block hoặc clear textual description của thay đổi cho existing diagram).
    - Updating technology lists, configuration details, hoặc specific sections trong PRD hoặc architecture documents.
    - Drafting new, small supporting artifacts nếu necessary (ví dụ: brief addendum cho specific decision).
  - Nếu trong "Incremental Mode," thảo luận và refine những proposed edits này cho mỗi artifact hoặc small group của related artifacts với user khi chúng được drafted.
  - Nếu trong "YOLO Mode," compile tất cả drafted edits để presentation trong next step.

### 4. Generate "Sprint Change Proposal" với Edits

- Synthesize complete `change-checklist` analysis (covering findings từ Sections 1-4) và tất cả agreed-upon proposed edits (từ Instruction 3) thành single document có tiêu đề "Sprint Change Proposal." Proposal này nên align với structure được suggested bởi Section 5 của `change-checklist` (Proposal Components).
- Proposal phải clearly present:
  - **Analysis Summary:** Concise overview của original issue, analyzed impact của nó (trên epics, artifacts, MVP scope), và rationale cho chosen path forward.
  - **Specific Proposed Edits:** Cho mỗi affected artifact, clearly show hoặc describe exact changes (ví dụ: "Change Story X.Y from: [old text] To: [new text]", "Add new Acceptance Criterion to Story A.B: [new AC]", "Update Section 3.2 of Architecture Document as follows: [new/modified text hoặc diagram description]").
- Trình bày complete draft của "Sprint Change Proposal" cho user để final review và feedback. Incorporate bất kỳ final adjustments nào được requested bởi user.

### 5. Finalize & Determine Next Steps

- Obtain explicit user approval cho "Sprint Change Proposal," bao gồm tất cả specific edits được documented trong đó.
- Cung cấp finalized "Sprint Change Proposal" document cho user.
- **Dựa trên nature của approved changes:**
  - **Nếu approved edits sufficiently address thay đổi và có thể được implemented directly hoặc organized bởi PO/SM:** State rằng "Correct Course Task" complete regarding analysis và change proposal, và user có thể bây giờ proceed với implementing hoặc logging những changes này (ví dụ: updating actual project documents, backlog items). Suggest handoff cho PO/SM agent để backlog organization nếu thích hợp.
  - **Nếu analysis và proposed path (như per checklist Section 4 và potentially Section 6) indicate rằng thay đổi requires fundamental replan hơn (ví dụ: significant scope change, major architectural rework):** Clearly state conclusion này. Advise user rằng next step involves engaging primary PM hoặc Architect agents, sử dụng "Sprint Change Proposal" như critical input và context cho deeper replanning effort đó.

## Output Deliverables

- **Primary:** "Sprint Change Proposal" document (trong markdown format). Document này sẽ chứa:
  - Summary của `change-checklist` analysis (issue, impact, rationale cho chosen path).
  - Specific, clearly drafted proposed edits cho tất cả affected project artifacts.
- **Implicit:** Annotated `change-checklist` (hoặc record của completion của nó) reflecting discussions, findings, và decisions được đưa ra trong process.