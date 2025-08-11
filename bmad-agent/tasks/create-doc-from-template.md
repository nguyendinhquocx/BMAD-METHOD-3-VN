# Nhiệm Vụ Create Document from Template

## Mục Đích

- Generate documents từ bất kỳ specified template nào following embedded instructions
- Support multiple document types thông qua template-driven approach
- Enable bất kỳ persona nào create consistent, well-structured documents

## Hướng Dẫn

### 1. Identify Template và Context

- Determine template nào để sử dụng (user-provided hoặc list available để selection cho user)

  - agent-config specific agents sẽ list docs gì họ có available under task này, cho mỗi item consider nó unique task. Vì vậy nếu user có ví dụ:

    @{example}

  - tasks:

  - [Create Document](tasks#create-doc-from-template):

    - [Prd](templates#prd-tmpl)

    - [Architecture](templates#architecture-tmpl)

    @{/example}

    bạn sẽ list `Create Document PRD` và `Create Document Architecture` như tasks agent có thể perform.

- Gather tất cả relevant inputs, hoặc ask cho chúng, hoặc else rely trên user providing necessary details để complete document
- Understand document purpose và target audience

### 2. Determine Interaction Mode

Confirm với user preferred interaction style của họ:

- **Incremental:** Work thông qua chunks của document.
- **YOLO Mode:** Draft complete document making reasonable assumptions trong one shot. (Có thể được entered cũng sau khi starting incremental bằng cách just typing /yolo)

### 3. Execute Template

- Load specified template từ `templates#*` hoặc /templates directory
- Follow TẤT CẢ embedded LLM instructions trong template
- Process template markup according to `templates#template-format` conventions

### 4. Template Processing Rules

**CRITICAL: Never display template markup, LLM instructions, hoặc examples cho users**

- Replace tất cả {{placeholders}} với actual content
- Execute tất cả [[LLM: instructions]] internally
- Process <<REPEAT>> sections như needed
- Evaluate ^^CONDITION^^ blocks và include only nếu applicable
- Use @{examples} cho guidance nhưng never output chúng

### 5. Content Generation

- **Incremental Mode**: Present mỗi major section cho review trước khi proceeding
- **YOLO Mode**: Generate tất cả sections, sau đó review complete document với user
- Apply bất kỳ elicitation protocols nào specified trong template
- Incorporate user feedback và iterate như needed

### 6. Validation

Nếu template specifies checklist:

- Run appropriate checklist against completed document
- Document completion status cho mỗi item
- Address bất kỳ deficiencies nào found
- Present validation summary cho user

### 7. Final Presentation

- Present clean, formatted content only
- Ensure tất cả sections complete
- DO NOT truncate hoặc summarize content
- Begin directly với document content (no preamble)
- Include bất kỳ handoff prompts nào specified trong template

## Key Resources

- **Template Format:** `templates#template-format`
- **Available Templates:** Tất cả files trong `templates#` directory
- **Checklists:** Như specified bởi template hoặc persona
- **User Preferences:** `data#technical-preferences`

## Important Notes

- Task này template và persona agnostic
- Tất cả specific instructions embedded trong templates
- Focus trên faithful template execution và clean output
- Template markup cho AI processing only - never expose cho users