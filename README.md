# ts-decoform

A TypeScript library that uses **decorators** to automatically generate HTML forms based on domain classes, with built-in support for **Bootstrap 5**.

---

## Installation

Clone the project and install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

## Usage

1. Define your domain classes

```ts
import { FormEntity, FormField } from "ts-decoform";

@FormEntity({ title: "Book" })
export class Book {
  @FormField({ label: "Title", type: "text" })
  title!: string;

  @FormField({ label: "Pages", type: "number" })
  pages!: number;
}
```

2. Generate the form as an HTML snippet

```ts
import { renderForm } from "ts-decoform";
import { Book } from "./models/Book";

const html = renderForm(Book);
console.log(html);
```

3. Generate a full HTML page with Bootstrap 5

```ts
import { renderFormPage } from "ts-decoform";
import { Book } from "./models/Book";
import { writeFileSync } from "fs";

const html = renderFormPage(Book);

// Save the file to disk
writeFileSync("book-form.html", html, "utf-8");
console.log("✅ HTML file generated: book-form.html");
```

## Test
```bash
npm test
```

---

## Features

- @FormEntity and @FormField decorators

- Automatic form generation styled with Bootstrap 5

- Metadata stored in a global registry (globalMetaStore)

- Jest test support

- API to retrieve class metadata (getMeta)