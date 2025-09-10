import { getMeta } from "./metastore";

/**
 * Renders a form based on the metadata of a class.
 * @param cls Class constructor
 * @returns HTML string for the form
 * @throws Error if the class is not decorated with @FormEntity
 */
export function renderForm(cls: any): string {
  const meta = getMeta(cls);
  if (!meta) throw new Error("Class not decorated with @FormEntity");

  const renderField = (f: any): string => {
    switch (f.type) {
      case "textarea":
        return `
          <div class="mb-3">
            <label class="form-label">${f.label}</label>
            <textarea class="form-control" name="${f.propertyKey}"></textarea>
          </div>
        `;
      case "select":
        const options =
          f.options
            ?.map((opt: string) => `<option value="${opt}">${opt}</option>`)
            .join("") ?? "";
        return `
          <div class="mb-3">
            <label class="form-label">${f.label}</label>
            <select class="form-select" name="${f.propertyKey}">
              ${options}
            </select>
          </div>
        `;
      case "checkbox":
        return `
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="${f.propertyKey}" name="${f.propertyKey}">
            <label class="form-check-label" for="${f.propertyKey}">${f.label}</label>
          </div>
        `;
      case "radio":
        return (
          f.options
            ?.map(
              (opt: string) => `
          <div class="form-check mb-3">
            <input type="radio" class="form-check-input" name="${f.propertyKey}" id="${f.propertyKey}-${opt}" value="${opt}">
            <label class="form-check-label" for="${f.propertyKey}-${opt}">${opt}</label>
          </div>
        `
            )
            .join("") ?? ""
        );
      default:
        return `
          <div class="mb-3">
            <label class="form-label">${f.label}</label>
            <input class="form-control" type="${f.type}" name="${f.propertyKey}" />
          </div>
        `;
    }
  };

  const fieldsHtml = meta.fields.map(renderField).join("\n");

  return `
    <h1>${meta.title}</h1>
    <form class="p-3">
      ${fieldsHtml}
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

/**
 * Renders a complete HTML page with a form based on the metadata of a class.
 * @param cls Class constructor
 * @returns Complete HTML page as a string
 * @throws Error if the class is not decorated with @FormEntity
 */
export function renderFormPage(cls: Function): string {
  const formHtml = renderForm(cls);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cls.name} Form</title>
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    ${formHtml}
  </div>
</body>
</html>`;
}
