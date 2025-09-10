import { renderForm, renderFormPage } from "../src/index";
import { getMeta } from "../src/metastore";
import { Book } from "./book.sample";

describe("form metadata", () => {
  it("should give the fields count", () => {
    const meta = getMeta(Book);

    expect(meta?.fields.length).toBe(2);
  });
});

describe("form rendering", () => {
  it("should generate a form with the correct fields", () => {
    const html = renderForm(Book);

    expect(html).toContain("<h1>Book</h1>");
    expect(html).toContain('type="text" name="title"');
    expect(html).toContain('type="number" name="pages"');
    expect(html).toContain("btn btn-primary");
  });
});

describe("renderFormPage", () => {
  it("should generate a full HTML page with Bootstrap 5", () => {
    const html = renderFormPage(Book);

    // Basic checks
    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"');
    expect(html).toContain("<h1>Book</h1>");

    // Field checks
    expect(html).toContain('type="text" name="title"');
    expect(html).toContain('type="number" name="pages"');
  });
});
