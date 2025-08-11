# Document Sharding Plan Template

Plan này hướng dẫn agent về cách phân tách large source documents thành smaller, granular files trong Librarian Phase của nó. Agent sẽ refer đến plan này để identify source documents, specific sections để extract, và target filenames cho sharded content.

---

## 1. Source Document: PRD (Project Requirements Document)

- **Note cho Agent:** Confirm exact filename của PRD với user (ví dụ: `PRD.md`, `ProjectRequirements.md`, `prdx.y.z.md`).

### 1.1. Epic Granulation

- **Instruction:** Cho mỗi Epic identified trong PRD:
- **Source Section(s) to Copy:** Complete text cho Epic, bao gồm main description của nó, goals, và tất cả associated user stories hoặc detailed requirements under Epic đó. Ensure capture content starting từ heading như "**Epic X:**" up đến next such heading hoặc end của "Epic Overview" section.
- **Target File Pattern:** `docs/epic-<id>.md`
  - _Agent Note: `<id>` nên correspond với Epic number._

---

## 2. Source Document: Main Architecture Document

- **Note cho Agent:** Confirm exact filename với user (ví dụ: `architecture.md`, `SystemArchitecture.md`).

### 2.1. Core Architecture Granules

- **Source Section(s) to Copy:** Section(s) detailing "API Reference", "API Endpoints", hoặc "Service Interfaces".
- **Target File:** `docs/api-reference.md`

- **Source Section(s) to Copy:** Section(s) detailing "Data Models", "Database Schema", "Entity Definitions".
- **Target File:** `docs/data-models.md`

- **Source Section(s) to Copy:** Section(s) titled "Environment Variables Documentation", "Configuration Settings", "Deployment Parameters", hoặc relevant subsections trong "Infrastructure and Deployment Overview" nếu dedicated section không found.
- **Target File:** `docs/environment-vars.md`

  - _Agent Note: Prioritize dedicated 'Environment Variables' section hoặc linked 'environment-vars.md' source nếu available. Nếu không, extract relevant configuration details từ 'Infrastructure and Deployment Overview'. Shard này cho specific variable definitions và usage._

- **Source Section(s) to Copy:** Section(s) detailing "Project Structure".
- **Target File:** `docs/project-structure.md`

  - _Agent Note: Nếu project involves multiple repositories (không phải monorepo), ensure file này clearly describes structure của mỗi relevant repository hoặc links đến sub-files nếu necessary._

- **Source Section(s) to Copy:** Section(s) detailing "Technology Stack", "Key Technologies", "Libraries and Frameworks", hoặc "Definitive Tech Stack Selections".
- **Target File:** `docs/tech-stack.md`

- **Source Section(s) to Copy:** Sections detailing "Coding Standards", "Development Guidelines", "Best Practices", "Testing Strategy", "Testing Decisions", "QA Processes", "Overall Testing Strategy", "Error Handling Strategy", và "Security Best Practices".
- **Target File:** `docs/operational-guidelines.md`

  - _Agent Note: File này consolidates several key operational aspects. Ensure rằng content từ mỗi source section ("Coding Standards", "Testing Strategy", "Error Handling Strategy", "Security Best Practices") clearly delineated under own H3 (###) hoặc H4 (####) heading trong document này._

- **Source Section(s) to Copy:** Section(s) titled "Component View" (bao gồm sub-sections như "Architectural / Design Patterns Adopted").
- **Target File:** `docs/component-view.md`

- **Source Section(s) to Copy:** Section(s) titled "Core Workflow / Sequence Diagrams" (bao gồm tất cả sub-diagrams).
- **Target File:** `docs/sequence-diagrams.md`

- **Source Section(s) to Copy:** Section(s) titled "Infrastructure and Deployment Overview".
- **Target File:** `docs/infra-deployment.md`

  - _Agent Note: Này cho broader overview, distinct từ specific `docs/environment-vars.md`._

- **Source Section(s) to Copy:** Section(s) titled "Key Reference Documents".
- **Target File:** `docs/key-references.md`

---

## 3. Source Document(s): Front-End Specific Documentation

- **Note cho Agent:** Confirm filenames với user (ví dụ: `front-end-architecture.md`, `front-end-spec.md`, `ui-guidelines.md`). Multiple FE documents có thể exist.

### 3.1. Front-End Granules

- **Source Section(s) to Copy:** Section(s) detailing "Front-End Project Structure" hoặc "Detailed Frontend Directory Structure".
- **Target File:** `docs/front-end-project-structure.md`

- **Source Section(s) to Copy:** Section(s) detailing "UI Style Guide", "Brand Guidelines", "Visual Design Specifications", hoặc "Styling Approach".
- **Target File:** `docs/front-end-style-guide.md`

  - _Agent Note: Section này có thể là sub-section hoặc refer đến other documents (ví dụ: `ui-ux-spec.txt`). Extract core styling philosophy và approach defined trong frontend architecture document chính nó._

- **Source Section(s) to Copy:** Section(s) detailing "Component Library", "Reusable UI Components Guide", "Atomic Design Elements", hoặc "Component Breakdown & Implementation Details".
- **Target File:** `docs/front-end-component-guide.md`

- **Source Section(s) to Copy:** Section(s) detailing "Front-End Coding Standards" (specifically cho UI development, ví dụ: JavaScript/TypeScript style, CSS naming conventions, accessibility best practices cho FE).
- **Target File:** `docs/front-end-coding-standards.md`

  - _Agent Note: Dedicated top-level section cho này có thể không exist. Nếu không found, shard này có thể empty hoặc require cross-referencing với main architecture's coding standards. Extract bất kỳ front-end-specific coding conventions nào mentioned._

- **Source Section(s) to Copy:** Section(s) titled "State Management In-Depth".
- **Target File:** `docs/front-end-state-management.md`

- **Source Section(s) to Copy:** Section(s) titled "API Interaction Layer".
- **Target File:** `docs/front-end-api-interaction.md`

- **Source Section(s) to Copy:** Section(s) titled "Routing Strategy".
- **Target File:** `docs/front-end-routing-strategy.md`

- **Source Section(s) to Copy:** Section(s) titled "Frontend Testing Strategy".
- **Target File:** `docs/front-end-testing-strategy.md`

---

CRITICAL: **Index Management:** Sau khi creating files, update `docs/index.md` như cần để reference và describe mỗi doc - đừng mention granules hoặc nơi nó được sharded từ, chỉ doc purpose - vì index cũng chứa other doc references potentially.