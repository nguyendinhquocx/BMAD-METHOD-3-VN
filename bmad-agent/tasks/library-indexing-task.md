# Nhiệm Vụ Library Indexing

## Mục Đích

Nhiệm vụ này maintains integrity và completeness của `docs/index.md` file bằng cách scanning tất cả documentation files và ensuring chúng properly indexed với descriptions.

## Task Instructions

Bạn đang operating như Documentation Indexer. Mục tiêu của bạn là ensure tất cả documentation files properly cataloged trong central index.

### Required Steps

1. First, locate và scan:

   - `docs/` directory và tất cả subdirectories
   - Existing `docs/index.md` file (create nếu absent)
   - Tất cả markdown (`.md`) và text (`.txt`) files trong documentation structure

2. Cho existing `docs/index.md`:

   - Parse current entries
   - Note existing file references và descriptions
   - Identify bất kỳ broken links hoặc missing files nào
   - Keep track của already-indexed content

3. Cho mỗi documentation file found:

   - Extract title (từ first heading hoặc filename)
   - Generate brief description bằng cách analyzing content
   - Create relative markdown link đến file
   - Check nếu nó already trong index
   - Nếu missing hoặc outdated, prepare update

4. Cho bất kỳ missing hoặc non-existent files nào found trong index:

   - Present list của tất cả entries reference non-existent files
   - Cho mỗi entry:
     - Show full entry details (title, path, description)
     - Ask cho explicit confirmation trước removal
     - Provide option update path nếu file was moved
     - Log decision (remove/update/keep) cho final report

5. Update `docs/index.md`:
   - Maintain existing structure và organization
   - Add missing entries với descriptions
   - Update outdated entries
   - Remove chỉ entries được confirmed cho removal
   - Ensure consistent formatting throughout

### Index Entry Format

Mỗi entry trong `docs/index.md` nên follow format này:

```markdown
### [Document Title](relative/path/to/file.md)

Brief description của document's purpose và contents.
```

### Rules of Operation

1. NEVER modify content của indexed files
2. Preserve existing descriptions trong index.md khi chúng adequate
3. Maintain bất kỳ existing categorization hoặc grouping nào trong index
4. Use relative paths cho tất cả links
5. Ensure descriptions concise nhưng informative
6. NEVER remove entries mà không có explicit confirmation
7. Report bất kỳ broken links hoặc inconsistencies nào found
8. Allow path updates cho moved files trước khi considering removal

### Process Output

Task sẽ provide:

1. Summary của changes made đến index.md
2. List của newly indexed files
3. List của updated entries
4. List của entries presented cho removal và status của chúng:
   - Confirmed removals
   - Updated paths
   - Kept despite missing file
5. Bất kỳ other issues hoặc inconsistencies nào found

### Handling Missing Files

Cho mỗi file referenced trong index nhưng not found trong filesystem:

1. Present entry:

   ```markdown
   Missing file detected:
   Title: [Document Title]
   Path: relative/path/to/file.md
   Description: Existing description

   Options:

   1. Remove this entry
   2. Update the file path
   3. Keep entry (mark as temporarily unavailable)

   Please choose an option (1/2/3):
   ```

2. Wait cho user confirmation trước khi taking bất kỳ action nào
3. Log decision cho final report

## Required Input

Please provide:

1. Location của `docs/` directory
2. Confirmation của write access đến `docs/index.md`
3. Bất kỳ specific categorization preferences nào
4. Bất kỳ files hoặc directories nào exclude từ indexing

Bạn có muốn proceed với library indexing không? Please provide required input above.