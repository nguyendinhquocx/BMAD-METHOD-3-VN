# Hướng Dẫn IDE Cho Cấu Hình Agent

Uber Orchestrating BMad Agent được khuyến khích chủ yếu sử dụng trong Gemini Web, đặc biệt để làm việc với brief, PRD, high level Epics, Stories, Web Design và Prompt Output. NHƯNG - Tất cả cũng có thể được thực hiện trong IDE nếu mong muốn, xem phần thiết lập BMad Agent bên dưới.

## Single Agent

Tạo custom mode theo docs, và paste vào bất kỳ agents nào kết thúc với .ide.md từ thư mục personas.

## Tasks

Vì cursor hiện tại giới hạn tổng số custom modes được phép - bạn có thể sử dụng tasks để xử lý các hành động 1 lần mà bạn có thể muốn agent thực hiện. Chỉ cần kéo task vào bất kỳ cửa sổ chat agent nào và yêu cầu agent hoàn thành task.

## BMad Agent

BMad Agent yêu cầu toàn bộ thư mục bmad agent ở root của dự án của bạn. Thiết lập orchestrator chỉ đơn giản yêu cầu copy nội dung markdown của ide-bmad-orchestrator.md theo cách tương tự như bạn làm với Single Agent.

## Thiết Lập Custom Modes Trong Cursor

Để sử dụng custom agent modes - xem xét docs tại đây: https://docs.cursor.com/chat/custom-modes.

- Cụ thể bạn sẽ cần enable Custom Modes trong: Settings → Features → Chat → Custom modes
- Custom Agents có thể được tạo và cấu hình với specific tools, models, và custom prompts
- Cursor cho phép tạo custom agents thông qua GUI interface

LƯU Ý từ Cursor: "Chúng tôi đang xem xét việc thêm file .cursor/modes.json vào dự án của bạn để dễ dàng tạo và chia sẻ custom modes hơn."

## Windsurf

### Thiết Lập Custom Modes Trong Windsurf

1. **Truy Cập Agent Configuration**:

   - Click vào nút "Windsurf - Settings" ở góc dưới bên phải
   - Truy cập Advanced Settings qua nút trong settings panel hoặc từ profile dropdown góc trên bên phải

2. **Cấu Hình Custom Rules**:

   - Định nghĩa custom AI rules cho Cascade (agentic chatbot của Windsurf)
   - Chỉ định rằng agents nên phản hồi theo cách nhất định, sử dụng frameworks cụ thể, hoặc tuân theo APIs cụ thể

3. **Sử Dụng Flows**:

   - Flows kết hợp Agents và Copilots cho comprehensive workflow
   - Windsurf Editor được thiết kế cho AI agents có thể xử lý các tasks phức tạp một cách độc lập
   - Sử dụng Model Context Protocol (MCP) để mở rộng khả năng agent

4. **BMAD Method Implementation**:
   - Tạo custom agents cho mỗi role trong BMAD workflow
   - Cấu hình mỗi agent với permissions và capabilities thích hợp
   - Sử dụng tính năng agentic của Windsurf để duy trì workflow continuity

## RooCode

### Thiết Lập Custom Agents Trong RooCode

1. **Custom Modes Configuration**:

   - Tạo AI behaviors phù hợp thông qua configuration files
   - Mỗi custom mode có thể có specific prompts, file restrictions, và auto-approval settings

2. **Tạo BMAD Method Agents**:

   - Tạo distinct modes cho mỗi BMAD role (Analyst, PM, Architect, Design Architect, PO, SM, Dev, v.v...)
   - Customize mỗi mode với tailored prompts cụ thể cho role của họ
   - Cấu hình file restrictions thích hợp cho mỗi role (ví dụ: Architect và PM modes có thể edit markdown files)
   - Thiết lập direct mode switching để agents có thể yêu cầu switch sang modes khác khi cần

3. **Model Configuration**:

   - Cấu hình different models per mode (ví dụ: advanced model cho architecture vs. cheaper model cho daily coding tasks)
   - RooCode hỗ trợ multiple API providers bao gồm OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, và local models

4. **Usage Tracking**:
   - Monitor token và cost usage cho mỗi session
   - Optimize model selection dựa trên complexity của tasks

## Cline

### Thiết Lập Custom Agents Trong Cline

1. **Custom Instructions**:

   - Truy cập qua Cline > Settings > Custom Instructions
   - Cung cấp behavioral guidelines cho agents của bạn

2. **Custom Tools Integration**:

   - Cline có thể extend capabilities thông qua Model Context Protocol (MCP)
   - Yêu cầu Cline "add a tool" và nó sẽ tạo MCP server mới phù hợp với workflow cụ thể của bạn
   - Custom tools được lưu locally tại ~/Documents/Cline/MCP, làm cho chúng dễ chia sẻ với team của bạn

3. **BMAD Method Implementation**:

   - Tạo custom tools cho mỗi role trong BMAD workflow
   - Cấu hình behavioral guidelines cụ thể cho mỗi role
   - Sử dụng khả năng autonomous của Cline để xử lý entire workflow

4. **Model Selection**:
   - Cấu hình Cline để sử dụng different models dựa trên role và task complexity

## GitHub Copilot

### Custom Agent Configuration (Sắp Ra Mắt)

https://github.com/microsoft/vscode-copilot-release/issues/9452

GitHub Copilot hiện đang phát triển hệ thống Copilot Extensions, cho phép tạo custom agent/mode:

1. **Copilot Extensions**:

   - Kết hợp GitHub App với Copilot agent để tạo custom functionality
   - Cho phép developers xây dựng và integrate custom features trực tiếp vào Copilot Chat

2. **Xây Dựng Custom Agents**:

   - Yêu cầu tạo GitHub App và integrate nó với Copilot agent
   - Custom agents có thể được deploy lên server có thể truy cập bằng HTTP request

3. **Custom Instructions**:
   - Hiện tại hỗ trợ basic custom instructions để hướng dẫn general behavior
   - Full agent customization support đang được phát triển

_Lưu Ý: Full custom mode configuration trong GitHub Copilot vẫn đang trong quá trình phát triển. Kiểm tra documentation của GitHub cho updates mới nhất._