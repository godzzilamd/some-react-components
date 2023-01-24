export function createClassWithModifiers(
  baseClass: string,
  ...modifierArgs: (Record<string, unknown> | string[] | undefined | null)[]
): string {
  const result: string[] = [baseClass];

  modifierArgs.forEach((modifiers) => {
    if (!modifiers) return;

    if (modifiers instanceof Array) {
      modifiers.forEach((m) => m && result.push(`${baseClass}--${m}`));
    } else {
      Object.entries(modifiers).forEach((entry) =>
        result.push(entry[1] ? baseClass + "--" + entry[0] : "")
      );
    }
  });

  return result.filter((_) => _).join(" ");
}

export const makeBEM = (blockName: string) => {
  return (
    elementName?: string | null | 0 | undefined,
    ...modifierArgs: (Record<string, unknown> | string[] | undefined | null)[]
  ) =>
    elementName
      ? createClassWithModifiers(
          `${blockName}__${elementName}`,
          ...modifierArgs
        )
      : createClassWithModifiers(blockName, ...modifierArgs);
};
