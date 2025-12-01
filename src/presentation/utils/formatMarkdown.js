export const formatMarkdown = (text) => {
  if (!text) return "";

  let html = text;

  // TITULOS # ## ###
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // LISTAS - item
  html = html.replace(/^- (.*$)/gim, "<li>$1</li>");
  // LISTAS * item
  html = html.replace(/^\* (.*$)/gim, "<li>$1</li>");

  // ITEMS sueltos → envolver en <ul>
  html = html.replace(/(<li>.*?<\/li>)/gims, "<ul>$1</ul>");

  // NEGRITAS, ITÁLICAS, SUBRAYADO, TACHADO
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<i>$1</i>");
  html = html.replace(/__(.*?)__/g, "<u>$1</u>");
  html = html.replace(/~~(.*?)~~/g, "<del>$1</del>");

  // CÓDIGO `code`
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // LINKS [texto](url)
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

  // NUEVAS LÍNEAS → <br>
  html = html.replace(/\n/g, "<br>");

  return html.trim();
};

