const API_URL = "http://localhost:3000"; // Se cambiará cuando el backend esté listo.

export async function apiGet(path) {
  const res = await fetch(API_URL + path);
  return res.json();
}
