export async function rest(url: string): Promise<T> {
  return fetch(url).then((x) => x.json())
}
