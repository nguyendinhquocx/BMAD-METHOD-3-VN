# Nhiệm Vụ Create Frontend Architecture

## Mục Đích

Để định nghĩa technical architecture cho frontend application. Điều này bao gồm selecting appropriate patterns, structuring codebase, defining component strategy, planning state management, outlining API interactions, và setting up testing và deployment approaches, tất cả trong khi adhering với guidelines trong `front-end-architecture-tmpl` template.

## Inputs

- Product Requirements Document (PRD) (`prd-tmpl` hoặc equivalent)
- Completed UI/UX Specification (`front-end-spec-tmpl` hoặc equivalent)
- Main System Architecture Document (`architecture` hoặc equivalent) - Agent executing nhiệm vụ này nên particularly note overall system structure (Monorepo/Polyrepo, backend service architecture) detailed ở đây, vì nó influences frontend patterns.
- Primary Design Files (Figma, Sketch, v.v., linked từ UI/UX Spec)

## Key Activities & Instructions

### 1. Confirm Interaction Mode

- Hỏi user: "Bạn muốn proceed với creating frontend architecture như thế nào? Chúng ta có thể làm việc:
  A. **Incrementally (Default & Recommended):** Chúng ta sẽ đi qua từng architectural decision và document section step-by-step. Tôi sẽ present drafts, và chúng ta sẽ seek feedback và confirmation của bạn trước khi moving đến next part. Điều này tốt nhất cho complex decisions và detailed refinement.
  B. **"YOLO" Mode:** Tôi có thể produce comprehensive initial draft hơn của frontend architecture để bạn review broadly hơn first. Chúng ta sau đó có thể iterate trên specific sections dựa trên feedback của bạn. Điều này có thể nhanh hơn để generating initial ideas nhưng generally không recommended nếu detailed collaboration ở mỗi step được preferred."
- Request user select preferred mode của họ (ví dụ: "Please let me know if you'd prefer A or B.").
- Once user chooses, confirm selected mode (ví dụ: "Okay, chúng ta sẽ proceed trong Incremental mode."). Chosen mode này sẽ govern cách subsequent steps được executed.

### 2. Review Inputs & Establish Context

- Thoroughly review inputs, bao gồm UI/UX Specification và main Architecture Document (đặc biệt "Definitive Tech Stack Selections", API contracts, và documented overall system structure như monorepo/polyrepo choices).
- Hỏi clarifying questions để bridge bất kỳ gaps nào giữa UI/UX vision và overall system architecture.

### 3. Define Overall Frontend Philosophy & Patterns (cho `front-end-architecture`)

- Dựa trên main architecture's tech stack và overall system structure (monorepo/polyrepo, backend service details), confirm và detail:
  - Framework & Core Libraries choices.
  - High-level Component Architecture strategy.
  - High-level State Management Strategy.
  - Data Flow principles.
  - Styling Approach.
  - Key Design Patterns được employed.

### 4. Specify Detailed Frontend Directory Structure (cho `front-end-architecture`)

- Collaboratively define hoặc refine frontend-specific directory structure, ensuring nó aligns với chosen framework và promotes modularity và scalability.

### 5. Outline Component Strategy & Conventions (cho `front-end-architecture`)

- Define Component Naming & Organization conventions.
- Establish "Template for Component Specification" (như per `front-end-architecture`), emphasizing rằng most components sẽ được detailed emergently nhưng phải follow template này.
- Optionally, specify một vài absolutely foundational/shared UI components (ví dụ: generic Button hoặc Modal wrapper nếu chosen UI library needs one, hoặc nếu no UI library được used).

### 6. Detail State Management Setup & Conventions (cho `front-end-architecture`)

- Dựa trên high-level strategy, detail:
  - Chosen Solution và core setup.
  - Conventions cho Store Structure / Slices (ví dụ: "feature-based slices"). Define bất kỳ genuinely global/core slices nào (ví dụ: session/auth).
  - Conventions cho Selectors và Actions/Reducers/Thunks. Provide templates hoặc examples.

### 7. Plan API Interaction Layer (cho `front-end-architecture`)

- Define HTTP Client Setup.
- Establish patterns cho Service Definitions (cách API calls sẽ được encapsulated).
- Outline frontend Error Handling & Retry strategies cho API calls.

### 8. Define Routing Strategy (cho `front-end-architecture`)

- Confirm Routing Library.
- Collaboratively define main Route Definitions và bất kỳ Route Guards nào.

### 9. Specify Build, Bundling, và Deployment Details (cho `front-end-architecture`)

- Outline frontend-specific Build Process & Scripts.
- Discuss và document Key Bundling Optimizations.
- Confirm Deployment đến CDN/Hosting details relevant cho frontend.

### 10. Refine Frontend Testing Strategy (cho `front-end-architecture`)

- Elaborate trên main testing strategy với specifics cho: Component Testing, UI Integration/Flow Testing, và E2E UI Testing scope và tools.

### 11. Outline Performance Considerations (cho `front-end-architecture`)

- List key frontend-specific performance strategies được employed.

### 12. Document Drafting & Confirmation (Guided bởi `front-end-architecture-tmpl`)

- **Nếu "Incremental Mode" được selected:**

  - Cho mỗi relevant section của `front-end-architecture` (như outlined trong steps 3-11 above, covering topics từ Overall Philosophy đến Performance Considerations):

    - **a. Explain Purpose & Draft Section:** Explain purpose của section và present draft cho section đó.
    - **b. Initial Discussion & Feedback:** Discuss draft với user, incorporate feedback của họ, và iterate như needed cho initial revisions.
    - **c. [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)**

    - **d. Final Approval & Documentation:** Obtain explicit user approval cho section. Ensure tất cả placeholder links và references được correctly noted trong mỗi section. Sau đó proceed đến next section.

  - Once tất cả sections individually approved thông qua process này, confirm với user rằng overall `front-end-architecture` document được populated và ready cho Step 13 (Epic/Story Impacts) và sau đó checklist review (Step 14).

- **Nếu "YOLO Mode" được selected:**
  - Collaboratively populate tất cả relevant sections của `front-end-architecture-tmpl` (như outlined trong steps 3-11 above) để create comprehensive first draft.
  - Present complete draft của `front-end-architecture` cho user để holistic review.
  - <important_note>Sau khi presenting full draft trong YOLO mode, bạn CÓ THỂ vẫn offer condensed version của 'Advanced Reflective & Elicitation Options' menu, có lẽ focused trên một vài key overarching review actions (ví dụ: overall requirements alignment, major risk assessment) nếu user wishes perform structured deep dive trước detailed section-by-section feedback.</important_note>
  - Obtain explicit user approval cho entire `front-end-architecture` document trước khi proceeding đến Step 13 (Epic/Story Impacts) và sau đó checklist review (Step 14).

### 13. Identify & Summarize Epic/Story Impacts (Frontend Focus)

- Sau khi `front-end-architecture` được confirmed, review nó trong context của existing epics và user stories (nếu provided hoặc known).
- Identify bất kỳ frontend-specific technical tasks nào có thể cần được added như new stories hoặc sub-tasks (ví dụ: "Implement responsive layout cho product details page dựa trên defined breakpoints," "Set up X state management slice cho user profile," "Develop reusable Y component như per specification").
- Identify nếu bất kỳ existing user stories nào require refinement của acceptance criteria của họ do frontend architectural decisions (ví dụ: specifying interaction details, component usage, hoặc performance considerations cho UI elements).
- Collaborate với user để define additions hoặc refinements này.
- Prepare concise summary detailing tất cả proposed additions, updates, hoặc modifications đến epics và user stories related đến frontend. Nếu no changes được identified, explicitly state điều này (ví dụ: "No direct impacts trên existing epics/stories được identified từ frontend architecture").

### 14. Checklist Review và Finalization

- Once `front-end-architecture` đã được populated và reviewed với user, và epic/story impacts đã được summarized, use `frontend-architecture-checklist`.
- Go thông qua mỗi item trong checklist để ensure `front-end-architecture` comprehensive và tất cả sections adequately addressed - cho mỗi checklist item bạn PHẢI consider nếu nó really complete hoặc deficient.
- Cho mỗi checklist section, confirm status của nó (ví dụ: \[x] Completed, \[ ] N/A, \[!] Needs Attention).
- Nếu deficiencies hoặc areas needing more detail được identified với section:
  - Discuss những này với user.
  - Collaboratively make necessary updates hoặc additions đến `front-end-architecture`.
- Sau khi addressing tất cả points và ensuring document robust, present summary của checklist review cho user. Summary này nên highlight:
  - Confirmation rằng tất cả relevant sections của checklist đã được satisfied.
  - Bất kỳ items nào marked N/A và brief reason.
  - Brief note trên bất kỳ significant discussions hoặc changes nào made như result của checklist review.
- Goal là ensure `front-end-architecture` complete và actionable document.

## Offer Advanced Self-Refinement & Elicitation Options

(Section này được called khi needed prior đến này)

Present user với following list của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Explain rằng những này optional steps để help ensure quality, explore alternatives, và deepen understanding của current section trước khi finalizing nó và moving on. User có thể select action by number, hoặc choose skip điều này và proceed finalize section.

"Để ensure quality của current section: **[Specific Section Name]** và ensure robustness của nó, explore alternatives, và consider tất cả angles, tôi có thể perform bất kỳ following actions nào. Please choose number (8 để finalize và proceed):

**Advanced Reflective, Elicitation & Brainstorming Actions I Can Take:**

{Instruction cho AI Agent: Display title của mỗi numbered item below. Nếu user asks what specific option means, provide brief explanation của action bạn sẽ take, drawing từ detailed descriptions tailored cho context.}

1. **Critical Self-Review & User Goal Alignment**
2. **Generate & Evaluate Alternative Design Solutions**
3. **User Journey & Interaction Stress Test (Conceptual)**
4. **Deep Dive into Design Assumptions & Constraints**
5. **Usability & Accessibility Audit Review & Probing Questions**
6. **Collaborative Ideation & UI Feature Brainstorming**
7. **Elicit 'Unforeseen User Needs' & Future Interaction Questions**
8. **Finalize this Section and Proceed.**

Sau khi tôi perform selected action, chúng ta có thể discuss outcome và decide trên bất kỳ further revisions nào cho section này."

REPEAT bằng cách Asking user nếu họ muốn perform another Reflective, Elicitation & Brainstorming Action UNTIL user indicates it is time để proceed đến next section (hoặc selects #8)