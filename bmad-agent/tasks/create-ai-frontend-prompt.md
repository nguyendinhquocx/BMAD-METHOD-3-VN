# Nhiệm Vụ Create AI Frontend Prompt

## Mục Đích

Tạo ra một prompt masterful, toàn diện, và được tối ưu hóa có thể được sử dụng với các AI-driven frontend development tools (ví dụ: Lovable, Vercel v0, hoặc tương tự) để scaffold hoặc generate các phần đáng kể của frontend application.

## Inputs

- Completed UI/UX Specification (`front-end-spec-tmpl`)
- Completed Frontend Architecture Document (`front-end-architecture`)
- Main System Architecture Document (`architecture` - cho API contracts và tech stack)
- Primary Design Files (Figma, Sketch, v.v. - cho visual context nếu tool có thể accept hoặc nếu descriptions cần thiết)

## Key Activities & Instructions

1. **Confirm Target AI Generation Platform:**

    - Yêu cầu user chỉ định AI frontend generation tool/platform nào họ dự định sử dụng (ví dụ: "Lovable.ai", "Vercel v0", "GPT-4 với direct code generation instructions", v.v.).
    - Giải thích rằng prompt optimization có thể differ slightly dựa trên capabilities của platform và preferred input format.

2. **Synthesize Inputs thành Structured Prompt:**

    - **Overall Project Context:**
      - Briefly state mục đích của project (từ brief/PRD).
      - Specify chosen frontend framework, core libraries, và UI component library (từ `front-end-architecture` và main `architecture`).
      - Mention styling approach (ví dụ: Tailwind CSS, CSS Modules).
    - **Design System & Visuals:**
      - Reference primary design files (ví dụ: Figma link).
      - Nếu tool không directly ingest design files, describe overall visual style, color palette, typography, và key branding elements (từ `front-end-spec-tmpl`).
      - List bất kỳ global UI components hoặc design tokens nào nên được defined hoặc adhered to.
    - **Application Structure & Routing:**
      - Describe main pages/views và routes của chúng (từ `front-end-architecture` - Routing Strategy).
      - Outline navigation structure (từ `front-end-spec-tmpl`).
    - **Key User Flows & Page-Level Interactions:**
      - Cho một vài critical user flows (từ `front-end-spec-tmpl`):
        - Describe sequence của user actions và expected UI changes trên mỗi relevant page.
        - Specify API calls được made (referencing API endpoints từ main `architecture`) và cách data nên được displayed hoặc used.
    - **Component Generation Instructions (Iterative hoặc Key Components):**
      - Dựa trên chosen AI tool's capabilities, decide trên strategy:
        - **Option 1 (Scaffolding):** Prompt để generation của main page structures, layouts, và placeholders cho components.
        - **Option 2 (Key Component Generation):** Select một vài critical hoặc complex components từ `front-end-architecture` (Component Breakdown) và cung cấp detailed specifications cho chúng (props, state, basic behavior, key UI elements).
        - **Option 3 (Holistic, nếu tool supports):** Attempt để describe entire application structure và key components broader hơn.
      - <important_note>Advise user rằng generating entire complex application perfectly trong one go là rare. Iterative prompting hoặc focusing trên sections/key components thường effective hơn.</important_note>
    - **State Management (High-Level Pointers):**
      - Mention chosen state management solution (ví dụ: "Use Redux Toolkit").
      - Cho key pieces của data, indicate nếu chúng nên được managed trong global state.
    - **API Integration Points:**
      - Cho pages/components fetch hoặc submit data, clearly state relevant API endpoints (từ `architecture`) và expected data shapes (có thể reference schemas trong `data-models` hoặc `api-reference` sections của architecture doc).
    - **Critical "Don'ts" hoặc Constraints:**
      - ví dụ: "Do not use deprecated libraries." "Ensure all forms have basic client-side validation."
    - **Platform-Specific Optimizations:**
      - Nếu chosen AI tool có known best practices cho prompting (ví dụ: specific keywords, structure, level của detail), incorporate chúng. (Điều này có thể require agent có some general knowledge hoặc ask user nếu họ biết bất kỳ such specific prompt modifiers nào cho chosen tool của họ).

3. **Present và Refine Master Prompt:**
    - Output generated prompt trong clear, copy-pasteable format (ví dụ: large code block).
    - Explain structure của prompt và tại sao certain information được included.
    - Work với user để refine prompt dựa trên knowledge của họ về target AI tool và bất kỳ specific nuances nào họ muốn emphasize.
    - <important_note>Remind user rằng generated code từ AI tool sẽ likely require review, testing, và further refinement bởi developers.</important_note>