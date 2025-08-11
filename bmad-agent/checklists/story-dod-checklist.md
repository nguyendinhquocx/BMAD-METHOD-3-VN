# Story Definition of Done (DoD) Checklist

## Hướng dẫn cho Developer Agent

Trước khi đánh dấu story là 'Review', vui lòng xem qua từng mục trong checklist này. Báo cáo trạng thái của mỗi mục (ví dụ: [x] Done, [ ] Not Done, [N/A] Not Applicable) và cung cấp nhận xét ngắn gọn nếu cần thiết.

## Mục Checklist

1. **Yêu cầu Được đáp ứng:**

    - [ ] Tất cả yêu cầu chức năng được chỉ định trong story đã được triển khai.
    - [ ] Tất cả tiêu chí chấp nhận được định nghĩa trong story đã được đáp ứng.

2. **Coding Standard & Cấu trúc Dự án:**

    - [ ] Tất cả code mới/đã sửa đổi tuân thủ nghiêm ngặt `Operational Guidelines`.
    - [ ] Tất cả code mới/đã sửa đổi phù hợp với `Project Structure` (vị trí file, đặt tên, v.v.).
    - [ ] Tuân thủ `Tech Stack` cho công nghệ/phiên bản sử dụng (nếu story giới thiệu hoặc sửa đổi việc sử dụng tech).
    - [ ] Tuân thủ `Api Reference` và `Data Models` (nếu story liên quan đến API hoặc thay đổi data model).
    - [ ] Best practice bảo mật cơ bản (ví dụ: input validation, error handling thích hợp, không hardcode secret) được áp dụng cho code mới/đã sửa đổi.
    - [ ] Không có linter error hoặc warning mới được giới thiệu.
    - [ ] Code được comment tốt khi cần thiết (làm rõ logic phức tạp, không phải tuyên bố hiển nhiên).

3. **Testing:**

    - [ ] Tất cả unit test yêu cầu theo story và Testing Strategy `Operational Guidelines` đã được triển khai.
    - [ ] Tất cả integration test yêu cầu (nếu có thể áp dụng) theo story và Testing Strategy `Operational Guidelines` đã được triển khai.
    - [ ] Tất cả test (unit, integration, E2E nếu có thể áp dụng) pass thành công.
    - [ ] Test coverage đáp ứng tiêu chuẩn dự án (nếu được định nghĩa).

4. **Chức năng & Xác minh:**

    - [ ] Chức năng đã được developer xác minh thủ công (ví dụ: chạy app locally, kiểm tra UI, test API endpoint).
    - [ ] Edge case và điều kiện lỗi tiềm năng được xem xét và xử lý một cách graceful.

5. **Quản trị Story:**
    - [ ] Tất cả task trong story file được đánh dấu hoàn thành.
    - [ ] Bất kỳ làm rõ hoặc quyết định nào được thực hiện trong quá trình phát triển được ghi lại trong story file hoặc liên kết thích hợp.
    - [ ] Phần wrap up story đã được hoàn thành với ghi chú về thay đổi hoặc thông tin liên quan đến story tiếp theo hoặc dự án tổng thể, agent model chủ yếu được sử dụng trong quá trình phát triển, và changelog của bất kỳ thay đổi nào được cập nhật đúng cách.

6. **Dependency, Build & Cấu hình:**

    - [ ] Dự án build thành công không có lỗi.
    - [ ] Project linting pass
    - [ ] Bất kỳ dependency mới nào được thêm đã được pre-approve trong yêu cầu story HOẶC được phê duyệt rõ ràng bởi user trong quá trình phát triển (phê duyệt được ghi lại trong story file).
    - [ ] Nếu dependency mới được thêm, chúng được ghi lại trong file dự án thích hợp (ví dụ: `package.json`, `requirements.txt`) với lý lẽ.
    - [ ] Không có lỗ hổng bảo mật đã biết được giới thiệu bởi dependency mới được thêm và phê duyệt.
    - [ ] Nếu environment variable mới hoặc cấu hình được giới thiệu bởi story, chúng được ghi lại và xử lý an toàn.

7. **Documentation (Nếu Có thể áp dụng):**
    - [ ] Documentation code inline liên quan (ví dụ: JSDoc, TSDoc, Python docstring) cho API public mới hoặc logic phức tạp đã hoàn thành.
    - [ ] Documentation hướng người dùng được cập nhật, nếu thay đổi tác động đến người dùng.
    - [ ] Documentation kỹ thuật (ví dụ: README, sơ đồ hệ thống) được cập nhật nếu thay đổi kiến trúc đáng kể được thực hiện.

## Xác nhận Cuối cùng

- [ ] Tôi, Developer Agent, xác nhận rằng tất cả mục áp dụng ở trên đã được giải quyết.