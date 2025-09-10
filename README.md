# ts-decoform

A TypeScript library that uses **decorators** to automatically generate HTML forms based on domain classes, with built-in support for **Bootstrap 5**.

**Features**:

- @FormEntity and @FormField decorators

- Automatic form generation styled with Bootstrap 5

- Metadata stored in a global registry (globalMetaStore)

- Jest test support

- API to retrieve class metadata (getMeta)

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

1. Define your domain class

```ts
import { FormEntity, FormField } from "ts-decoform";

@FormEntity({ title: "User" })
export class User {
  @FormField({ label: "Username", type: "text" })
  username!: string;

  @FormField({ label: "Email", type: "email" })
  email!: string;

  @FormField({ label: "Password", type: "password" })
  password!: string;

  @FormField({ label: "Favorite Color", type: "color" })
  color!: string;

  @FormField({ label: "Gender", type: "radio", options: ["Male", "Female", "Other"] })
  gender!: string;

  @FormField({ label: "Country", type: "select", options: ["USA", "UK", "Italy"] })
  country!: string;

  @FormField({ label: "Subscribe", type: "checkbox" })
  subscribe!: boolean;
}
```

2. Generate the form as an HTML snippet

```ts
import { renderForm } from "ts-decoform";
import { User } from "./models/user.model";

const html = renderForm(User);
console.log(html);
```

3. Generate a full HTML page with Bootstrap 5

```ts
import { renderFormPage } from "ts-decoform";
import { User } from "./models/user.model";
import { writeFileSync } from "fs";

const html = renderFormPage(User);

// Save the file to disk
writeFileSync("book-form.html", html, "utf-8");
console.log("HTML file generated: user-form.html");
```

## Test
```bash
npm test
```
