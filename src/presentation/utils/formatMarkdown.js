export const formatMarkdown = (text) => {
  if (!text) return "";

  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")   // **negritas**
    .replace(/\*(.*?)\*/g, "<i>$1</i>")       // *itálica*
    .replace(/__(.*?)__/g, "<u>$1</u>")       // __subrayado__
    .replace(/~~(.*?)~~/g, "<del>$1</del>")   // ~~tachado~~
    .replace(/`(.*?)`/g, "<code>$1</code>");  // `código`
};
