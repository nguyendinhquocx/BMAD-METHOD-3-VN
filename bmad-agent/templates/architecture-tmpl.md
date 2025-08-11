# Tài Liệu Kiến Trúc {Tên Dự Án}

## Giới Thiệu / Lời Mở Đầu

{Tài liệu này nêu rõ kiến trúc tổng thể của dự án, bao gồm hệ thống backend, dịch vụ chia sẻ, và các vấn đề không liên quan đến UI cụ thể. Mục tiêu chính của nó là phục vụ như blueprint kiến trúc hướng dẫn cho phát triển được hỗ trợ bởi AI, đảm bảo tính nhất quán và tuân thủ các patterns và công nghệ đã chọn.

**Mối Quan Hệ với Frontend Architecture:**
Nếu dự án bao gồm user interface quan trọng, một Frontend Architecture Document riêng biệt (thường được đặt tên `front-end-architecture-tmpl.txt` hoặc tương tự, và được liên kết trong phần "Tài Liệu Tham Khảo Chính") chi tiết thiết kế cụ thể frontend và PHẢI được sử dụng kết hợp với tài liệu này. Lựa chọn technology stack cốt lõi được ghi chép ở đây (xem "Definitive Tech Stack Selections") là dứt khoát cho toàn bộ dự án, bao gồm bất kỳ components frontend nào.}

## Mục Lục

{ Cập nhật này nếu sections và subsections được thêm hoặc loại bỏ }

## Tóm Tắt Kỹ Thuật

{ Cung cấp tổng quan ngắn gọn về kiến trúc hệ thống, key components, lựa chọn công nghệ, và architectural patterns được sử dụng. Tham chiếu các mục tiêu từ PRD. }

## Tổng Quan Cấp Cao

{ Mô tả main architectural style (ví dụ: Monolith, Microservices, Serverless, Event-Driven), phản ánh quyết định được đưa ra trong PRD. Giải thích repository structure (Monorepo/Polyrepo). Giải thích primary user interaction hoặc data flow ở mức conceptual. }

{ Chèn high-level mermaid system context hoặc interaction diagram ở đây - ví dụ: Mermaid Class C4 Models Layer 1 và 2 }

## Architectural / Design Patterns Được Áp Dụng

{ Liệt kê key high-level patterns được chọn cho architecture. Những foundational patterns này nên được thiết lập sớm vì chúng hướng dẫn component design, interactions, và technology choices. }

- **Pattern 1:** {ví dụ: Serverless, Event-Driven, Microservices, CQRS} - _Rationale/Reference:_ {Ngắn gọn tại sao, hoặc liên kết đến giải thích chi tiết hơn nếu cần}
- **Pattern 2:** {ví dụ: Dependency Injection, Repository Pattern, Module Pattern} - _Rationale/Reference:_ {...}
- **Pattern N:** {...}

## Component View

{ Mô tả các major logical components hoặc services của hệ thống và responsibilities của chúng, phản ánh decided overall architecture (ví dụ: distinct microservices, modules trong monolith, packages trong monorepo) và architectural patterns được adopted. Giải thích cách chúng collaborate. }

- Component A: {Mô tả responsibility}

{Chèn component diagram ở đây nếu nó helps - ví dụ: sử dụng Mermaid graph TD hoặc C4 Model Container/Component Diagram}

- Component N...: {Mô tả responsibility}

{ Chèn component diagram ở đây nếu nó helps - ví dụ: sử dụng Mermaid graph TD hoặc C4 Model Container/Component Diagram }

## Project Structure

{Cung cấp ASCII hoặc Mermaid diagram đại diện cho folder structure của dự án. Sau đây là ví dụ general. Nếu `front-end-architecture-tmpl.txt` (hoặc equivalent) được sử dụng, nó sẽ chứa detailed structure cho phần frontend (ví dụ: trong `src/frontend/` hoặc dedicated `frontend/` root directory). Shared code structure (ví dụ: trong `packages/` directory cho monorepo) cũng nên được detailed ở đây.}

```plaintext
{project-root}/
├── .github/                    # CI/CD workflows (ví dụ: GitHub Actions)
│   └── workflows/
│       └── main.yml
├── .vscode/                    # VSCode settings (optional)
│   └── settings.json
├── build/                      # Compiled output (nếu applicable, thường git-ignored)
├── config/                     # Static configuration files (nếu có)
├── docs/                       # Project documentation (PRD, Arch, v.v.)
│   ├── index.md
│   └── ... (other .md files)
├── infra/                      # Infrastructure as Code (ví dụ: CDK, Terraform)
│   └── lib/
│   └── bin/
├── node_modules/ / venv / target/ # Project dependencies (git-ignored)
├── scripts/                    # Utility scripts (build, deploy helpers, v.v.)
├── src/                        # Application source code
│   ├── backend/                # Backend-specific application code (nếu distinct frontend exists)
│   │   ├── core/               # Core business logic, domain models
│   │   ├── services/           # Business services, orchestrators
│   │   ├── adapters/           # Adapters đến external systems (DB, APIs)
│   │   ├── controllers/ / routes/ # API endpoint handlers
│   │   └── main.ts / app.py    # Backend application entry point
│   ├── frontend/               # Placeholder: Xem Frontend Architecture Doc để biết chi tiết nếu used
│   ├── shared/ / common/       # Code shared (ví dụ: types, utils, domain models nếu applicable)
│   │   └── types/
│   └── main.ts / index.ts / app.ts # Main application entry point (nếu không sử dụng backend/frontend split above)
├── stories/                    # Generated story files cho development (optional)
│   └── epic1/
├── test/                       # Automated tests
│   ├── unit/                   # Unit tests (mirroring src structure)
│   ├── integration/            # Integration tests
│   └── e2e/                    # End-to-end tests
├── .env.example                # Example environment variables
├── .gitignore                  # Git ignore rules
├── package.json / requirements.txt / pom.xml # Project manifest và dependencies
├── tsconfig.json / pyproject.toml # Language-specific configuration (nếu applicable)
├── Dockerfile                  # Docker build instructions (nếu applicable)
└── README.md                   # Project overview và setup instructions
```

(Điều chỉnh example tree dựa trên actual project type - ví dụ: Python sẽ có requirements.txt, v.v. Structure above minh họa potential separation cho projects với distinct frontends; cho simpler projects hoặc APIs, `src/` structure có thể flatter.)

### Key Directory Descriptions

- docs/: Chứa tất cả project planning và reference documentation.
- infra/: Giữ Infrastructure as Code definitions (ví dụ: AWS CDK, Terraform).
- src/: Chứa main application source code. Có thể được subdivided (ví dụ: `backend/`, `frontend/`, `shared/`) tùy thuộc vào project complexity và liệu separate frontend architecture document có được sử dụng không.
- src/backend/core/ / src/core/ / src/domain/: Core business logic, entities, use cases, độc lập với frameworks/external services.
- src/backend/adapters/ / src/adapters/ / src/infrastructure/: Implementation details, interactions với databases, cloud SDKs, frameworks.
- src/backend/controllers/ / src/routes/ / src/pages/: Entry points cho API requests hoặc UI views (nếu UI đơn giản và không trong separate frontend structure).
- test/: Chứa tất cả automated tests, mirroring src/ structure nơi applicable.

### Notes

{Đề cập bất kỳ specific build output paths, compiler configuration pointers, hoặc other relevant structural notes nào.}

## API Reference

### External APIs Consumed

{Lặp lại section này cho mỗi external API mà hệ thống tương tác.}

#### {External Service Name} API

- **Purpose:** {Tại sao hệ thống sử dụng API này?}
- **Base URL(s):**
  - Production: `{URL}`
  - Staging/Dev: `{URL}`
- **Authentication:** {Mô tả method - ví dụ: API Key trong Header (Header Name: `X-API-Key`), OAuth 2.0 Client Credentials, Basic Auth. Tham chiếu `docs/environment-vars.md` cho key names.}
- **Key Endpoints Used:**
  - **`{HTTP Method} {/path/to/endpoint}`:**
    - Description: {Endpoint này làm gì?}
    - Request Parameters: {Query params, path params}
    - Request Body Schema: {Cung cấp JSON schema inline, hoặc liên kết đến detailed definition trong `docs/data-models.md` chỉ nếu schema exceptionally large hoặc complex.}
    - Example Request: `{Code block}`
    - Success Response Schema (Code: `200 OK`): {Cung cấp JSON schema inline, hoặc liên kết đến detailed definition trong `docs/data-models.md` chỉ nếu very complex.}
    - Error Response Schema(s) (Codes: `4xx`, `5xx`): {Cung cấp JSON schema inline, hoặc liên kết đến detailed definition trong `docs/data-models.md` chỉ nếu very complex.}
    - Example Response: `{Code block}`
  - **`{HTTP Method} {/another/endpoint}`:** {...}
- **Rate Limits:** {Nếu biết}
- **Link to Official Docs:** {URL}

### Internal APIs Provided (Nếu Applicable)

{Nếu hệ thống exposes APIs riêng của nó (ví dụ: trong microservices architecture hoặc cho UI frontend). Lặp lại cho mỗi API.}

#### {Internal API / Service Name} API

- **Purpose:** {API này cung cấp service gì?}
- **Base URL(s):** {ví dụ: `/api/v1/...`}
- **Authentication/Authorization:** {Mô tả cách access được controlled.}
- **Endpoints:**
  - **`{HTTP Method} {/path/to/endpoint}`:**
    - Description: {Endpoint này làm gì?}
    - Request Parameters: {...}
    - Request Body Schema: {Cung cấp JSON schema inline, hoặc liên kết đến detailed definition trong `docs/data-models.md` chỉ nếu very complex.}
    - Success Response Schema (Code: `200 OK`): {Cung cấp JSON schema inline, hoặc liên kết đến detailed definition trong `docs/data-models.md` chỉ nếu very complex.}
    - Error Response Schema(s) (Codes: `4xx`, `5xx`): {Cung cấp JSON schema inline, hoặc liên kết đến detailed definition trong `docs/data-models.md` chỉ nếu very complex.}
  - **`{HTTP Method} {/another/endpoint}`:** {...}

## Data Models

### Core Application Entities / Domain Objects

{Định nghĩa main objects/concepts mà application làm việc với. Lặp lại subsection cho mỗi key entity.}

#### {Entity Name, ví dụ: User, Order, Product}

- **Description:** {Entity này đại diện cho gì?}
- **Schema / Interface Definition:**
  ```typescript
  // Ví dụ sử dụng TypeScript Interface
  export interface {EntityName} {
    id: string; // {Description, ví dụ: Unique identifier}
    propertyName: string; // {Description}
    optionalProperty?: number; // {Description}
    // ... other properties
  }
  ```
- **Validation Rules:** {Liệt kê bất kỳ specific validation rules nào beyond basic types - ví dụ: max length, format, range.}

### API Payload Schemas (Nếu distinct)

{Định nghĩa schemas ở đây chỉ nếu chúng distinct từ core entities VÀ không được detailed đầy đủ under API endpoint definitions trong API Reference section. Ưu tiên detailing request/response schemas trực tiếp với APIs của chúng nơi có thể. Section này cho complex, reusable payload structures có thể được sử dụng across multiple internal APIs hoặc differ significantly từ core persisted entities.}

#### {API Endpoint / Purpose, ví dụ: Create Order Request, lặp lại section như cần}

- **Schema / Interface Definition:**
  ```typescript
  // Ví dụ
  export interface CreateOrderRequest {
    customerId: string;
    items: { productId: string; quantity: number }[];
    // ...
  }
  ```

### Database Schemas (Nếu applicable)

{Nếu sử dụng database, định nghĩa table structures hoặc document database schemas. lặp lại như cần}

#### {Table / Collection Name}

- **Purpose:** {Table này store data gì?}
- **Schema Definition:**
  ```sql
  -- Ví dụ SQL
  CREATE TABLE {TableName} (
    id VARCHAR(36) PRIMARY KEY,
    column_name VARCHAR(255) NOT NULL,
    numeric_column DECIMAL(10, 2),
    -- ... other columns, indexes, constraints
  );
  ```
  _(Alternatively, sử dụng ORM model definitions, NoSQL document structure, v.v.)_

## Core Workflow / Sequence Diagrams

{ Minh họa key hoặc complex workflows sử dụng mermaid sequence diagrams. Có thể có high level tying full project together, và cũng smaller epic level sequence diagrams. }

## Definitive Tech Stack Selections

{ Section này nêu rõ definitive technology choices cho dự án. Những selections này nên được made sau thorough understanding của project's requirements, components, data models, và core workflows. Architect Agent nên guide user qua những decisions này, ensuring mỗi choice được justified và recorded accurately trong table below.

Table này là **single source of truth** cho tất cả technology selections. Other architecture documents (ví dụ: Frontend Architecture) phải refer đến những choices này và elaborate trên specific application của chúng thay vì re-defining chúng.

Key decisions để discuss và finalize ở đây, sau đó sẽ được expanded upon và formally documented trong detailed stack table below, bao gồm considerations như:

- Preferred Starter Template Frontend: { Url đến template hoặc starter, nếu used }
- Preferred Starter Template Backend: { Url đến template hoặc starter, nếu used }
- Primary Language(s) & Version(s): {ví dụ: TypeScript 5.x, Python 3.11 - Specify exact versions, ví dụ: `5.2.3`}
- Primary Runtime(s) & Version(s): {ví dụ: Node.js 22.x - Specify exact versions, ví dụ: `22.0.1`}

Phải là definitive selections; đừng list open-ended choices (ví dụ: cho web scraping, pick một tool, không phải hai). Specify exact versions (ví dụ: `18.2.0`). Nếu 'Latest' được used, nó implies latest stable version _tại thời điểm last update của document này_, và specific version (ví dụ: `xyz-library@2.3.4`) nên được recorded. Pinning versions được strongly preferred để tránh unexpected breaking changes cho AI agent. }

| Category             | Technology              | Version / Details | Description / Purpose                   | Justification (Optional) |
| :------------------- | :---------------------- | :---------------- | :-------------------------------------- | :----------------------- |
| **Languages**        | {ví dụ: TypeScript}      | {ví dụ: 5.x}       | {Primary language cho backend/frontend} | {Tại sao language này?}     |
|                      | {ví dụ: Python}          | {ví dụ: 3.11}      | {Used cho data processing, ML}          | {...}                    |
| **Runtime**          | {ví dụ: Node.js}         | {ví dụ: 22.x}      | {Server-side execution environment}     | {...}                    |
| **Frameworks**       | {ví dụ: NestJS}          | {ví dụ: 10.x}      | {Backend API framework}                 | {Tại sao framework này?}    |
|                      | {ví dụ: React}           | {ví dụ: 18.x}      | {Frontend UI library}                   | {...}                    |
| **Databases**        | {ví dụ: PostgreSQL}      | {ví dụ: 15}        | {Primary relational data store}         | {...}                    |
|                      | {ví dụ: Redis}           | {ví dụ: 7.x}       | {Caching, session storage}              | {...}                    |
| **Cloud Platform**   | {ví dụ: AWS}             | {N/A}             | {Primary cloud provider}                | {...}                    |
| **Cloud Services**   | {ví dụ: AWS Lambda}      | {N/A}             | {Serverless compute}                    | {...}                    |
|                      | {ví dụ: AWS S3}          | {N/A}             | {Object storage cho assets/state}       | {...}                    |
|                      | {ví dụ: AWS EventBridge} | {N/A}             | {Event bus / scheduled tasks}           | {...}                    |
| **Infrastructure**   | {ví dụ: AWS CDK}         | {ví dụ: Latest}    | {Infrastructure as Code tool}           | {...}                    |
|                      | {ví dụ: Docker}          | {ví dụ: Latest}    | {Containerization}                      | {...}                    |
| **UI Libraries**     | {ví dụ: Material UI}     | {ví dụ: 5.x}       | {React component library}               | {...}                    |
| **State Management** | {ví dụ: Redux Toolkit}   | {ví dụ: Latest}    | {Frontend state management}             | {...}                    |
| **Testing**          | {ví dụ: Jest}            | {ví dụ: Latest}    | {Unit/Integration testing framework}    | {...}                    |
|                      | {ví dụ: Playwright}      | {ví dụ: Latest}    | {End-to-end testing framework}          | {...}                    |
| **CI/CD**            | {ví dụ: GitHub Actions}  | {N/A}             | {Continuous Integration/Deployment}     | {...}                    |
| **Other Tools**      | {ví dụ: LangChain.js}    | {ví dụ: Latest}    | {LLM interaction library}               | {...}                    |
|                      | {ví dụ: Cheerio}         | {ví dụ: Latest}    | {HTML parsing/scraping}                 | {...}                    |

## Infrastructure and Deployment Overview

- Cloud Provider(s): {ví dụ: AWS, Azure, GCP, On-premise}
- Core Services Used: {Liệt kê key managed services - ví dụ: Lambda, S3, Kubernetes Engine, RDS, Kafka}
- Infrastructure as Code (IaC): {Tool used - ví dụ: AWS CDK, Terraform...} - Location: {Liên kết đến IaC code repo/directory}
- Deployment Strategy: {ví dụ: CI/CD pipeline với automated promotions, Blue/Green, Canary} - Tools: {ví dụ: Jenkins, GitHub Actions, GitLab CI}
- Environments: {Liệt kê environments - ví dụ: Development, Staging, Production}
- Environment Promotion: {Mô tả steps, ví dụ: `dev` -\> `staging` (manual approval / automated tests pass) -\> `production` (automated sau tests pass và optional manual approval)}
- Rollback Strategy: {ví dụ: Automated rollback trên health check failure post-deployment, Manual trigger qua CI/CD job, IaC state rollback. Specify primary mechanism.}

## Error Handling Strategy

- **General Approach:** {ví dụ: Sử dụng exceptions như primary mechanism, return error codes/tuples cho specific modules, clearly defined custom error types hierarchy.}
- **Logging:**
  - Library/Method: {ví dụ: `console.log/error` (Node.js), Python `logging` module với `structlog`, dedicated logging library như `Pino` hoặc `Serilog`. Specify chosen library.}
  - Format: {ví dụ: JSON, plain text với timestamp và severity. JSON được preferred cho structured logging.}
  - Levels: {ví dụ: DEBUG, INFO, WARN, ERROR, CRITICAL. Specify standard usage cho mỗi.}
  - Context: {Contextual information gì phải được included? ví dụ: Correlation ID, User ID (nếu applicable và safe), Service Name, Operation Name, Key Parameters (sanitized).}
- **Specific Handling Patterns:**
  - External API Calls: {Định nghĩa retry mechanisms (ví dụ: exponential backoff, max retries - specify library nếu một được mandated như `Polly` hoặc `tenacity`), circuit breaker pattern usage (ví dụ: sử dụng `resilience4j` hoặc equivalent - specify nếu và như thế nào), timeout configurations (connect và read timeouts). Cách API errors (4xx, 5xx) được translated hoặc propagated?}
  - Internal Errors / Business Logic Exceptions: {Cách convert internal errors đến user-facing errors nếu applicable (ví dụ: generic error messages với unique ID cho support, specific error codes). Có defined business exception classes không?}
  - Transaction Management: {Approach để ensure data consistency trong case của errors trong multi-step operations, ví dụ: database transactions (specify isolation levels nếu non-default), Saga pattern cho distributed transactions (specify orchestrator/choreography và compensation logic).}

## Coding Standards

{Những standards này mandatory cho tất cả code generation bởi AI agents và human developers. Deviations không được permitted trừ khi explicitly approved và documented như exception trong section này hoặc linked addendum.}

- **Primary Runtime(s):** {ví dụ: Node.js 22.x, Python Runtime cho Lambda - refer đến Definitive Tech Stack}
- **Style Guide & Linter:** {ví dụ: ESLint với Airbnb config + Prettier; Black, Flake8, MyPy; Go fmt, golint. Specify chosen tools và link đến configuration files (ví dụ: `.eslintrc.js`, `pyproject.toml`). Linter rules mandatory và must not be disabled mà không có cause.}
- **Naming Conventions:**
  - Variables: `{ví dụ: camelCase (JavaScript/TypeScript/Java), snake_case (Python/Ruby)}`
  - Functions/Methods: `{ví dụ: camelCase (JavaScript/TypeScript/Java), snake_case (Python/Ruby)}`
  - Classes/Types/Interfaces: `{ví dụ: PascalCase}`
  - Constants: `{ví dụ: UPPER_SNAKE_CASE}`
  - Files: `{ví dụ: kebab-case.ts (TypeScript), snake_case.py (Python), PascalCase.java (Java). Be specific per language.}`
  - Modules/Packages: `{ví dụ: camelCase hoặc snake_case. Be specific per language.}`
- **File Structure:** Tuân thủ layout defined trong "Project Structure" section và Frontend Architecture Document nếu applicable.
- **Unit Test File Organization:** {ví dụ: `*.test.ts`/`*.spec.ts` co-located với source files; `test_*.py` trong parallel `tests/` directory. Specify chosen convention.}
- **Asynchronous Operations:** {ví dụ: Always sử dụng `async`/`await` trong TypeScript/JavaScript/Python cho promise-based operations; Goroutines/Channels trong Go với clear patterns cho error propagation và completion; Java `CompletableFuture` hoặc Project Reactor/RxJava nếu used.}
- **Type Safety:** {ví dụ: Leverage TypeScript strict mode (all flags enabled); Python type hints (enforced bởi MyPy); Go static typing; Java generics và avoidance của raw types. All new code must be strictly typed.}
  - _Type Definitions:_ {Location, ví dụ: `src/common/types.ts`, shared packages, hoặc co-located. Policy về using `any` hoặc equivalent (strongly discouraged, requires justification).}
- **Comments & Documentation:**
  - Code Comments: {Expectations cho code comments: Explain _why_, không _what_, cho complex logic. Avoid redundant comments. Sử dụng standard formats như JSDoc, TSDoc, Python docstrings (Google/NumPy style), GoDoc, JavaDoc.}
  - READMEs: {Mỗi module/package/service nên có README explaining purpose, setup, và usage của nó nếu không trivial.}
- **Dependency Management:** {Tool used - ví dụ: npm/yarn, pip/poetry, Go modules, Maven/Gradle. Policy về adding new dependencies (ví dụ: approval process, check cho existing alternatives, security vulnerability scans). Specify versioning strategy (ví dụ: prefer pinned versions, sử dụng tilde `~` cho patches, caret `^` cho minor updates - be specific).}

[Phần còn lại của template tiếp tục với cùng structure nhưng được dịch sang tiếng Việt...]

## Change Log

| Change | Date | Version | Description | Author |
| ------ | ---- | ------- | ----------- | ------ |

--- Below, Prompt cho Design Architect (Nếu Project có UI) Để Produce Front End Architecture ----