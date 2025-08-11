# Nhiệm Vụ Infrastructure Review

## Mục Đích

Để conduct thorough review của existing infrastructure để identify improvement opportunities, security concerns, và alignment với best practices. Nhiệm vụ này helps maintain infrastructure health, optimize costs, và ensure continued alignment với organizational requirements.

## Inputs

- Current infrastructure documentation
- Monitoring và logging data
- Recent incident reports
- Cost và performance metrics
- `infrastructure-checklist.md` (primary review framework)

## Key Activities & Instructions

### 1. Confirm Interaction Mode

- Hỏi user: "Bạn muốn proceed với infrastructure review như thế nào? Chúng ta có thể làm việc:
  A. **Incrementally (Default & Recommended):** Chúng ta sẽ work qua mỗi section của checklist methodically, documenting findings cho mỗi item trước khi moving đến next section. Điều này provides thorough review.
  B. **"YOLO" Mode:** Tôi có thể perform rapid assessment của tất cả infrastructure components và present comprehensive findings report. Điều này nhanh hơn nhưng có thể miss nuanced details."
- Request user select preferred mode của họ và proceed accordingly.

### 2. Prepare cho Review

- Gather và organize current infrastructure documentation
- Access monitoring và logging systems cho operational data
- Review recent incident reports cho recurring issues
- Collect cost và performance metrics
- <critical_rule>Establish review scope và boundaries với user trước khi proceeding</critical_rule>

### 3. Conduct Systematic Review

- **Nếu "Incremental Mode" được selected:**
  - Cho mỗi section của infrastructure checklist:
    - **a. Present Section Focus:** Explain aspects gì của infrastructure section này reviews
    - **b. Work Through Items:** Examine mỗi checklist item against current infrastructure
    - **c. Document Current State:** Record cách current implementation addresses hoặc fails address mỗi item
    - **d. Identify Gaps:** Document improvement opportunities với specific recommendations
    - **e. [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)**
    - **f. Section Summary:** Provide assessment summary trước khi moving đến next section

- **Nếu "YOLO Mode" được selected:**
  - Rapidly assess tất cả infrastructure components
  - Document key findings và improvement opportunities
  - Present comprehensive review report
  - <important_note>Sau khi presenting full review trong YOLO mode, bạn CÓ THỂ vẫn offer 'Advanced Reflective & Elicitation Options' menu cho deeper investigation của specific areas với issues.</important_note>

### 4. Generate Findings Report

- Summarize review findings by category (Security, Performance, Cost, Reliability, v.v.)
- Prioritize identified issues (Critical, High, Medium, Low)
- Document recommendations với estimated effort và impact
- Create improvement roadmap với suggested timelines
- Highlight cost optimization opportunities

### 5. BMAD Integration Assessment

- Evaluate cách current infrastructure supports other BMAD agents:
  - **Development Support:** Assess cách infrastructure enables Frontend Dev (Mira), Backend Dev (Enrique), và Full Stack Dev workflows
  - **Product Alignment:** Verify infrastructure supports PRD requirements từ Product Owner (Oli)
  - **Architecture Compliance:** Check nếu implementation follows Architect (Alphonse) decisions
  - Document bất kỳ gaps nào trong BMAD integration

### 6. Architectural Escalation Assessment

- **DevOps/Platform → Architect Escalation Review:**
  - Evaluate review findings cho issues requiring architectural intervention:
    - **Technical Debt Escalation:**
      - Identify infrastructure technical debt impacts system architecture
      - Document technical debt items require architectural redesign vs. operational fixes
      - Assess cumulative technical debt impact trên system maintainability và scalability
    - **Performance/Security Issue Escalation:**
      - Identify performance bottlenecks require architectural solutions (không chỉ operational tuning)
      - Document security vulnerabilities cần architectural security pattern changes
      - Assess capacity và scalability issues requiring architectural scaling strategy revision
    - **Technology Evolution Escalation:**
      - Identify outdated technologies cần architectural migration planning
      - Document new technology opportunities có thể improve system architecture
      - Assess technology compatibility issues requiring architectural integration strategy changes
  - **Escalation Decision Matrix:**
    - **Critical Architectural Issues:** Require immediate Architect Agent involvement cho system redesign
    - **Significant Architectural Concerns:** Recommend Architect Agent review cho potential architecture evolution
    - **Operational Issues:** Có thể được addressed qua operational improvements mà không có architectural changes
    - **Unclear/Ambiguous Issues:** Khi escalation level unclear, consult với user cho guidance và decision
  - Document escalation recommendations với clear justification và impact assessment
  - <critical_rule>Nếu escalation classification unclear hoặc ambiguous, HALT và ask user cho guidance về appropriate escalation level và approach</critical_rule>

### 7. Present và Plan

- Prepare executive summary của key findings
- Create detailed technical documentation cho implementation teams
- Develop action plan cho critical và high-priority items
- **Prepare Architectural Escalation Report** (nếu applicable):
  - Document tất cả findings requiring Architect Agent attention
  - Provide specific recommendations cho architectural changes hoặc reviews
  - Include impact assessment và priority levels cho architectural work
  - Prepare escalation summary cho Architect Agent collaboration
- Schedule follow-up reviews cho specific areas
- <important_note>Present findings trong cách enables clear decision-making trên next steps và escalation needs.</important_note>

### 8. Execute Escalation Protocol

- **Nếu Critical Architectural Issues Identified:**
  - **Immediate Escalation đến Architect Agent:**
    - Present architectural escalation report với critical findings
    - Request architectural review và potential redesign cho identified issues
    - Collaborate với Architect Agent trên priority và timeline cho architectural changes
    - Document escalation outcomes và planned architectural work
- **Nếu Significant Architectural Concerns Identified:**
  - **Scheduled Architectural Review:**
    - Prepare detailed technical findings cho Architect Agent review
    - Request architectural assessment của identified concerns
    - Schedule collaborative planning session cho potential architectural evolution
    - Document architectural recommendations và planned follow-up
- **Nếu Only Operational Issues Identified:**
  - Proceed với operational improvement planning mà không có architectural escalation
  - Monitor cho future architectural implications của operational changes
- **Nếu Unclear/Ambiguous Escalation Needed:**
  - **User Consultation Required:**
    - Present unclear findings và escalation options đến user
    - Request user guidance trên appropriate escalation level và approach
    - Document user decision và rationale cho escalation approach
    - Proceed với user-directed escalation path
- <critical_rule>Tất cả critical architectural escalations phải được documented và acknowledged bởi Architect Agent trước khi proceeding với implementation</critical_rule>

## Output

Comprehensive infrastructure review report bao gồm:

1. **Current state assessment** cho mỗi infrastructure component
2. **Prioritized findings** với severity ratings
3. **Detailed recommendations** với effort/impact estimates
4. **Cost optimization opportunities**
5. **BMAD integration assessment**
6. **Architectural escalation assessment** với clear escalation recommendations
7. **Action plan** cho critical improvements và architectural work
8. **Escalation documentation** cho Architect Agent collaboration (nếu applicable)

## Offer Advanced Self-Refinement & Elicitation Options

Present user với following list của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Explain rằng những này optional steps để help ensure quality, explore alternatives, và deepen understanding của current section trước khi finalizing nó và moving on. User có thể select action by number, hoặc choose skip điều này và proceed finalize section.

"Để ensure quality của current section: **[Specific Section Name]** và ensure robustness của nó, explore alternatives, và consider tất cả angles, tôi có thể perform bất kỳ following actions nào. Please choose number (8 để finalize và proceed):

**Advanced Reflective, Elicitation & Brainstorming Actions I Can Take:**

1. **Root Cause Analysis & Pattern Recognition**
2. **Industry Best Practice Comparison**
3. **Future Scalability & Growth Impact Assessment**
4. **Security Vulnerability & Threat Model Analysis**
5. **Operational Efficiency & Automation Opportunities**
6. **Cost Structure Analysis & Optimization Strategy**
7. **Compliance & Governance Gap Assessment**
8. **Finalize this Section and Proceed.**

Sau khi tôi perform selected action, chúng ta có thể discuss outcome và decide trên bất kỳ further revisions nào cho section này."

REPEAT bằng cách Asking user nếu họ muốn perform another Reflective, Elicitation & Brainstorming Action UNTIL user indicates it is time để proceed đến next section (hoặc selects #8)