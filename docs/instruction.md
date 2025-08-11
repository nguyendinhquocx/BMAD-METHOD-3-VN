# Hướng Dẫn

- [Thiết Lập Web Agent Orchestrator](#thiết-lập-web-agent-orchestrator)
- [IDE Agent Setup và Usage](#ide-agent-setup-và-usage)
- [Tasks Setup và Usage](#tasks)

## Thiết Lập Web Agent Orchestrator

Agent Orchestrator trong V3 sử dụng build script để package các agent assets khác nhau (personas, tasks, templates, v.v.) thành structured format, chủ yếu để sử dụng với web-based orchestrator agents có thể leverage large context windows. Process này bao gồm consolidating files từ specified source directories thành bundled text files và preparing main agent prompt.

### Tổng Quan

Build process được managed bởi `build-bmad-orchestrator.js` Node.js script. Script này reads configuration của nó từ `build-web-agent.cfg.js`, processes files từ asset directory, và outputs bundled assets vào designated build directory.

Quickstart: xem [này bên dưới](#running-the-build-script)

### Prerequisites

- **Node.js**: Ensure bạn có Node.js installed để run build script. Python version coming soon...

### Configuration (`build-web-agent.cfg.js`)

Build process được configured qua `build-web-agent.cfg.js`. Key parameters bao gồm:

- `orchestrator_agent_prompt`: Specifies path đến main prompt file cho orchestrator agent, như `bmad-agent/web-bmad-orchestrator-agent.md`. File này sẽ được copied đến `agent-prompt.txt` trong build directory.
  - Example: `./bmad-agent/web-bmad-orchestrator-agent.md`
- `asset_root`: Defines root directory nơi agent assets của bạn được stored. Script sẽ look cho subdirectories trong path này.
  - Example: `./bmad-agent/` có nghĩa là nó sẽ look cho folders như `personas`, `tasks` inside `bmad-agent/`)
- `build_dir`: Specifies directory nơi bundled output files và `agent-prompt.txt` sẽ được created.
  - Example: `./bmad-agent/build/`
- `agent_cfg`: Specifies path đến md cfg file định nghĩa agents mà Orchestrator có thể embody.
  - Example: `./bmad-agent/web-bmad-orchestrator-agent.cfg.md`

Paths trong configuration file (`build-web-agent.cfg.js`) relative đến `bmad-agent` directory (nơi `build-web-agent.cfg.js` và build script `build-bmad-orchestrator.js` được located).

### Asset Directory Structure

Script expects specific structure trong `asset_root` directory:

1. **Subdirectories**: Tạo subdirectories trực tiếp under `asset_root` cho mỗi category của assets. Dựa trên `bmad-agent/` folder, những này sẽ là:
    - `checklists/`
    - `data/`
    - `personas/`
    - `tasks/`
    - `templates/`
2. **Asset Files**: Đặt individual asset files của bạn (ví dụ: `.md`, `.txt`) trong những subdirectories này.
    - Ví dụ: persona definition files sẽ go vào `asset_root/personas/`, task files vào `asset_root/tasks/`, v.v.
3. **Filename Uniqueness**: Trong mỗi subdirectory, ensure rằng tất cả files có unique base names (tức: filename mà không có final extension). Ví dụ: có `my-persona.md` và `my-persona.txt` trong _cùng_ subdirectory (ví dụ: `personas/`) sẽ cause script halt với error. Tuy nhiên, `my-persona.md` và `another-persona.md` thì fine.

### Running the Build Script

LƯU Ý build sẽ skip bất kỳ files nào với `.ide.<extension>` - để bạn có thể có ide specific agents hoặc files cũng không make sense cho web, như `dev.ide.md` - hoặc specific ide `sm.ide.md`.

1. ```cmd
    node build-web-agent.js
    ```

Script sẽ log progress của nó, bao gồm discovered source directories, bất kỳ issues nào found (như duplicate base filenames), và output files being generated.

### Output

Sau khi running script, `build_dir` (ví dụ: `bmad-agent/build/`) sẽ contain:

1. **Bundled Asset Files**: Cho mỗi subdirectory processed trong `asset_root`, corresponding `.txt` file sẽ được created trong `build_dir`. Mỗi file concatenates content của tất cả files từ source subdirectory của nó.
    - Example: Files từ `asset_root/personas/` sẽ được bundled vào `build_dir/personas.txt`.
    - Mỗi original file's content trong bundle được demarcated bởi `==================== START: [base_filename] ====================` và `==================== END: [base_filename] ====================`.
2. **`agent-prompt.txt`**: File này là copy của bmad orchestrator prompt specified bởi `orchestrator_agent_prompt` trong configuration.
3. **`agent-config.txt`: File key này để orchestrator biết agents và tasks gì được configured, và cách find specific instructions và tasks cho agent trong compiled build assets

Những bundled files và agent prompt này sau đó ready được sử dụng bởi Agent Orchestrator.

### Gemini Gem hoặc GPT Setup

Text trong agent-prompt.txt được entered vào window của main custom web agent instruction set. Other files trong build folder tất cả cần được attached như files cho Gem hoặc GPT.

### Orchestrator Agent Configuration (ví dụ: `bmad-agent/web-bmad-orchestrator-agent.cfg.md`)

Trong khi `build-bmad-orchestrator.js` packages assets, core behavior của Orchestrator, agent definitions, và personality được defined trong Markdown configuration file. Example là `bmad-agent/web-bmad-orchestrator-agent.cfg.md` (path relative đến `bmad-agent/`, specified trong `build-web-agent.cfg.js` qua `agent_cfg`). File này key đến adaptability của Orchestrator.

**Key Features và Configurability:**

- **Agent Definitions**: Markdown configuration file lists specialized agents. Mỗi agent's definition typically starts với level 2 Markdown heading cho `Title` của nó (ví dụ: `## Title: Product Manager`). Attributes sau đó được listed:

  - `Name`: (ví dụ: `- Name: John`) - Agent's specific name.
  - `Description`: (ví dụ: `- Description: "Details..."`) - Brief của agent's purpose.
  - `Persona`: (ví dụ: `- Persona: "personas#pm"`) - Reference (ví dụ: đến `pm` section trong `personas.txt`) defining core personality và instructions.
  - `Customize`: (ví dụ: `- Customize: "Behavior details..."`) - Cho specific personality traits hoặc overrides. Content của field này takes precedence over base `Persona` nếu conflicts arise, như detailed trong `bmad-agent/web-bmad-orchestrator-agent.md`.

  `checklists`, `templates`, `data`, `tasks`: Keys này introduce lists của resources agent sẽ có access đến. Mỗi item là Markdown link under respective key, ví dụ:
  Cho `checklists`:

  ```markdown
  - checklists:
    - [Pm Checklist](checklists#pm-checklist)
    - [Another Checklist](checklists#another-one)
  ```

  Cho `tasks`:

  ```markdown
  - tasks:
    - [Create Prd](tasks#create-prd)
  ```

  Những references này (ví dụ: `checklists#pm-checklist` hoặc `tasks#create-prd`) point đến sections trong bundled asset files, providing agent với knowledge và tools của nó. Note: `data` được used (không `data_sources`), và `tasks` được used (không `available_tasks` từ older documentation styles).

  - `Operating Modes`: (ví dụ: `- Operating Modes:
  - "Mode1"
  - "Mode2"`) - Defines operational modes/phases.
  - `Interaction Modes`: (ví dụ: `- Interaction Modes:
  - "Interactive"
  - "YOLO"`) - Specifies interaction styles.

**Cách nó Works (Conceptual Flow từ `orchestrator-agent.md`):**

1. Orchestrator (initially BMad) loads và parses Markdown agent configuration file (ví dụ: `web-bmad-orchestrator-agent.cfg.md`).
2. Khi user request matches agent's `title`, `name`, `description`, hoặc `classification_label`, Orchestrator identifies target agent.
3. Nó sau đó loads agent's `persona` và bất kỳ associated `templates`, `checklists`, `data_sources`, và `tasks` bằng:
    - Identifying correct bundled `.txt` file (ví dụ: `personas.txt` cho `personas#pm`).
    - Extracting specific content block (ví dụ: `pm` section từ `personas.txt`).
4. `Customize` instructions từ Markdown configuration được applied, potentially modifying agent's behavior.
5. Orchestrator sau đó _becomes_ agent đó, adopting complete persona, knowledge, và operational parameters của nó defined trong Markdown configuration và loaded asset sections.

System này makes Agent Orchestrator highly adaptable. Bạn có thể easily define new agents, modify existing ones, tweak personalities với `Customize` field (trong Markdown agent configuration file như `web-bmad-orchestrator-agent.cfg.md`), hoặc change knowledge base, main prompt, và asset paths của chúng (trong `build-web-agent.cfg.js` và corresponding asset files), sau đó re-running build script nếu asset content was changed.

## IDE Agent Setup và Usage

IDE Agents trong V3 được designed cho optimal performance trong IDE environments như Windsurf và Cursor, với focus trên smaller agent sizes và efficient context management.

### Standalone IDE Agents

Bạn có thể sử dụng specialized standalone IDE agents, như `sm.ide.md` (Scrum Master) và `dev.ide.md` (Developer), cho specific roles như story generation hoặc development tasks. Những này, hoặc bất kỳ general IDE agent nào, cũng có thể directly reference và execute tasks bằng cách providing agent với task definition từ `docs/tasks/` folder của bạn.

### IDE Agent Orchestrator (`ide-bmad-orchestrator.md`)

Alternative powerful là `ide-bmad-orchestrator.md`. Agent này provides flexibility của web orchestrator—allowing single IDE agent embody multiple personas—nhưng **mà không require bất kỳ build step nào.** Nó dynamically loads configuration và tất cả associated resources của nó.

#### Cách IDE Orchestrator Works

1. **Configuration (`ide-bmad-orchestrator.cfg.md`):**
    Behavior của orchestrator primarily driven bởi Markdown configuration file (ví dụ: `bmad-agent/ide-bmad-orchestrator.cfg.md`, path đến mà được specified trong `ide-bmad-orchestrator.md` chính nó). Config file này có two main parts:

    - **Data Resolution:**
      Located ở top của config file, section này defines key-value pairs cho base paths. Những paths này tell orchestrator nơi find different types của asset files (personas, tasks, checklists, templates, data).

      ```markdown
      # Configuration for IDE Agents

      ## Data Resolution

      agent-root: (project-root)/bmad-agent
      checklists: (agent-root)/checklists
      data: (agent-root)/data
      personas: (agent-root)/personas
      tasks: (agent-root)/tasks
      templates: (agent-root)/templates

      NOTE: All Persona references và task markdown style links assume những data resolution paths này trừ khi specific path được given.
      Example: Nếu above cfg có `agent-root: root/foo/` và `tasks: (agent-root)/tasks`, thì below [Create PRD](create-prd.md) sẽ resolve đến `root/foo/tasks/create-prd.md`
      ```

      `(project-root)` placeholder typically interpreted như root của current workspace của bạn.

    - **Agent Definitions:**
      Following `Data Resolution` section, file lists definitions cho mỗi specialized agent orchestrator có thể become. Mỗi agent typically introduced với `## Title:` Markdown heading.
      Key attributes cho mỗi agent bao gồm:

      - `Name`: Specific name của agent (ví dụ: `- Name: Larry`).
      - `Customize`: String providing specific personality traits hoặc behavioral overrides cho agent (ví dụ: `- Customize: "You are a bit of a know-it-all..."`).
      - `Description`: Brief summary của agent's role và capabilities.
      - `Persona`: Filename của Markdown file chứa agent's core persona definition (ví dụ: `- Persona: "analyst.md"`). File này located sử dụng `personas:` path từ `Data Resolution` section.
      - `Tasks`: List của tasks agent có thể perform. Mỗi task là Markdown link:

        - Link text là user-friendly task name (ví dụ: `[Create PRD]`).
        - Link target là either Markdown filename cho external task definition (ví dụ: `(create-prd.md)`), resolved sử dụng `tasks:` path, hoặc special string như `(In Analyst Memory Already)` indicating task logic là part của persona's main definition.
          Example:

        ```markdown
        ## Title: Product Owner AKA PO

        - Name: Curly
        - Persona: "po.md"
        - Tasks:
          - [Create PRD](create-prd.md)
          - [Create Next Story](create-next-story-task.md)
        ```

2. **Operational Workflow (inside `ide-bmad-orchestrator.md`):**
    - **Initialization:** Upon activation trong IDE của bạn, `ide-bmad-orchestrator.md` first loads và parses specified configuration file (`ide-bmad-orchestrator.cfg.md`) của nó. Nếu fails, nó sẽ inform bạn và halt.
    - **Greeting & Persona Listing:** Nó sẽ greet bạn. Nếu initial instruction của bạn không clear hoặc nếu bạn ask, nó sẽ list available specialist personas (bởi `Title`, `Name`, và `Description`) và `Tasks` mỗi cái có thể perform, tất cả derived từ loaded configuration.
    - **Persona Activation:** Khi bạn request specific persona (ví dụ: "Become the Analyst" hoặc "I need Larry to help with research"), orchestrator:
      - Finds persona trong configuration của nó.
      - Loads corresponding persona file (ví dụ: `analyst.md`).
      - Applies bất kỳ `Customize:` instructions nào.
      - Announces activation (ví dụ: "Activating Analyst (Larry)...").
      - **Orchestrator sau đó fully embodies chosen agent.** Original orchestrator persona của nó becomes dormant.
    - **Task Execution:** Once persona active, nó sẽ try match request của bạn đến một trong configured `Tasks` của nó.
      - Nếu task references external file (ví dụ: `create-prd.md`), file đó loaded và instructions của nó được followed. Active persona sẽ sử dụng `Data Resolution` paths từ main config để find bất kỳ dependent files nào như templates hoặc checklists mentioned trong task file.
      - Nếu task marked như "In Memory" (hoặc similar), active persona executes nó based on internal definition của nó.
    - **Context và Persona Switching:** Orchestrator embodies chỉ one persona tại một thời điểm. Nếu bạn ask switch đến different persona while one active, nó typically sẽ advise starting new chat session để maintain clear context. Tuy nhiên, nó allows explicit "override safety protocol" command nếu bạn insist switching personas trong cùng chat. Điều này terminates current persona và re-initializes với new one.

#### Usage Instructions cho IDE Orchestrator

1. **Set up configuration (`ide-bmad-orchestrator.cfg.md`) của bạn:**
    - Ensure bạn có `ide-bmad-orchestrator.cfg.md` file. Bạn có thể sử dụng cái located trong `bmad-agent/` như template hoặc starting point.
    - Verify rằng `Data Resolution` paths ở top correctly point đến asset folders của bạn (personas, tasks, templates, checklists, data) relative đến project structure của bạn.
    - Define desired agents của bạn với `Title`, `Name`, `Customize` instructions, `Persona` file, và `Tasks` của chúng. Ensure referenced persona và task files exist trong locations specified bởi `Data Resolution` paths của bạn.
2. **Set up persona và task files của bạn:**
    - Tạo Markdown files cho mỗi persona (ví dụ: `analyst.md`, `po.md`) trong `personas` directory của bạn.
    - Tạo Markdown files cho mỗi task (ví dụ: `create-prd.md`) trong `tasks` directory của bạn.
3. **Activate Orchestrator:**
    - Trong IDE của bạn (ví dụ: Cursor), select `ide-bmad-orchestrator.md` file/agent như active AI assistant của bạn.
4. **Interact với Orchestrator:**
    - **Initial Interaction:**
      - Orchestrator sẽ greet bạn và confirm nó đã loaded configuration của nó.
      - Bạn có thể ask: "What agents are available?" hoặc "List personas and tasks."
    - **Activating Persona:**
      - Tell orchestrator persona nào bạn want: "I want to work with the Product Owner," hoặc "Activate Curly," hoặc "Become the PO."
    - **Performing Task:**
      - Once persona active, state task: "Create a PRD," hoặc nếu persona là "Curly" (PO), bạn có thể say "Curly, create the next story."
      - Bạn cũng có thể combine persona activation và task request: "Curly, I need you to create a PRD."
    - **Switching Personas:**
      - Nếu bạn need switch: "I need to talk to the Architect now."
      - Orchestrator sẽ advise new chat. Nếu bạn want switch trong current chat, bạn sẽ need give explicit override command khi prompted (ví dụ: "Override safety protocol and switch to Architect").
    - **Follow Persona Instructions:** Once persona active, nó sẽ guide bạn based on definition và task nó performing. Remember rằng resource files như templates hoặc checklists referenced bởi task sẽ được resolved sử dụng global `Data Resolution` paths trong `ide-bmad-orchestrator.cfg.md`.

Setup này allows cho highly flexible và dynamically configured multi-persona agent trực tiếp trong IDE của bạn, streamlining various development và project management workflows.

## Tasks

Tasks có thể được copied vào project docs/tasks folder của bạn, along với checklists và templates. Tasks meant để reduce amount của 1 off IDE agents - bạn có thể just drop task vào chat với bất kỳ agent nào và nó sẽ perform 1 off task. Sẽ có full workflow + task coming post V3 sẽ expand trên điều này - nhưng tasks và workflows là powerful concept sẽ allow chúng ta build trong nhiều capabilities cho agents của chúng ta, mà không có bloat overall programming và context của chúng trong IDE - especially useful cho tasks không used frequently - similar đến seldom used ide rules files.