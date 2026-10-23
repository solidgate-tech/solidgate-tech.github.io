// Joins truthy class names
export const cx = (...names) => names.filter(Boolean).join(" ");
