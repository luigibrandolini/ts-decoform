import { registerClass, registerField } from "./metastore";

export type Html5InputType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "url"
  | "tel"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color"
  | "checkbox"
  | "radio"
  | "file"
  | "range"
  | "textarea"
  | "select";

/**
 * Class decorator to mark a class as a form entity.
 * @param options Optional settings like title
 * @returns Class decorator function
 */
export function FormEntity(options?: { title?: string }) {
  return function (target: Function) {
    registerClass(target, options?.title);
  };
}

/**
 * Field decorator to mark a class property as a form field.
 * @param options Field options like label and type
 * @returns Property decorator function
 */
export function FormField(options: {
  label: string;
  type: Html5InputType;
  options?: string[];
}) {
  return function (target: any, propertyKey: string) {
    registerField(target.constructor, { propertyKey, ...options });
  };
}
