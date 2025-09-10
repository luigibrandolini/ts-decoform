import { FormEntity, FormField } from "../src";

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
