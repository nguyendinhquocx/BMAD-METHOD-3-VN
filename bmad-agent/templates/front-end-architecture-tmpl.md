# Tài Liệu Frontend Architecture {Tên Dự Án}

## Mục Lục

{ Cập nhật này nếu sections và subsections được thêm hoặc loại bỏ }

- [Giới Thiệu](#giới-thiệu)
- [Triết Lý & Patterns Frontend Tổng Thể](#triết-lý--patterns-frontend-tổng-thể)
- [Cấu Trúc Thư Mục Frontend Chi Tiết](#cấu-trúc-thư-mục-frontend-chi-tiết)
- [Component Breakdown & Implementation Details](#component-breakdown--implementation-details)
  - [Component Naming & Organization](#component-naming--organization)
  - [Template cho Component Specification](#template-cho-component-specification)
- [State Management Chuyên Sâu](#state-management-chuyên-sâu)
  - [Store Structure / Slices](#store-structure--slices)
  - [Key Selectors](#key-selectors)
  - [Key Actions / Reducers / Thunks](#key-actions--reducers--thunks)
- [API Interaction Layer](#api-interaction-layer)
  - [Client/Service Structure](#clientservice-structure)
  - [Error Handling & Retries (Frontend)](#error-handling--retries-frontend)
- [Routing Strategy](#routing-strategy)
  - [Route Definitions](#route-definitions)
  - [Route Guards / Protection](#route-guards--protection)
- [Build, Bundling, and Deployment](#build-bundling-and-deployment)
  - [Build Process & Scripts](#build-process--scripts)
  - [Key Bundling Optimizations](#key-bundling-optimizations)
  - [Deployment to CDN/Hosting](#deployment-to-cdnhosting)
- [Frontend Testing Strategy](#frontend-testing-strategy)
  - [Component Testing](#component-testing)
  - [UI Integration/Flow Testing](#ui-integrationflow-testing)
  - [End-to-End UI Testing Tools & Scope](#end-to-end-ui-testing-tools--scope)
- [Accessibility (AX) Implementation Details](#accessibility-ax-implementation-details)
- [Performance Considerations](#performance-considerations)
- [Internationalization (i18n) and Localization (l10n) Strategy](#internationalization-i18n-and-localization-l10n-strategy)
- [Feature Flag Management](#feature-flag-management)
- [Frontend Security Considerations](#frontend-security-considerations)
- [Browser Support and Progressive Enhancement](#browser-support-and-progressive-enhancement)
- [Change Log](#change-log)

## Giới Thiệu

{ Tài liệu này chi tiết technical architecture cụ thể cho frontend của {Tên Dự Án}. Nó bổ sung cho main {Tên Dự Án} Architecture Document và UI/UX Specification. Tài liệu này chi tiết frontend architecture và **xây dựng dựa trên foundational decisions** (ví dụ: overall tech stack, CI/CD, primary testing tools) defined trong main {Tên Dự Án} Architecture Document (`docs/architecture.md` hoặc linked equivalent). **Frontend-specific elaborations hoặc deviations từ general patterns phải được explicitly noted ở đây.** Mục tiêu là cung cấp clear blueprint cho frontend development, ensuring consistency, maintainability, và alignment với overall system design và user experience goals. }

- **Link đến Main Architecture Document (REQUIRED):** {ví dụ: `docs/architecture.md`}
- **Link đến UI/UX Specification (REQUIRED nếu exists):** {ví dụ: `docs/front-end-spec.md`}
- **Link đến Primary Design Files (Figma, Sketch, v.v.) (REQUIRED nếu exists):** {Từ UI/UX Spec}
- **Link đến Deployed Storybook / Component Showcase (nếu applicable):** {URL}

## Triết Lý & Patterns Frontend Tổng Thể

{ Mô tả core architectural decisions và patterns chosen cho frontend. Này nên align với "Definitive Tech Stack Selections" trong main architecture document và consider implications từ overall system architecture (ví dụ: monorepo vs. polyrepo, backend service structure). }

- **Framework & Core Libraries:** {ví dụ: React 18.x với Next.js 13.x, Angular 16.x, Vue 3.x với Nuxt.js}. **Những này derived từ 'Definitive Tech Stack Selections' trong Main Architecture Document.** Section này elaborates trên *cách* những choices này applied specifically đến frontend.
- **Component Architecture:** {ví dụ: Atomic Design principles, Presentational vs. Container components, sử dụng specific component libraries như Material UI, Tailwind CSS cho styling approach. Specify chosen approach và bất kỳ key libraries nào.}
- **State Management Strategy:** {ví dụ: Redux Toolkit, Zustand, Vuex, NgRx. Briefly describe overall approach – global store, feature stores, context API usage. **Referenced từ main Architecture Document và detailed further trong "State Management In-Depth" section.**}
- **Data Flow:** {ví dụ: Unidirectional data flow (Flux/Redux pattern), React Query/SWR cho server state. Describe cách data fetched, cached, passed đến components, và updated.}
- **Styling Approach:** **{Chosen Styling Solution, ví dụ: Tailwind CSS / CSS Modules / Styled Components}**. Configuration File(s): {ví dụ: `tailwind.config.js`, `postcss.config.js`}. Key conventions: {ví dụ: "Utility-first approach cho Tailwind. Custom components defined trong `src/styles/components.css`. Theme extensions trong `tailwind.config.js` under `theme.extend`. Cho CSS Modules, files co-located với components, ví dụ: `MyComponent.module.css`.}
- **Key Design Patterns Used:** {ví dụ: Provider pattern, Hooks, Higher-Order Components, Service patterns cho API calls, Container/Presentational. Những patterns này được consistently applied. Deviations require justification và documentation.}

## Cấu Trúc Thư Mục Frontend Chi Tiết

{ Cung cấp ASCII diagram representing frontend application's specific folder structure (ví dụ: trong `src/` hoặc `app/` hoặc dedicated `frontend/` root directory nếu part của monorepo). Này nên elaborate trên frontend part của main project structure outlined trong architecture document. Highlight conventions cho organizing components, pages/views, services, state, styles, assets, v.v. Cho mỗi key directory, cung cấp one-sentence mandatory description của purpose của nó.}

### VÍ DỤ - Không Prescriptive (cho React/Next.js app)

```plaintext
src/
├── app/                        # Next.js App Router: Pages/Layouts/Routes. PHẢI chứa route segments, layouts, và page components.
│   ├── (features)/             # Feature-based routing groups. PHẢI group related routes cho specific feature.
│   │   └── dashboard/
│   │       ├── layout.tsx      # Layout specific đến dashboard feature routes.
│   │       └── page.tsx        # Entry page component cho dashboard route.
│   ├── api/                    # API Routes (nếu sử dụng Next.js backend features). PHẢI chứa backend handlers cho client-side calls.
│   ├── globals.css             # Global styles. PHẢI chứa base styles, CSS variable definitions, Tailwind base/components/utilities.
│   └── layout.tsx              # Root layout cho entire application.
├── components/                 # Shared/Reusable UI Components.
│   ├── ui/                     # Base UI elements (Button, Input, Card). PHẢI chỉ chứa generic, reusable, presentational UI elements, often mapped từ design system. PHẢI KHÔNG chứa business logic.
│   │   ├── Button.tsx
│   │   └── ...
│   ├── layout/                 # Layout components (Header, Footer, Sidebar). PHẢI chỉ chứa components structuring page layouts, không phải specific page content.
│   │   ├── Header.tsx
│   │   └── ...
│   └── (feature-specific)/     # Components specific đến feature nhưng potentially reusable trong nó. Alternative đến co-locating trong features/ directory.
│       └── user-profile/
│           └── ProfileCard.tsx
├── features/                   # Feature-specific logic, hooks, non-global state, services, và components solely used by feature đó.
│   └── auth/
│       ├── components/         # Components used exclusively by auth feature. PHẢI KHÔNG được imported by other features.
│       ├── hooks/              # Custom React Hooks specific đến 'auth' feature. Hooks reusable across features belong trong `src/hooks/`.
│       ├── services/           # Feature-specific API interactions hoặc orchestrations cho 'auth' feature.
│       └── store.ts            # Feature-specific state slice (ví dụ: Redux slice) nếu không part của global store hoặc nếu local state complex.
├── hooks/                      # Global/sharable custom React Hooks. PHẢI generic và usable by multiple features/components.
│   └── useAuth.ts
├── lib/ / utils/             # Utility functions, helpers, constants. PHẢI chứa pure functions và constants, no side effects hoặc framework-specific code trừ khi clearly named (ví dụ: `react-helpers.ts`).
│   └── utils.ts
├── services/                   # Global API service clients hoặc SDK configurations. PHẢI define base API client instances và core data fetching/mutation services.
│   └── apiClient.ts
├── store/                      # Global state management setup (ví dụ: Redux store, Zustand store).
│   ├── index.ts                # Main store configuration và export.
│   ├── rootReducer.ts          # Root reducer nếu sử dụng Redux.
│   └── (slices)/               # Directory cho global state slices (nếu không co-located trong features).
├── styles/                     # Global styles, theme configurations (nếu không sử dụng `globals.css` hoặc similar, hoặc cho specific styling systems như SCSS partials).
└── types/                      # Global TypeScript type definitions/interfaces. PHẢI chứa types shared across multiple features/modules.
    └── index.ts
```

### Notes về Frontend Structure:

{ Explain bất kỳ specific conventions hoặc rationale nào behind structure. ví dụ: "Components co-located với feature của chúng nếu không globally reusable để improve modularity." AI Agent PHẢI tuân thủ defined structure này strictly. New files PHẢI được placed trong appropriate directory dựa trên những descriptions này. }

## Component Breakdown & Implementation Details

{ Section này outlines conventions và templates cho defining UI components. Detailed specification cho most feature-specific components sẽ emerge khi user stories implemented. AI agent PHẢI follow "Template for Component Specification" below whenever new component identified cho development. }

### Component Naming & Organization

- **Component Naming Convention:** **{ví dụ: PascalCase cho files và component names: `UserProfileCard.tsx`}**. Tất cả component files PHẢI follow convention này.
- **Organization:** {ví dụ: "Globally reusable components trong `src/components/ui/` hoặc `src/components/layout/`. Feature-specific components co-located trong feature directory của chúng, ví dụ: `src/features/feature-name/components/`. Refer đến Detailed Frontend Directory Structure.}

### Template cho Component Specification

{ Cho mỗi significant UI component identified từ UI/UX Specification và design files (Figma), following details PHẢI được provided. Repeat subsection này cho mỗi component. Level của detail PHẢI sufficient cho AI agent hoặc developer implement nó với minimal ambiguity. }

#### Component: `{ComponentName}` (ví dụ: `UserProfileCard`, `ProductDetailsView`)

- **Purpose:** {Briefly describe component này làm gì và role của nó trong UI. PHẢI clear và concise.}
- **Source File(s):** {ví dụ: `src/components/user-profile/UserProfileCard.tsx`. PHẢI exact path.}
- **Visual Reference:** {Link đến specific Figma frame/component, hoặc Storybook page. REQUIRED.}
- **Props (Properties):**
  { Liệt kê mỗi prop component accepts. Cho mỗi prop, tất cả columns trong table PHẢI filled. }
  | Prop Name | Type                                      | Required? | Default Value | Description                                                                                                |
  | :-------------- | :---------------------------------------- | :-------- | :------------ | :--------------------------------------------------------------------------------------------------------- |
  | `userId`        | `string`                                  | Yes       | N/A           | ID của user để display. PHẢI valid UUID.                                                     |
  | `avatarUrl`     | `string \| null`                          | No        | `null`        | URL cho user's avatar image. PHẢI valid HTTPS URL nếu provided.                                    |
  | `onEdit`        | `() => void`                              | No        | N/A           | Callback function khi edit action triggered.                                                        |
  | `variant`       | `\'compact\' \| \'full\'`                     | No        | `\'full\'`        | Controls display mode của card.                                                                   |
  | `{anotherProp}` | `{Specific primitive, imported type, hoặc inline interface/type definition}` | {Yes/No}  | {If any}    | {PHẢI clearly state prop's purpose và bất kỳ constraints nào, ví dụ: 'Must be a positive integer.'}         |
- **Internal State (nếu có):**
  { Describe bất kỳ significant internal state nào component manages. Chỉ list state không *derived* từ props hoặc global state. Nếu state complex, consider nếu nó nên được managed by custom hook hoặc global state solution instead. }
  | State Variable | Type      | Initial Value | Description                                                                    |
  | :-------------- | :-------- | :------------ | :----------------------------------------------------------------------------- |
  | `isLoading`     | `boolean` | `false`       | Tracks nếu data cho component đang loading.                                   |
  | `{anotherState}`| `{type}`  | `{value}`     | {Description của state variable và purpose của nó.}                               |
- **Key UI Elements / Structure:**
  { Cung cấp pseudo-HTML hoặc JSX-like structure representing component's DOM. Bao gồm key conditional rendering logic nếu applicable. **Structure này dictates primary output cho AI agent.** }
  ```html
  <div> <!-- Main card container với specific class ví dụ: styles.cardFull hoặc styles.cardCompact based on variant prop -->
    <img src="{avatarUrl || defaultAvatar}" alt="User Avatar" class="{styles.avatar}" />
    <h2>{userName}</h2>
    <p class="{variant === 'full' ? styles.emailFull : styles.emailCompact}">{userEmail}</p>
    {variant === 'full' && onEdit && <button onClick={onEdit} class="{styles.editButton}">Edit</button>}
  </div>
  ```
- **Events Handled / Emitted:**
  - **Handles:** {ví dụ: `onClick` trên edit button (triggers `onEdit` prop).}
  - **Emits:** {Nếu component emits custom events/callbacks không covered by props, describe chúng với exact signature của chúng. ví dụ: `onFollow: (payload: { userId: string; followed: boolean }) => void`}
- **Actions Triggered (Side Effects):**
  - **State Management:** {ví dụ: "Dispatches `userSlice.actions.setUserName(newName)` từ `src/store/slices/userSlice.ts`. Action payload PHẢI match defined action creator." HOẶC "Calls `updateUserProfileOptimistic(newData)` từ local `useReducer` hook."}
  - **API Calls:** {Specify service/function nào từ "API Interaction Layer" được called. ví dụ: "Calls `userService.fetchUser(userId)` từ `src/services/userService.ts` on mount. Request payload: `{ userId }`. Success response populates internal state `userData`. Error response dispatches `uiSlice.actions.showErrorToast({ message: 'Failed to load user details' })`."}
- **Styling Notes:**
  - {PHẢI reference specific Design System component names (ví dụ: "Sử dụng `<Button variant='primary'>` từ UI library") HOẶC specify Tailwind CSS classes / CSS module class names được applied (ví dụ: "Container sử dụng `p-4 bg-white rounded-lg shadow-md`. Title sử dụng `text-xl font-semibold`.") HOẶC specify SCSS custom component classes được applied (ví dụ: "Container sử dụng `@apply p-4 bg-white rounded-lg shadow-md`. Title sử dụng `@apply text-xl font-semibold`."). Bất kỳ dynamic styling logic nào based on props hoặc state PHẢI described. Nếu Tailwind CSS used, list primary utility classes hoặc `@apply` directives cho custom component classes. AI Agent nên prioritize direct utility class usage cho simple cases và propose reusable component classes/React components cho complex styling patterns.}
- **Accessibility Notes:**
  - {PHẢI list specific ARIA attributes và values của chúng (ví dụ: `aria-label="User profile card"`, `role="article"`), required keyboard navigation behavior (ví dụ: "Tab navigates đến avatar, name, email, then edit button. Edit button focusable và activated by Enter/Space."), và bất kỳ focus management requirements nào (ví dụ: "Nếu component này opens modal, focus PHẢI trapped inside. On modal close, focus returns đến trigger element.").}

---

_Repeat template above cho mỗi significant component._

---

## State Management Chuyên Sâu

{ Section này expands trên State Management strategy. **Refer đến main Architecture Document cho definitive choice của state management solution.** }

- **Chosen Solution:** {ví dụ: Redux Toolkit, Zustand, Vuex, NgRx - Như defined trong main arch doc.}
- **Decision Guide cho State Location:**
    - **Global State (ví dụ: Redux/Zustand):** Data shared across many unrelated components; data persisting across routes; complex state logic managed qua reducers/thunks. **PHẢI used cho session data, user preferences, application-wide notifications.**
    - **React Context API:** State primarily passed down specific component subtree (ví dụ: theme, form context). Simpler state, fewer updates compared đến global state. **PHẢI used cho localized state không suitable cho prop drilling nhưng không needed globally.**
    - **Local Component State (`useState`, `useReducer`):** UI-specific state, không needed outside component hoặc direct children của nó (ví dụ: form input values, dropdown open/close status). **PHẢI default choice trừ khi criteria cho Context hoặc Global State met.**

### Store Structure / Slices

{ Describe conventions cho organizing global state (ví dụ: "Mỗi major feature requiring global state sẽ có own Redux slice located trong `src/features/[featureName]/store.ts`"). }

- **Core Slice Example (ví dụ: `sessionSlice` trong `src/store/slices/sessionSlice.ts`):**
  - **Purpose:** {Manages user session, authentication status, và basic user profile info accessible globally.}
  - **State Shape (Interface/Type):**
    ```typescript
    interface SessionState {
      currentUser: { id: string; name: string; email: string; roles: string[]; } | null;
      isAuthenticated: boolean;
      token: string | null;
      status: "idle" | "loading" | "succeeded" | "failed";
      error: string | null;
    }
    ```
  - **Key Reducers/Actions (trong `createSlice`):** {Briefly list main synchronous actions, ví dụ: `setCurrentUser`, `clearSession`, `setAuthStatus`, `setAuthError`.}
  - **Async Thunks (nếu có):** {List key async thunks, ví dụ: `loginUserThunk`, `fetchUserProfileThunk`.}
  - **Selectors (memoized với `createSelector`):** {List key selectors, ví dụ: `selectCurrentUser`, `selectIsAuthenticated`.}
- **Feature Slice Template (ví dụ: `{featureName}Slice` trong `src/features/{featureName}/store.ts`):**
  - **Purpose:** {Được filled out khi new feature requires own state slice.}
  - **State Shape (Interface/Type):** {Được defined by feature.}
  - **Key Reducers/Actions (trong `createSlice`):** {Được defined by feature.}
  - **Async Thunks (nếu có, defined sử dụng `createAsyncThunk`):** {Được defined by feature.}
  - **Selectors (memoized với `createSelector`):** {Được defined by feature.}
  - **Export:** {Tất cả actions và selectors PHẢI exported.}

[Tiếp tục với các sections còn lại...]

## Change Log

| Change | Date | Version | Description | Author |
| ------ | ---- | ------- | ----------- | ------ |