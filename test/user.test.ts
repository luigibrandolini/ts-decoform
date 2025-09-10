import { renderForm, renderFormPage } from "../src/index";
import { getMeta } from "../src/metastore";
import { User } from "./user.model";

describe("form metadata for User", () => {
  it("should return the correct number of fields", () => {
    const meta = getMeta(User);
    expect(meta?.fields.length).toBe(7);
  });
});

describe("form rendering for User", () => {
  it("should generate a form with all the correct fields", () => {
    const html = renderForm(User);

    expect(html).toContain("<h1>User</h1>");
    expect(html).toContain('type="text" name="username"');
    expect(html).toContain('type="email" name="email"');
    expect(html).toMatch(/<input[^>]+type="radio"[^>]+name="gender"/);
    expect(html).toContain("btn btn-primary");
  });
});

describe("renderFormPage for User", () => {
  it("should generate a full HTML page with Bootstrap 5", () => {
    const html = renderFormPage(User);

    // Basic checks
    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"');
    expect(html).toContain("<h1>User</h1>");

    // Field checks
    expect(html).toContain('type="text" name="username"');
    expect(html).toContain('type="email" name="email"');
    expect(html).toMatch(/<input[^>]+type="radio"[^>]+name="gender"/);
  });
});
