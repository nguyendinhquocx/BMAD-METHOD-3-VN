# Danh Sách Kiểm Tra Tài Liệu Kiến Trúc Frontend

## Mục Đích

Danh sách kiểm tra này dành cho Design Architect sử dụng sau khi hoàn thành "Chế Độ Kiến Trúc Frontend" và điền vào tài liệu `front-end-architecture-tmpl.txt` (hoặc `.md`). Nó đảm bảo tất cả các phần được bao phủ toàn diện và đáp ứng tiêu chuẩn chất lượng trước khi hoàn thiện.

---

## I. Giới Thiệu

- [ ] `{Tên Dự Án}` có được điền chính xác trong toàn bộ phần Giới Thiệu không?
- [ ] Liên kết đến Tài Liệu Kiến Trúc Chính có mặt và chính xác không?
- [ ] Liên kết đến Đặc Tả UI/UX có mặt và chính xác không?
- [ ] Liên kết đến Các File Thiết Kế Chính (Figma, Sketch, v.v.) có mặt và chính xác không?
- [ ] Liên kết đến Storybook Đã Triển Khai / Component Showcase có được bao gồm, nếu áp dụng và có sẵn không?

## II. Triết Lý & Mẫu Frontend Tổng Thể

- [ ] Framework & Thư Viện Cốt Lõi được chọn có được nêu rõ và phù hợp với tài liệu kiến trúc chính không?
- [ ] Kiến Trúc Component (ví dụ: Atomic Design, Presentational/Container) có được mô tả rõ ràng không?
- [ ] Chiến Lược Quản Lý State (ví dụ: Redux Toolkit, Zustand) có được mô tả rõ ràng ở mức cao không?
- [ ] Data Flow (ví dụ: Unidirectional) có được giải thích rõ ràng không?
- [ ] Cách Tiếp Cận Styling (ví dụ: CSS Modules, Tailwind CSS) có được định nghĩa rõ ràng không?
- [ ] Các Key Design Patterns được sử dụng (ví dụ: Provider, Hooks) có được liệt kê không?
- [ ] Phần này có phù hợp với "Lựa Chọn Tech Stack Dứt Khoát" trong tài liệu kiến trúc chính không?
- [ ] Các hệ quả từ kiến trúc hệ thống tổng thể (monorepo/polyrepo, backend services) có được xem xét không?

## III. Cấu Trúc Thư Mục Frontend Chi Tiết

- [ ] Có cung cấp sơ đồ ASCII đại diện cho cấu trúc thư mục của ứng dụng frontend không?
- [ ] Sơ đồ có rõ ràng, chính xác và phản ánh framework/patterns được chọn không?
- [ ] Các quy ước để tổ chức components, pages, services, state, styles, v.v. có được nổi bật không?
- [ ] Các ghi chú giải thích quy ước cụ thể hoặc lý do cho cấu trúc có mặt và rõ ràng không?

## IV. Phân Tích Component & Chi Tiết Triển Khai

### Đặt Tên & Tổ Chức Component

- [ ] Các quy ước để đặt tên components (ví dụ: PascalCase) có được mô tả không?
- [ ] Tổ chức components trên filesystem có được giải thích rõ ràng không (nhắc lại từ cấu trúc thư mục nếu cần)?

### Template cho Đặc Tả Component

- [ ] "Template cho Đặc Tả Component" chính nó có hoàn chỉnh và được định nghĩa tốt không?
  - [ ] Có bao gồm các trường cho: Mục Đích, File Nguồn, Tham Chiếu Hình Ảnh không?
  - [ ] Có bao gồm cấu trúc bảng cho Props (Tên, Loại, Bắt Buộc, Mặc Định, Mô Tả) không?
  - [ ] Có bao gồm cấu trúc bảng cho Internal State (Biến, Loại, Giá Trị Ban Đầu, Mô Tả) không?
  - [ ] Có bao gồm phần cho Key UI Elements / Structure (văn bản hoặc pseudo-HTML) không?
  - [ ] Có bao gồm phần cho Events Handled / Emitted không?
  - [ ] Có bao gồm phần cho Actions Triggered (State Management, API Calls) không?
  - [ ] Có bao gồm phần cho Styling Notes không?
  - [ ] Có bao gồm phần cho Accessibility Notes không?
- [ ] Có tuyên bố rõ ràng rằng template này nên được sử dụng cho hầu hết các components cụ thể tính năng không?

### Components Cơ Sở/Chia Sẻ (nếu được chỉ định trước)

- [ ] Nếu có bất kỳ components UI cơ sở/chia sẻ nào được chỉ định, chúng có tuân theo "Template cho Đặc Tả Component" không?
- [ ] Lý do để chỉ định các components này trước có rõ ràng không?

## V. Quản Lý State Chuyên Sâu

- [ ] Giải Pháp Quản Lý State được chọn có được nhắc lại và lý do được cung cấp ngắn gọn không (nếu chưa được bao phủ đầy đủ trong tài liệu kiến trúc chính)?
- [ ] Các quy ước cho Store Structure / Slices có được định nghĩa rõ ràng không (ví dụ: vị trí, slices dựa trên tính năng)?
- [ ] Nếu Ví Dụ Core Slice (ví dụ: `sessionSlice`) được cung cấp:
  - [ ] Mục đích của nó có rõ ràng không?
  - [ ] State Shape của nó có được định nghĩa không (ví dụ: sử dụng TypeScript interface)?
  - [ ] Key Reducers/Actions của nó có được liệt kê không?
- [ ] Có cung cấp Feature Slice Template, nêu rõ mục đích, state shape, và key reducers/actions cần điền không?
- [ ] Các quy ước cho Key Selectors có được ghi chú không (ví dụ: sử dụng `createSelector`)?
- [ ] Có cung cấp ví dụ về Key Selectors cho bất kỳ core slices nào không?
- [ ] Các quy ước cho Key Actions / Reducers / Thunks (đặc biệt là async) có được mô tả không?
- [ ] Có cung cấp ví dụ về Core Action/Thunk (ví dụ: `authenticateUser`), chi tiết mục đích và dispatch flow của nó không?
- [ ] Có cung cấp Feature Action/Thunk Template cho các hoạt động async cụ thể tính năng không?

## VI. Lớp Tương Tác API

- [ ] HTTP Client Setup có được chi tiết không (ví dụ: Axios instance, Fetch wrapper, base URL, default headers, interceptors)?
- [ ] Các quy ước Service Definitions có được giải thích không?
- [ ] Có cung cấp ví dụ về service (ví dụ: `userService.ts`), bao gồm mục đích và các hàm ví dụ không?
- [ ] Global Error Handling cho API calls có được mô tả không (ví dụ: toast notifications, global error state)?
- [ ] Có cung cấp hướng dẫn về Specific Error Handling trong components không?
- [ ] Có chi tiết và cấu hình bất kỳ Retry Logic phía client cho API calls không?

## VII. Chiến Lược Routing

- [ ] Routing Library được chọn có được nêu không?
- [ ] Có cung cấp bảng Route Definitions không?
  - [ ] Có bao gồm Path Pattern, Component/Page, trạng thái Protection, và Notes cho mỗi route không?
  - [ ] Tất cả key application routes có được liệt kê không?
- [ ] Cơ chế Authentication Guard để bảo vệ routes có được mô tả không?
- [ ] Cơ chế Authorization Guard (nếu áp dụng cho roles/permissions) có được mô tả không?

## VIII. Build, Bundling, và Deployment

- [ ] Key Build Scripts (ví dụ: `npm run build`) có được liệt kê và mục đích được giải thích không?
- [ ] Xử lý Environment Variables trong quá trình build có được mô tả cho các môi trường khác nhau không?
- [ ] Chiến lược Code Splitting có được chi tiết không (ví dụ: route-based, component-based)?
- [ ] Tree Shaking có được xác nhận hoặc giải thích không?
- [ ] Chiến lược Lazy Loading (cho components, images, routes) có được nêu rõ không?
- [ ] Minification & Compression bởi build tools có được đề cập không?
- [ ] Target Deployment Platform (ví dụ: Vercel, Netlify) có được chỉ định không?
- [ ] Deployment Trigger (ví dụ: Git push qua CI/CD) có được mô tả, tham chiếu đến main CI/CD pipeline không?
- [ ] Asset Caching Strategy (CDN/browser) cho static assets có được nêu rõ không?

## IX. Chiến Lược Testing Frontend

- [ ] Có liên kết đến tài liệu/phần Main Testing Strategy, và có chính xác không?
- [ ] Cho Component Testing:
  - [ ] Scope có được định nghĩa rõ ràng không?
  - [ ] Tools có được liệt kê không?
  - [ ] Focus của tests (rendering, props, interactions) có rõ ràng không?
  - [ ] Location của test files có được chỉ định không?
- [ ] Cho UI Integration/Flow Testing:
  - [ ] Scope (interactions giữa multiple components) có rõ ràng không?
  - [ ] Tools có được liệt kê không (có thể giống component testing)?
  - [ ] Focus của những tests này có rõ ràng không?
- [ ] Cho End-to-End UI Testing:
  - [ ] Tools (ví dụ: Playwright, Cypress) có được nhắc lại từ main strategy không?
  - [ ] Scope (key user journeys cho frontend) có được định nghĩa không?
  - [ ] Test Data Management cho UI E2E tests có được giải quyết không?

## X. Chi Tiết Triển Khai Accessibility (AX)

- [ ] Có nhấn mạnh việc sử dụng Semantic HTML không?
- [ ] Có cung cấp hướng dẫn cho ARIA Implementation (roles, states, properties cho custom components) không?
- [ ] Có nêu yêu cầu cho Keyboard Navigation (tất cả interactive elements focusable/operable) không?
- [ ] Focus Management (cho modals, dynamic content) có được giải quyết không?
- [ ] Testing Tools cho AX (ví dụ: Axe DevTools, Lighthouse) có được liệt kê không?
- [ ] Phần này có phù hợp với yêu cầu AX từ UI/UX Specification không?

## XI. Cân Nhắc Performance

- [ ] Image Optimization (formats, responsive images, lazy loading) có được thảo luận không?
- [ ] Code Splitting & Lazy Loading (tác động lên perceived performance) có được nhắc lại nếu cần không?
- [ ] Các kỹ thuật Minimizing Re-renders (ví dụ: `React.memo`) có được đề cập không?
- [ ] Việc sử dụng Debouncing/Throttling cho event handlers có được xem xét không?
- [ ] Virtualization cho long lists/large data sets có được đề cập nếu áp dụng không?
- [ ] Client-Side Caching Strategies (browser cache, service workers) có được thảo luận nếu liên quan không?
- [ ] Performance Monitoring Tools (ví dụ: Lighthouse, DevTools) có được liệt kê không?

## XII. Change Log

- [ ] Bảng Change Log có mặt và được khởi tạo không?
- [ ] Có quy trình để cập nhật change log khi tài liệu phát triển không?

---

## Final Review Sign-off

- [ ] Tất cả placeholders (ví dụ: `{Tên Dự Án}`, `{ví dụ: ...}`) đã được điền vào hoặc loại bỏ ở nơi thích hợp chưa?
- [ ] Tài liệu đã được Design Architect xem xét về tính rõ ràng, nhất quán và đầy đủ chưa?
- [ ] Tất cả linked documents (Main Architecture, UI/UX Spec) đã được hoàn thiện hoặc đủ ổn định để tài liệu này có thể dựa vào chưa?
- [ ] Tài liệu đã sẵn sàng để chia sẻ với development team chưa?