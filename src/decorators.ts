import { registerClass, registerField } from "./metastore";

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
export function FormField(options: { label: string; type: string }) {
  return function (target: any, propertyKey: string) {
    registerField(target.constructor, { propertyKey, ...options });
  };
}