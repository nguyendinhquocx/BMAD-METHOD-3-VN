# Đặc Tả UI/UX {Tên Dự Án}

## Giới Thiệu

{Nêu mục đích - để định nghĩa user experience goals, information architecture, user flows, và visual design specifications cho user interface của dự án.}

- **Link đến Primary Design Files:** {ví dụ: Figma, Sketch, Adobe XD URL}
- **Link đến Deployed Storybook / Design System:** {URL, nếu applicable}

## UX Goals & Principles Tổng Thể

- **Target User Personas:** {Tham chiếu personas hoặc briefly describe key user types và goals của họ.}
- **Usability Goals:** {ví dụ: Ease of learning, efficiency of use, error prevention.}
- **Design Principles:** {Liệt kê 3-5 core principles hướng dẫn UI/UX design - ví dụ: "Clarity over cleverness", "Consistency", "Provide feedback".}

## Information Architecture (IA)

- **Site Map / Screen Inventory:**
  ```mermaid
  graph TD
      A[Homepage] --> B(Dashboard);
      A --> C{Settings};
      B --> D[View Details];
      C --> E[Profile Settings];
      C --> F[Notification Settings];
  ```
  _(Hoặc cung cấp list của tất cả screens/pages)_
- **Navigation Structure:** {Mô tả primary navigation (ví dụ: top bar, sidebar), secondary navigation, breadcrumbs, v.v.}

## User Flows

{Chi tiết key user tasks. Sử dụng diagrams hoặc descriptions.}

### {Tên User Flow, ví dụ: User Login}

- **Goal:** {Điều user muốn achieve.}
- **Steps / Diagram:**
  ```mermaid
  graph TD
      Start --> EnterCredentials[Enter Email/Password];
      EnterCredentials --> ClickLogin[Click Login Button];
      ClickLogin --> CheckAuth{Auth OK?};
      CheckAuth -- Yes --> Dashboard;
      CheckAuth -- No --> ShowError[Show Error Message];
      ShowError --> EnterCredentials;
  ```
  _(Hoặc: Link đến specific flow diagram trong Figma/Miro)_

### {Tên User Flow Khác}

{...}

## Wireframes & Mockups

{Tham chiếu main design file link above. Optionally embed key mockups hoặc describe main screen layouts.}

- **Screen / View Name 1:** {Mô tả layout và key elements. Link đến specific Figma frame/page.}
- **Screen / View Name 2:** {...}

## Component Library / Design System Reference

## Branding & Style Guide Reference

{Link đến primary source hoặc define key elements ở đây.}

- **Color Palette:** {Primary, Secondary, Accent, Feedback colors (hex codes).}
- **Typography:** {Font families, sizes, weights cho headings, body, v.v.}
- **Iconography:** {Link đến icon set, usage notes.}
- **Spacing & Grid:** {Define margins, padding, grid system rules.}

## Yêu Cầu Accessibility (AX)

- **Target Compliance:** {ví dụ: WCAG 2.1 AA}
- **Specific Requirements:** {Keyboard navigation patterns, ARIA landmarks/attributes cho complex components, color contrast minimums.}

## Responsiveness

- **Breakpoints:** {Define pixel values cho mobile, tablet, desktop, v.v.}
- **Adaptation Strategy:** {Mô tả cách layout và components adapt across breakpoints. Tham chiếu designs.}

## Change Log

| Change        | Date       | Version | Description         | Author         |
| ------------- | ---------- | ------- | ------------------- | -------------- |