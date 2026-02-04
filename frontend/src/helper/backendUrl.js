const isDev = window.location.hostname === "localhost"

export const BACKEND_URL = isDev ? "http://localhost:3000/api/" : "https://domains-api.shivanshup.xyz/api/"
