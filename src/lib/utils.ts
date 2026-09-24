export function flattenTree<T, K extends keyof T>(
  roots: readonly T[],
  childrenKey: K,
): T[] {
  const result: T[] = [];
  const stack = [...roots].reverse();

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) continue;

    result.push(node);

    const descendants = node[childrenKey] as readonly T[] | null | undefined;

    if (!descendants || descendants.length === 0) continue;

    for (let i = descendants.length - 1; i >= 0; i -= 1) {
      stack.push(descendants[i]);
    }
  }

  return result;
}
