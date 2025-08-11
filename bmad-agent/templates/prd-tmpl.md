# Tài Liệu Yêu Cầu Sản Phẩm (PRD) {{Tên Dự Án}}

[[LLM: Nếu có sẵn, xem xét bất kỳ document nào được cung cấp hoặc hỏi nếu có bất kỳ cái nào optionally available: Project Brief]]

## Goals và Background Context

[[LLM: Populate 2 child sections dựa trên những gì chúng ta đã nhận từ user description hoặc provided brief. Cho phép user review 2 sections và offer changes trước khi proceeding]]

### Goals

[[LLM: Bullet list của 1 line desired outcomes mà PRD sẽ deliver nếu successful - user và project desires]]

### Background Context

[[LLM: 1-2 short paragraphs tóm tắt background context, như những gì chúng ta learned trong brief mà không redundant với goals, gì và tại sao điều này solves problem, current landscape hoặc need là gì v.v...]]

## Requirements

[[LLM: Draft list của functional và non functional requirements under 2 child sections, và immediately execute tasks#advanced-elicitation display]]

### Functional

[[LLM: Mỗi Requirement sẽ là bullet markdown và identifier sequence starting với FR`.]]
@{example: - FR6: Todo List sử dụng AI để detect và warn against adding potentially duplicate todo items được worded differently.}

### Non Functional

[[LLM: Mỗi Requirement sẽ là bullet markdown và identifier sequence starting với NFR`.]]
@{example: - NFR1: AWS service usage **must** aim to stay within free-tier limits where feasible.}

^^CONDITION: has_ui^^

## User Interface Design Goals

[[LLM: Capture high-level UI/UX vision để guide Design Architect và inform story creation. Steps:

1. Pre-fill tất cả subsections với educated guesses based on project context
2. Present complete rendered section cho user
3. Clearly let user know nơi assumptions được made
4. Ask targeted questions cho unclear/missing elements hoặc areas needing more specification
5. Này KHÔNG detailed UI spec - focus trên product vision và user goals
6. Sau section completion, immediately apply `tasks#advanced-elicitation` protocol]]

### Overall UX Vision

### Key Interaction Paradigms

### Core Screens and Views

[[LLM: Từ product perspective, screens hoặc views quan trọng nhất cần thiết để deliver PRD values và goals là gì? Này meant to be Conceptual High Level để Drive Rough Epic hoặc User Stories]]

@{example}

- Login Screen
- Main Dashboard
- Item Detail Page
- Settings Page
  @{/example}

### Accessibility: { None, WCAG, v.v. }

### Branding

[[LLM: Bất kỳ known branding elements hoặc style guides nào phải được incorporated?]]

@{example}

- Replicate look và feel của early 1900s black and white cinema, bao gồm animated effects replicating film damage hoặc projector glitches trong page hoặc state transitions.
- Attached là full color palette và tokens cho corporate branding của chúng ta.
  @{/example}

### Target Device and Platforms

@{example}
"Web Responsive, và tất cả mobile platforms", "iPhone Only", "ASCII Windows Desktop"
@{/example}

^^/CONDITION: has_ui^^

## Technical Assumptions

[[LLM: Gather technical decisions sẽ guide Architect. Steps:

1. Check nếu `data#technical-preferences` file exists - sử dụng nó để pre-populate choices
2. Ask user về: languages, frameworks, starter templates, libraries, APIs, deployment targets
3. Cho unknowns, offer guidance dựa trên project goals và MVP scope
4. Document TẤT CẢ technical choices với rationale (tại sao choice này fits project)
5. Những này become constraints cho Architect - be specific và complete
6. Sau section completion, apply `tasks#advanced-elicitation` protocol.]]

### Repository Structure: { Monorepo, Polyrepo, v.v...}

### Service Architecture

[[LLM: CRITICAL DECISION - Document high-level service architecture (ví dụ: Monolith, Microservices, Serverless functions trong Monorepo).]]

### Testing requirements

[[LLM: CRITICAL DECISION - Document testing requirements, unit only, integration, e2e, manual, need for manual testing convenience methods).]]

### Additional Technical Assumptions and Requests

[[LLM: Trong entire process của drafting document này, nếu bất kỳ other technical assumptions nào raised hoặc discovered appropriate cho architect, add chúng ở đây như additional bulleted items]]

## Epics

[[LLM: First, present high-level list của tất cả epics cho user approval, epic_list và immediately execute tasks#advanced-elicitation display. Mỗi epic nên có title và short (1 sentence) goal statement. Điều này allows user review overall structure trước diving into details.

CRITICAL: Epics PHẢI logically sequential following agile best practices:

- Mỗi epic nên deliver significant, end-to-end, fully deployable increment của testable functionality
- Epic 1 phải establish foundational project infrastructure (app setup, Git, CI/CD, core services) trừ khi chúng ta adding new functionality đến existing app, while also delivering initial piece của functionality, even as simple như health-check route hoặc display của simple canary page
- Mỗi subsequent epic builds upon previous epics' functionality delivering major blocks của functionality cung cấp tangible value cho users hoặc business khi deployed
- Không phải every project needs multiple epics, epic cần deliver value. Ví dụ: API completed có thể deliver value even nếu UI không complete và planned cho separate epic.
- Err on side của less epics, nhưng let user know rationale của bạn và offer options cho splitting chúng nếu seems một số quá large hoặc focused trên disparate things.
- Cross Cutting Concerns nên flow through epics và stories và không phải final stories. Ví dụ: adding logging framework như last story của epic, hoặc at end của project như final epic hoặc story sẽ terrible vì chúng ta sẽ không có logging từ beginning.]]

<<REPEAT: epic_list>>

- Epic{{epic_number}} {{epic_title}}: {{short_goal}}

<</REPEAT>>

@{example: epic_list}

1. Foundation & Core Infrastructure: Establish project setup, authentication, và basic user management
2. Core Business Entities: Create và manage primary domain objects với CRUD operations
3. User Workflows & Interactions: Enable key user journeys và business processes
4. Reporting & Analytics: Provide insights và data visualization cho users

@{/example}

[[LLM: Sau epic list được approved, present mỗi `epic_details` với tất cả stories và acceptance criteria của nó như complete review unit và immediately execute tasks#advanced-elicitation display, trước moving on đến next epic.]]

<<REPEAT: epic_details>>

## Epic {{epic_number}} {{epic_title}}

{{epic_goal}} [[LLM: Expanded goal - 2-3 sentences describing objective và value tất cả stories sẽ achieve]]

[[LLM: CRITICAL STORY SEQUENCING REQUIREMENTS:

- Stories trong mỗi epic PHẢI logically sequential
- Mỗi story nên là "vertical slice" delivering complete functionality
- Không story nên depend on work từ later story hoặc epic
- Identify và note bất kỳ direct prerequisite stories nào
- Focus trên "what" và "why" không "how" (leave technical implementation cho Architect) yet be precise enough để support logical sequential order của operations từ story to story.
- Ensure mỗi story delivers clear user hoặc business value, try avoid enablers và build chúng into stories deliver value.
- Size stories cho AI agent execution: Mỗi story phải completable by single AI agent trong one focused session mà không context overflow
- Think "junior developer working cho 2-4 hours" - stories phải small, focused, và self-contained
- Nếu story seems complex, break nó down further as long như nó có thể deliver vertical slice
- Mỗi story nên result trong working, testable code trước agent's context window fills]]

<<REPEAT: story>>

### Story {{epic_number}}.{{story_number}} {{story_title}}

Như {{user_type}},
Tôi muốn {{action}},
để {{benefit}}.

#### Acceptance Criteria

[[LLM: Define clear, comprehensive, và testable acceptance criteria:

- Precisely define "done" means từ functional perspective
- Unambiguous và serve như basis cho verification
- Include bất kỳ critical non-functional requirements nào từ PRD
- Consider local testability cho backend/data components
- Specify UI/UX requirements và framework adherence nơi applicable
- Avoid cross-cutting concerns nên trong other stories hoặc PRD sections]]

<<REPEAT: criteria>>

- {{criterion number}}: {{criteria}}

<</REPEAT>>
<</REPEAT>>
<</REPEAT>>

## Change Log

| Change | Date | Version | Description | Author |
| ------ | ---- | ------- | ----------- | ------ |

----- END PRD START CHECKLIST OUTPUT ------

## Checklist Results Report

[[LLM: Trước running checklist và drafting prompts, offer output full updated PRD. Nếu outputting nó, confirm với user rằng bạn sẽ proceeding run checklist và produce report. Once user confirms, execute `pm-checklist` và populate results trong section này.]]

----- END Checklist START Design Architect `UI/UX Specification Mode` Prompt ------

## Design Architect Prompt

[[LLM: Section này sẽ chứa prompt cho Design Architect, keep nó short và to the point để initiate create architecture mode sử dụng document này như input.]]

----- END Design Architect `UI/UX Specification Mode` Prompt START Architect Prompt ------

## Architect Prompt

[[LLM: Section này sẽ chứa prompt cho Architect, keep nó short và to the point để initiate create architecture mode sử dụng document này như input.]]

----- END Architect Prompt ------