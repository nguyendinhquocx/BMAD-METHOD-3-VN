# Nhiệm Vụ Platform Infrastructure Implementation

## Mục Đích

Để implement comprehensive platform infrastructure stack dựa trên Infrastructure Architecture Document, bao gồm foundation infrastructure, container orchestration, GitOps workflows, service mesh, và developer experience platforms. Integrated approach này ensures tất cả platform components work synergistically để provide complete, secure, và operationally excellent platform foundation.

## Inputs

- **Infrastructure Architecture Document** (`docs/infrastructure-architecture.md` - từ Architect Agent)
- Infrastructure Change Request (`docs/infrastructure/{ticketNumber}.change.md`)
- Infrastructure Guidelines (`docs/infrastructure/guidelines.md`)
- Technology Stack Document (`docs/tech-stack.md`)
- `infrastructure-checklist.md` (cho validation)

## Key Activities & Instructions

### 1. Confirm Interaction Mode

- Hỏi user: "Bạn muốn proceed với platform infrastructure implementation như thế nào? Chúng ta có thể làm việc:
  A. **Incrementally (Default & Recommended):** Chúng ta sẽ implement mỗi platform layer step-by-step (Foundation → Container Platform → GitOps → Service Mesh → Developer Experience), validating integration ở mỗi stage. Điều này ensures thorough testing và operational readiness.
  B. **"YOLO" Mode:** Tôi sẽ implement complete platform stack trong logical groups, với validation ở major integration milestones. Điều này nhanh hơn nhưng requires comprehensive end-to-end testing."
- Request user select preferred mode của họ và proceed accordingly.

### 2. Architecture Review & Implementation Planning

- Review Infrastructure Architecture Document cho complete platform specifications
- Validate platform requirements against application architecture và business needs
- Create integrated implementation roadmap với proper dependency sequencing
- Plan resource allocation, security policies, và operational procedures across tất cả platform layers
- Document rollback procedures và risk mitigation strategies cho entire platform
- <critical_rule>Verify infrastructure change request approved trước khi beginning implementation. Nếu không, HALT và inform user.</critical_rule>

### 3. Joint Implementation Planning Session

- **Architect ↔ DevOps/Platform Collaborative Planning:**
  - **Architecture Alignment Review:**
    - Confirm understanding của architectural decisions và rationale với Architect Agent
    - Validate interpretation của infrastructure architecture document
    - Clarify bất kỳ ambiguous hoặc unclear architectural specifications nào
    - Document agreed-upon implementation approach cho mỗi architectural component
  - **Implementation Strategy Collaboration:**
    - **Technology Implementation Planning:** Collaborate trên specific technology versions, configurations, và deployment patterns
    - **Security Implementation Planning:** Align trên security control implementation approach và validation methods
    - **Integration Planning:** Plan component integration sequence và validation checkpoints
    - **Operational Considerations:** Discuss operational patterns, monitoring strategies, và maintenance approaches
    - **Resource Planning:** Confirm resource allocation, sizing, và optimization strategies
  - **Risk & Constraint Discussion:**
    - Identify potential implementation risks và mitigation strategies
    - Document operational constraints có thể impact architectural implementation
    - Plan contingency approaches cho high-risk implementation areas
    - Establish escalation triggers cho implementation issues requiring architectural input
  - **Implementation Validation Planning:**
    - Define validation criteria cho mỗi platform component và integration point
    - Plan testing strategies và acceptance criteria với Architect input
    - Establish quality gates và review checkpoints throughout implementation
    - Document success metrics và performance benchmarks
  - **Documentation & Knowledge Transfer Planning:**
    - Plan documentation approach và knowledge transfer requirements
    - Define operational runbooks và troubleshooting guide requirements
    - Establish ongoing collaboration points cho implementation support
- <critical_rule>Complete joint planning session trước khi beginning platform implementation. Document tất cả planning outcomes và agreements.</critical_rule>

### 4. Foundation Infrastructure Implementation

- **Nếu "Incremental Mode" được selected:**
  - **a. Foundation Infrastructure Setup:**
    - Present foundation infrastructure scope và role của nó trong platform stack
    - Implement core cloud resources, networking, storage, và security foundations
    - Configure basic monitoring, logging, và operational tooling
    - Validate foundation readiness cho platform components
    - [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)

- **Nếu "YOLO Mode" được selected:**
  - Implement complete foundation infrastructure per architecture specifications
  - Prepare foundation cho tất cả platform components simultaneously

### 5. Container Platform Implementation

- **Nếu "Incremental Mode" được selected:**
  - **b. Container Orchestration Platform:**
    - Present container platform scope và integration với foundation infrastructure
    - Install và configure container orchestration platform (Kubernetes/AKS/EKS/GKE)
    - Implement RBAC, security policies, và resource management
    - Configure networking, storage classes, và operational tooling
    - Validate container platform functionality và readiness cho applications
    - [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)

- **Nếu "YOLO Mode" được selected:**
  - Deploy complete container platform integrated với foundation infrastructure

### 6. GitOps Workflows Implementation

- **Nếu "Incremental Mode" được selected:**
  - **c. GitOps Configuration Management:**
    - Present GitOps scope và integration với container platform
    - Implement GitOps operators và configuration management systems
    - Configure repository structures, sync policies, và environment promotion
    - Set up policy enforcement và drift detection
    - Validate GitOps workflows và configuration management
    - [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)

- **Nếu "YOLO Mode" được selected:**
  - Deploy complete GitOps stack integrated với container và foundation platforms

### 7. Service Mesh Implementation

- **Nếu "Incremental Mode" được selected:**
  - **d. Service Communication Platform:**
    - Present service mesh scope và integration với existing platform layers
    - Install và configure service mesh control và data planes
    - Implement traffic management, security policies, và observability
    - Configure service discovery, load balancing, và communication policies
    - Validate service mesh functionality và inter-service communication
    - [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)

- **Nếu "YOLO Mode" được selected:**
  - Deploy complete service mesh integrated với tất cả platform components

### 8. Developer Experience Platform Implementation

- **Nếu "Incremental Mode" được selected:**
  - **e. Developer Experience Platform:**
    - Present developer platform scope và integration với complete platform stack
    - Implement developer portals, self-service capabilities, và golden path templates
    - Configure platform APIs, automation workflows, và productivity tooling
    - Set up developer onboarding và documentation systems
    - Validate developer experience và workflow integration
    - [Offer Advanced Self-Refinement & Elicitation Options](#offer-advanced-self-refinement--elicitation-options)

- **Nếu "YOLO Mode" được selected:**
  - Deploy complete developer experience platform integrated với tất cả infrastructure

### 9. Platform Integration & Security Hardening

- Implement end-to-end security policies across tất cả platform layers
- Configure integrated monitoring và observability cho complete platform stack
- Set up platform-wide backup, disaster recovery, và business continuity procedures
- Implement cost optimization và resource management across tất cả platform components
- Configure platform-wide compliance monitoring và audit logging
- Validate complete platform security posture và operational readiness

### 10. Platform Operations & Automation

- Set up comprehensive platform monitoring, alerting, và operational dashboards
- Implement automated platform maintenance, updates, và lifecycle management
- Configure platform health checks, performance optimization, và capacity planning
- Set up incident response procedures và operational runbooks cho complete platform
- Implement platform SLA monitoring và service level management
- Validate operational excellence và platform reliability

### 11. BMAD Workflow Integration

- Verify complete platform supports tất cả BMAD agent workflows:
  - **Frontend/Backend Development** - Test complete application development và deployment workflows
  - **Infrastructure Development** - Validate infrastructure-as-code development và deployment
  - **Cross-Agent Collaboration** - Ensure seamless collaboration giữa tất cả agent types
  - **CI/CD Integration** - Test complete continuous integration và deployment pipelines
  - **Monitoring & Observability** - Verify complete application và infrastructure monitoring
- Document comprehensive integration verification results và workflow optimizations

### 12. Platform Validation & Knowledge Transfer

- Execute comprehensive platform testing với realistic workloads và scenarios
- Validate against tất cả sections của infrastructure checklist cho complete platform
- Perform security scanning, compliance verification, và performance testing
- Test complete platform disaster recovery và resilience procedures
- Complete comprehensive knowledge transfer đến operations và development teams
- Document complete platform configuration, operational procedures, và troubleshooting guides
- <critical_rule>Update infrastructure change request status để reflect completion</critical_rule>

### 13. Implementation Review & Architect Collaboration

- **Post-Implementation Collaboration với Architect:**
  - **Implementation Validation Review:**
    - Present implementation outcomes against architectural specifications
    - Document bất kỳ deviations từ original architecture và rationale
    - Validate rằng implemented platform meets architectural intent và requirements
  - **Lessons Learned & Architecture Feedback:**
    - Provide feedback đến Architect Agent trên implementation experience
    - Document implementation challenges và successful patterns
    - Recommend architectural improvements cho future implementations
    - Share operational insights có thể influence future architectural decisions
  - **Knowledge Transfer & Documentation Review:**
    - Review operational documentation với Architect cho completeness và accuracy
    - Ensure architectural decisions properly documented trong operational guides
    - Plan ongoing collaboration cho platform evolution và maintenance
- Document collaboration outcomes và recommendations cho future architecture-implementation cycles

### 14. Platform Handover & Continuous Improvement

- Establish platform monitoring và continuous improvement processes
- Set up feedback loops với development teams và platform users
- Plan platform evolution roadmap và technology upgrade strategies
- Implement platform metrics và KPI tracking cho operational excellence
- Create platform governance và change management procedures
- Establish platform support và maintenance responsibilities

## Output

Fully operational và integrated platform infrastructure với:

1. **Complete Foundation Infrastructure** - Cloud resources, networking, storage, và security foundations
2. **Production-Ready Container Platform** - Orchestration với proper security, monitoring, và resource management
3. **Operational GitOps Workflows** - Version-controlled operations với automated sync và policy enforcement
4. **Service Mesh Communication Platform** - Advanced service communication với security và observability
5. **Developer Experience Platform** - Self-service capabilities với productivity tooling và golden paths
6. **Integrated Platform Operations** - Comprehensive monitoring, automation, và operational excellence
7. **BMAD Workflow Support** - Verified integration supporting tất cả agent development và deployment patterns
8. **Platform Documentation** - Complete operational guides, troubleshooting resources, và developer documentation
9. **Joint Planning Documentation** - Collaborative planning outcomes và architectural alignment records
10. **Implementation Review Results** - Post-implementation validation và architect collaboration outcomes

## Offer Advanced Self-Refinement & Elicitation Options

Present user với following list của 'Advanced Reflective, Elicitation & Brainstorming Actions'. Explain rằng những này optional steps để help ensure quality, explore alternatives, và deepen understanding của current platform layer trước khi finalizing nó và moving đến next. User có thể select action by number, hoặc choose skip điều này và proceed.

"Để ensure quality của current platform layer: **[Specific Platform Layer Name]** và ensure robustness của nó, explore alternatives, và consider tất cả angles, tôi có thể perform bất kỳ following actions nào. Please choose number (8 để finalize và proceed):

**Advanced Reflective, Elicitation & Brainstorming Actions I Can Take:**

1. **Platform Layer Security Hardening & Integration Review**
2. **Performance Optimization & Resource Efficiency Analysis**
3. **Operational Excellence & Automation Enhancement**
4. **Platform Integration & Dependency Validation**
5. **Developer Experience & Workflow Optimization**
6. **Disaster Recovery & Platform Resilience Testing (Theoretical)**
7. **BMAD Agent Workflow Integration & Cross-Platform Testing**
8. **Finalize this Platform Layer and Proceed.**

Sau khi tôi perform selected action, chúng ta có thể discuss outcome và decide trên bất kỳ further improvements nào cho platform layer này."

REPEAT bằng cách Asking user nếu họ muốn perform another Reflective, Elicitation & Brainstorming Action UNTIL user indicates it is time để proceed đến next platform layer (hoặc selects #8)