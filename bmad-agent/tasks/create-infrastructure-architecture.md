# Nhiệm Vụ Infrastructure Architecture Creation

## Mục Đích

Để design comprehensive infrastructure architecture định nghĩa tất cả aspects của technical infrastructure strategy, từ cloud platform selection đến deployment patterns. Architecture này sẽ serve như definitive blueprint cho DevOps/Platform Engineering team để implement, ensuring consistency, security, và operational excellence across tất cả infrastructure components.

## Inputs

- Product Requirements Document (PRD)
- Main System Architecture Document
- Technology Stack Document (`docs/tech-stack.md`)
- Infrastructure Guidelines (`docs/infrastructure/guidelines.md`)
- Bất kỳ existing infrastructure documentation nào

## Key Activities & Instructions

### 1. Confirm Interaction Mode

- Hỏi user: "Bạn muốn proceed với creating infrastructure architecture như thế nào? Chúng ta có thể làm việc:
  A. **Incrementally (Default & Recommended):** Chúng ta sẽ đi qua từng architectural decision và document section step-by-step. Tôi sẽ present drafts, và chúng ta sẽ seek feedback của bạn trước khi moving đến next part. Điều này tốt nhất cho complex infrastructure designs.
  B. **"YOLO" Mode:** Tôi có thể produce comprehensive initial draft của infrastructure architecture để bạn review broadly hơn first. Chúng ta sau đó có thể iterate trên specific sections dựa trên feedback của bạn."
- Request user select preferred mode của họ và proceed accordingly.

### 2. Gather Infrastructure Requirements

- Review product requirements document để understand business needs và scale requirements
- Analyze main system architecture để identify infrastructure dependencies
- Document non-functional requirements (performance, scalability, reliability, security)
- Identify compliance và regulatory requirements affecting infrastructure
- Map application architecture patterns đến infrastructure needs
- <critical_rule>Cross-reference với PRD Technical Assumptions để ensure alignment với repository và service architecture decisions</critical_rule>

### 3. Design Infrastructure Architecture Strategy

- **Nếu "Incremental Mode" được selected:**
  - Cho mỗi major infrastructure domain:
    - **a. Present Domain Purpose:** Explain what infrastructure domain này provides và strategic importance của nó
    - **b. Present Strategic Options:** Provide 2-3 viable approaches với architectural pros và cons
    - **c. Make Strategic Recommendation:** Recommend best approach với clear architectural rationale
    - **d. Incorporate Feedback:** Discuss với user và iterate dựa trên feedback
    - **e. [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)**
    - **f. Document Architectural Decision:** Record final strategic choice với justification

- **Nếu "YOLO Mode" được selected:**
  - Design strategic approaches cho tất cả major infrastructure domains
  - Document architectural decisions và rationales
  - Present comprehensive infrastructure strategy cho review
  - Iterate dựa trên feedback

### 4. Document Infrastructure Architecture Blueprint

- Populate tất cả sections của infrastructure architecture template:
  - **Cloud Strategy & Platform Selection** - Multi-cloud vs single cloud, platform rationale
  - **Network Architecture Patterns** - VPC design, connectivity strategies, security zones
  - **Compute Architecture Strategy** - Container vs serverless vs VM strategies, scaling patterns
  - **Data Architecture & Storage Strategy** - Database selection, data tier strategies, backup approaches
  - **Security Architecture Framework** - Zero-trust patterns, identity strategies, encryption approaches
  - **Observability Architecture** - Monitoring strategies, logging patterns, alerting frameworks
  - **CI/CD Architecture Patterns** - Pipeline strategies, deployment patterns, environment promotion
  - **Disaster Recovery Architecture** - RTO/RPO strategies, failover patterns, business continuity
  - **Cost Optimization Framework** - Resource optimization strategies, cost allocation patterns
  - **Environment Strategy** - Dev/staging/prod patterns, environment isolation approaches
  - **Infrastructure Evolution Strategy** - Technology migration paths, scaling roadmaps
  - **Cross-team Collaboration Model** - Integration với development teams, handoff protocols

### 5. Implementation Feasibility Review & Collaboration

- **Architect → DevOps/Platform Feedback Loop:**
  - Present architectural blueprint summary cho DevOps/Platform Engineering Agent để feasibility review
  - Request specific feedback trên:
    - **Operational Complexity:** Proposed patterns có implementable với current tooling và expertise không?
    - **Resource Constraints:** Infrastructure requirements có align với available resources và budgets không?
    - **Security Implementation:** Security patterns có achievable với current security toolchain không?
    - **Operational Overhead:** Proposed architecture có create excessive operational burden không?
    - **Technology Constraints:** Selected technologies có compatible với existing infrastructure không?
  - Document tất cả feasibility feedback và concerns raised bởi DevOps/Platform Engineering Agent
  - Iterate trên architectural decisions dựa trên operational constraints và feedback
  - <critical_rule>Address tất cả critical feasibility concerns trước khi proceeding đến final architecture documentation</critical_rule>

### 6. Create Infrastructure Architecture Diagrams

- Develop high-level infrastructure strategy diagrams sử dụng Mermaid
- Create network topology architecture diagrams
- Document data flow và integration architecture diagrams
- Illustrate deployment pipeline architecture patterns
- Visualize environment relationship và promotion strategies
- Design security architecture và trust boundary diagrams

### 7. Define Implementation Handoff Strategy

- Create clear specifications cho DevOps/Platform Engineering implementation
- Define architectural constraints và non-negotiable requirements
- Specify technology selections với version requirements where critical
- Document architectural patterns phải được followed trong implementation
- Create implementation validation criteria
- Prepare architectural decision records (ADRs) cho key infrastructure choices

### 8. BMAD Integration Architecture

- Design infrastructure architecture để support other BMAD agents:
  - **Development Environment Architecture** - Local development patterns, testing infrastructure
  - **Deployment Architecture** - How applications từ Frontend/Backend agents sẽ được deployed
  - **Integration Architecture** - How infrastructure supports cross-service communication
  - Document infrastructure requirements cho mỗi BMAD agent workflow

### 9. Architecture Review và Finalization

- Review architecture against system architecture cho alignment
- Validate infrastructure architecture supports tất cả application requirements
- Ensure architectural decisions implementable trong project constraints
- Address bất kỳ architectural gaps hoặc inconsistencies nào
- Prepare comprehensive architecture handoff documentation cho implementation team

## Output

Comprehensive infrastructure architecture document cung cấp:

1. **Strategic Infrastructure Blueprint** - High-level architecture strategy và patterns
2. **Technology Selection Rationale** - Justified technology choices và architectural decisions
3. **Implementation Specifications** - Clear guidance cho DevOps/Platform Engineering implementation
4. **Architectural Constraints** - Non-negotiable requirements và patterns
5. **Integration Architecture** - How infrastructure supports application architecture
6. **BMAD Workflow Support** - Infrastructure architecture supporting tất cả agent workflows
7. **Feasibility Validation** - Documented operational feedback và constraint resolution

**Output file**: `docs/infrastructure-architecture.md`

## Offer Advanced Self-Refinement & Elicitation Options

Present user với following list của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Explain rằng những này optional steps để help ensure quality, explore alternatives, và deepen understanding của current section trước khi finalizing nó và moving on. User có thể select action by number, hoặc choose skip điều này và proceed finalize section.

"Để ensure quality của current section: **[Specific Section Name]** và ensure robustness của nó, explore alternatives, và consider tất cả angles, tôi có thể perform bất kỳ following actions nào. Please choose number (8 để finalize và proceed):

**Advanced Reflective, Elicitation & Brainstorming Actions I Can Take:**

1. **Alternative Architecture Strategy Evaluation**
2. **Scalability & Performance Architecture Stress Test (Theoretical)**
3. **Security Architecture & Compliance Deep Dive**
4. **Cost Architecture Analysis & Optimization Strategy Review**
5. **Operational Excellence & Reliability Architecture Assessment**
6. **Cross-Functional Integration & BMAD Workflow Analysis**
7. **Future Technology & Migration Architecture Path Exploration**
8. **Finalize this Section and Proceed.**

Sau khi tôi perform selected action, chúng ta có thể discuss outcome và decide trên bất kỳ further revisions nào cho section này."

REPEAT bằng cách Asking user nếu họ muốn perform another Reflective, Elicitation & Brainstorming Action UNTIL user indicates it is time để proceed đến next section (hoặc selects #8)