# Tài Liệu Mở Rộng

Nếu bạn đến đây mà chưa thiết lập web agent - tôi khuyến khích bạn làm điều đó và nói chuyện với web agent, dễ dàng hơn nhiều so với việc đọc những tài liệu gây buồn ngủ này.

## Thiết Lập Nhanh Dự Án IDE

Sau khi bạn clone dự án về máy local, bạn có thể copy thư mục `bmad-agent` vào thư mục gốc dự án của bạn. Điều này sẽ đưa các templates, checklists, và các tài sản khác mà local agents sẽ cần để sử dụng các agents từ IDE của bạn thay vì Web Agent. Tối thiểu để build dự án của bạn, bạn sẽ muốn có sm.ide.md và dev.ide.md để bạn có thể soạn thảo và xây dựng dự án của mình từng bước.

Đây là [Hướng Dẫn Thiết Lập và Sử Dụng](./instruction.md) chi tiết hơn cho IDE, WEB và thiết lập Task.

Bắt đầu với phiên bản mới nhất của BMad Agents cho Phương Pháp BMad rất dễ dàng - tất cả những gì bạn cần làm là copy thư mục `bmad-agent` vào dự án của bạn. Các dev và sm chuyên dụng có trong các phiên bản trước vẫn có sẵn và nằm trong thư mục `bmad-agent/personas` với phần mở rộng .ide.md. Copy và paste nội dung vào phương pháp cấu hình custom agent mode của IDE cụ thể của bạn. Cả dev và sm đều được cấu hình cho architecture và prd artifacts ở (project-root)/docs và stories sẽ được tạo ra và phát triển trong/từ (project-root)/docs/stories.

Để sử dụng tất cả các agent khác (bao gồm cả dev và sm), bạn có thể thiết lập [ide orchestrator](../bmad-agent/ide-bmad-orchestrator.md) - bạn có thể yêu cầu orchestrator bmad trở thành bất kỳ agent nào mà bạn đã [cấu hình](../bmad-agent/ide-bmad-orchestrator.cfg.md).

[Thiết Lập Chung IDE Custom Mode](../docs/ide-setup.md).

## Thúc Đẩy Phát Triển Điều Khiển bởi AI

Chào mừng đến với phiên bản mới nhất và tiên tiến nhất nhưng vẫn dễ sử dụng của Web và IDE Agent Agile Workflow! Phiên bản mới này, được gọi là BMad Agent version V3, đại diện cho một sự tiến hóa đáng kể dựa trên các phiên bản trước.

## Có Gì Mới?

Tất cả IDE Agents hiện được tối ưu hóa để dưới 6K ký tự, vì vậy chúng sẽ hoạt động với các hạn chế giới hạn file của windsurf.

Phương pháp này hiện có một Orchestrator siêu cấp gọi là BMAD - agent này sẽ đưa việc sử dụng web hoặc ide của bạn lên một tầm cao mới - agent này có thể biến hình và trở thành agent cụ thể mà bạn muốn làm việc! Điều này làm cho việc sử dụng Web trở nên cực kỳ dễ dàng để sử dụng và thiết lập. Và trong IDE - bạn không phải thiết lập quá nhiều agents khác nhau nếu bạn không muốn!

Đã có những cải tiến đáng kể trong việc tạo ra các tài liệu và artifacts và các agents hiện được lập trình để thực sự giúp bạn xây dựng những kế hoạch tốt nhất có thể. Các kỹ thuật prompting LLM tiên tiến đã được tích hợp và lập trình để giúp bạn giúp các agents tạo ra những artifacts chính xác tuyệt vời, không giống bất cứ thứ gì được thấy trước đây. Ngoài ra, các agents hiện có thể cấu hình được về những gì chúng có thể và không thể làm - vì vậy bạn có thể chấp nhận các mặc định, hoặc đặt personas nào có thể làm những tasks nào. Nếu bạn nghĩ PO nên là người tạo PRDs và Scrum Master nên là người điều chỉnh khóa học của bạn - tất cả đều có thể hiện tại! **Định nghĩa agile theo cách BMad - hoặc theo cách của bạn!**

Mặc dù điều này rất mạnh mẽ - bạn có thể bắt đầu với thiết lập mặc định được khuyến nghị như trong repo này, và về cơ bản sử dụng các agents như chúng được hình dung và sẽ được giải thích. Cấu hình và sử dụng chi tiết được nêu trong [Hướng Dẫn](./instruction.md)

## Phương Pháp BMad Là Gì?

Phương Pháp BMad là một cách tiếp cận cách mạng nâng "vibe coding" lên kế hoạch dự án tiên tiến để đảm bảo các developer agents của bạn có thể bắt đầu và hoàn thành các dự án tiên tiến với hướng dẫn rất rõ ràng. Nó cung cấp một framework có cấu trúc nhưng linh hoạt để lập kế hoạch, thực thi và quản lý các dự án phần mềm bằng cách sử dụng một team các AI agents chuyên biệt.

Phương pháp và công cụ này không chỉ là một task runner - đây là một công cụ tinh tế sẽ giúp bạn đưa ra những ý tưởng tốt nhất, xác định những gì bạn thực sự muốn xây dựng, và thực hiện nó! Từ ý tưởng, đến tạo PRD, đến việc ra quyết định kỹ thuật - điều này sẽ giúp bạn làm tất cả với sức mạnh của hướng dẫn LLM tiên tiến.

Phương pháp này được thiết kế để độc lập với công cụ về nguyên tắc, với các hướng dẫn agent và workflows có thể thích ứng với các nền tảng AI và IDEs khác nhau.

## Agile Agents

Agents được lập trình hoặc trực tiếp tự chứa để thả ngay vào cấu hình agent trong ide - hoặc chúng có thể được cấu hình như các thực thể có thể lập trình mà orchestrating agent có thể trở thành.

### Web Agents

Gemini 2.5 hoặc Open AI customGPTs được tạo bằng cách chạy node build script để tạo output vào build folder. Output này là package đầy đủ để tạo orchestrator web agent.

Xem [Hướng Dẫn Thiết Lập và Sử Dụng Web Orchestration](./instruction.md#setting-up-web-agent-orchestrator) chi tiết

### IDE Agents

Có các agents chuyên dụng tự chứa độc lập, và cũng có một IDE version của orchestrator. Đối với các standalone, có:

- [Dev IDE Agent](../bmad-agent/personas/dev.ide.md)
- [Story Generating SM Agent](../bmad-agent/personas/sm.ide.md)

Nếu bạn muốn sử dụng các agents khác, bạn có thể sử dụng các agents khác từ thư mục đó - nhưng một số sẽ lớn hơn Windsurf cho phép - và có nhiều agents. Vì vậy được khuyến nghị hoặc sử dụng 1 off tasks - HOẶC thậm chí tốt hơn - sử dụng IDE Orchestrator Agent. Xem các [hướng dẫn thiết lập và Sử dụng cho IDE Orchestrator](./instruction.md#ide-agent-setup-and-usage).

## Tasks

Nằm trong `bmad-agent/tasks/`, các bộ hướng dẫn tự chứa này cho phép IDE agents hoặc các agents được cấu hình của orchestrators thực hiện các công việc cụ thể. Chúng cũng có thể được sử dụng như các lệnh một lần với một vanilla agent trong ide bằng cách chỉ tham chiếu task và yêu cầu agent thực hiện nó.

**Mục Đích:**

- **Giảm Agent Bloat:** Tránh thêm các hướng dẫn ít được sử dụng vào các agents chính.
- **Chức Năng Theo Yêu Cầu:** Hướng dẫn bất kỳ IDE agent có khả năng nào thực thi một task bằng cách cung cấp nội dung file task.
- **Tính Linh Hoạt:** Xử lý các chức năng cụ thể như chạy checklists, tạo stories, sharding documents, indexing libraries, v.v.

Hãy nghĩ về tasks như các mini-agents chuyên biệt có thể được gọi bởi các IDE agents chính của bạn.