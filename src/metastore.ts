type FieldMeta = { propertyKey: string; label: string; type: string };
type ClassMeta = { title: string; fields: FieldMeta[] };

// Global metadata store
const globalMetaStore = new Map<Function, ClassMeta>();

export function registerClass(cls: Function, title?: string) {
  if (!globalMetaStore.has(cls)) {
    globalMetaStore.set(cls, { title: title ?? cls.name, fields: [] });
  }
}

export function registerField(cls: Function, field: FieldMeta) {
  registerClass(cls); // ensure class is registered
  const meta = globalMetaStore.get(cls)!;

  // avoid duplicate fields
  if (!meta.fields.some(f => f.propertyKey === field.propertyKey)) {
    meta.fields.push(field);
  }
}

export function getMeta(cls: Function): ClassMeta | undefined {
  return globalMetaStore.get(cls);
}

export function getAllClasses(): Function[] {
  return Array.from(globalMetaStore.keys());
}
