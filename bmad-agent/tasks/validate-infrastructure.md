# Nhiệm Vụ Infrastructure Validation

## Mục Đích

Để comprehensively validate platform infrastructure changes against security, reliability, operational, và compliance requirements trước deployment. Nhiệm vụ này ensures tất cả platform infrastructure meets organizational standards, follows best practices, và properly integrates với broader BMAD ecosystem.

## Inputs

- Infrastructure Change Request (`docs/infrastructure/{ticketNumber}.change.md`)
- **Infrastructure Architecture Document** (`docs/infrastructure-architecture.md` - từ Architect Agent)
- Infrastructure Guidelines (`docs/infrastructure/guidelines.md`)
- Technology Stack Document (`docs/tech-stack.md`)
- `infrastructure-checklist.md` (primary validation framework - 16 comprehensive sections)

## Key Activities & Instructions

### 1. Confirm Interaction Mode

- Hỏi user: "Bạn muốn proceed với platform infrastructure validation như thế nào? Chúng ta có thể làm việc:
  A. **Incrementally (Default & Recommended):** Chúng ta sẽ work qua mỗi section của checklist step-by-step, documenting compliance hoặc gaps cho mỗi item trước khi moving đến next section. Điều này tốt nhất cho thorough validation và detailed documentation của complete platform stack.
  B. **"YOLO" Mode:** Tôi có thể perform rapid assessment của tất cả checklist items và present comprehensive validation report cho review. Điều này nhanh hơn nhưng có thể miss nuanced details sẽ được caught trong incremental approach."
- Request user select preferred mode của họ (ví dụ: "Please let me know if you'd prefer A or B.").
- Once user chooses, confirm selected mode và proceed accordingly.

### 2. Initialize Platform Validation

- Review infrastructure change documentation để understand platform implementation scope và purpose
- Analyze infrastructure architecture document cho platform design patterns và compliance requirements
- Examine infrastructure guidelines cho organizational standards across tất cả platform components
- Prepare validation environment và tools cho comprehensive platform testing
- <critical_rule>Verify infrastructure change request approved cho validation. Nếu không, HALT và inform user.</critical_rule>

### 3. Architecture Design Review Gate

- **DevOps/Platform → Architect Design Review:**
  - Conduct systematic review của infrastructure architecture document cho implementability
  - Evaluate architectural decisions against operational constraints và capabilities:
    - **Implementation Complexity:** Assess nếu proposed architecture có thể implemented với available tools và expertise
    - **Operational Feasibility:** Validate rằng operational patterns achievable trong current organizational maturity
    - **Resource Availability:** Confirm required infrastructure resources available và trong budget constraints
    - **Technology Compatibility:** Verify selected technologies integrate properly với existing infrastructure
    - **Security Implementation:** Validate rằng security patterns có thể implemented với current security toolchain
    - **Maintenance Overhead:** Assess ongoing operational burden và maintenance requirements
  - Document design review findings và recommendations:
    - **Approved Aspects:** Document architectural decisions implementable như designed
    - **Implementation Concerns:** Identify architectural decisions có thể face implementation challenges
    - **Required Modifications:** Recommend specific changes cần để make architecture implementable
    - **Alternative Approaches:** Suggest alternative implementation patterns where needed
  - **Collaboration Decision Point:**
    - Nếu **critical implementation blockers** identified: HALT validation và escalate đến Architect Agent cho architectural revision
    - Nếu **minor concerns** identified: Document concerns và proceed với validation, noting required implementation adjustments
    - Nếu **architecture approved**: Proceed với comprehensive platform validation
  - <critical_rule>Tất cả critical design review issues phải resolved trước proceeding đến detailed validation</critical_rule>

### 4. Execute Comprehensive Platform Validation Process

- **Nếu "Incremental Mode" được selected:**
  - Cho mỗi section của infrastructure checklist (Sections 1-16):
    - **a. Present Section Purpose:** Explain section này validates gì và why nó important cho platform operations
    - **b. Work Through Items:** Present mỗi checklist item, guide user qua validation, và document compliance hoặc gaps
    - **c. Evidence Collection:** Cho mỗi compliant item, document cách compliance verified
    - **d. Gap Documentation:** Cho mỗi non-compliant item, document specific issues và proposed remediation
    - **e. Platform Integration Testing:** Cho platform engineering sections (13-16), validate integration giữa platform components
    - **f. [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)**
    - **g. Section Summary:** Provide compliance percentage và highlight critical findings trước moving đến next section

- **Nếu "YOLO Mode" được selected:**
  - Work qua tất cả checklist sections rapidly (foundation infrastructure sections 1-12 + platform engineering sections 13-16)
  - Document compliance status cho mỗi item across tất cả platform components
  - Identify và document critical non-compliance issues affecting platform operations
  - Present comprehensive validation report cho tất cả sections
  - <important_note>Sau presenting full validation report trong YOLO mode, bạn CÓ THỂ vẫn offer 'Advanced Reflective & Elicitation Options' menu cho deeper investigation của specific sections với issues.</important_note>

### 5. Generate Comprehensive Platform Validation Report

- Summarize validation findings by section across tất cả 16 checklist areas
- Calculate và present overall compliance percentage cho complete platform stack
- Clearly document tất cả non-compliant items với remediation plans prioritized by platform impact
- Highlight critical security hoặc operational risks affecting platform reliability
- Include design review findings và architectural implementation recommendations
- Provide validation signoff recommendation dựa trên complete platform assessment
- Document platform component integration validation results

### 6. BMAD Integration Assessment

- Review cách platform infrastructure changes support other BMAD agents:
  - **Development Agent Alignment:** Verify platform infrastructure supports Frontend Dev, Backend Dev, và Full Stack Dev requirements including:
    - Container platform development environment provisioning
    - GitOps workflows cho application deployment
    - Service mesh integration cho development testing
    - Developer experience platform self-service capabilities
  - **Product Alignment:** Ensure platform infrastructure implements PRD requirements từ Product Owner including:
    - Scalability và performance requirements qua container platform
    - Deployment automation qua GitOps workflows
    - Service reliability qua service mesh implementation
  - **Architecture Alignment:** Validate rằng platform implementation aligns với architecture decisions including:
    - Technology selections implemented correctly across tất cả platform components
    - Security architecture implemented trong container platform, service mesh, và GitOps
    - Integration patterns properly implemented giữa platform components
  - Document tất cả integration points và potential impacts trên other agents' workflows

### 7. Next Steps Recommendation

- Nếu validation successful:
  - Prepare platform deployment recommendation với component dependencies
  - Outline monitoring requirements cho complete platform stack
  - Suggest knowledge transfer activities cho platform operations
  - Document platform readiness certification
- Nếu validation failed:
  - Prioritize remediation actions by platform component và integration impact
  - Recommend blockers vs. non-blockers cho platform deployment
  - Schedule follow-up validation với focus trên failed platform components
  - Document platform risks và mitigation strategies
- Nếu design review identified architectural issues:
  - **Escalate đến Architect Agent** cho architectural revision và re-design
  - Document specific architectural changes required cho implementability
  - Schedule follow-up design review sau architectural modifications
- Update documentation với validation results across tất cả platform components
- <important_note>Always ensure Infrastructure Change Request status updated để reflect platform validation outcome.</important_note>

## Output

Comprehensive platform validation report documenting:

1. **Architecture Design Review Results** - Implementability assessment và architectural recommendations
2. **Compliance percentage by checklist section** (tất cả 16 sections bao gồm platform engineering)
3. **Detailed findings cho mỗi non-compliant item** across foundation và platform components
4. **Platform integration validation results** documenting component interoperability
5. **Remediation recommendations với priority levels** dựa trên platform impact
6. **BMAD integration assessment results** cho complete platform stack
7. **Clear signoff recommendation** cho platform deployment readiness hoặc architectural revision requirements
8. **Next steps cho implementation hoặc remediation** prioritized by platform dependencies

## Offer Advanced Self-Refinement & Elicitation Options

Present user với following list của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Explain rằng những này optional steps để help ensure quality, explore alternatives, và deepen understanding của current section trước finalizing nó và moving on. User có thể select action by number, hoặc choose skip điều này và proceed finalize section.

"Để ensure quality của current section: **[Specific Section Name]** và ensure robustness của nó, explore alternatives, và consider tất cả angles, tôi có thể perform bất kỳ following actions nào. Please choose number (8 để finalize và proceed):

**Advanced Reflective, Elicitation & Brainstorming Actions I Can Take:**

1. **Critical Security Assessment & Risk Analysis**
2. **Platform Integration & Component Compatibility Evaluation**
3. **Cross-Environment Consistency Review**
4. **Technical Debt & Maintainability Analysis**
5. **Compliance & Regulatory Alignment Deep Dive**
6. **Cost Optimization & Resource Efficiency Analysis**
7. **Operational Resilience & Platform Failure Mode Testing (Theoretical)**
8. **Finalize this Section and Proceed.**

Sau khi tôi perform selected action, chúng ta có thể discuss outcome và decide trên bất kỳ further revisions nào cho section này."

REPEAT bằng cách Asking user nếu họ muốn perform another Reflective, Elicitation & Brainstorming Action UNTIL user indicates it is time để proceed đến next section (hoặc selects #8)