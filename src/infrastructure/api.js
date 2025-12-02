// src/infraestructure/AuthContex.jsx
const API_URL = "http://127.0.0.1:8000"; // Se cambiará cuando el backend esté listo.

// GET genérico
export async function apiGet(path) {
  const res = await fetch(API_URL + path, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`
    }
  });
  if (!res.ok) throw new Error("Error en GET " + path);
  return res.json();
}

// POST genérico
export async function apiPost(path, body) {
  const res = await fetch(API_URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Error en POST " + path);
  return res.json();
}

// PUT genérico
export async function apiPut(path, body) {
  const res = await fetch(API_URL + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Error en PUT " + path);
  return res.json();
}

// DELETE genérico
export async function apiDelete(path) {
  const res = await fetch(API_URL + path, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("access_token") || ""}`
    },
  });
  if (!res.ok) throw new Error("Error en DELETE " + path);
  return res.json();
}

