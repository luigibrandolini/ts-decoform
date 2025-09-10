import { FormEntity, FormField } from "../src";

@FormEntity({ title: "Book" })
export class Book {
  @FormField({ label: "Title", type: "text" })
  title!: string;

  @FormField({ label: "Pages", type: "number" })
  pages!: number;
}