const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function apiGet(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`API GET ${endpoint} failed: ${res.status}`);
  }

  return res.json();
}

export async function apiPost(endpoint, body) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`API POST ${endpoint} failed: ${res.status}`);
  }

  return res.json();
}
