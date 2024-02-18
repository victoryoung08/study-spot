export default function checkTags({ tags, tagName }: any) {
  if (tags !== undefined && tags !== null) {
    const tagIncluded = tags.some((tag: { item: any }) => tag.item === tagName);
    return tagIncluded;
  }
  return false;
}
