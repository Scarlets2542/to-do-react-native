const API_URL = "https://todo-list-api-mfchjooefq-as.a.run.app";

const fetchApi = async <T>(
  endpoint: string,
  method: "GET" | "POST" = "GET",
  body?: any,
  timeout: number = 5000
): Promise<T> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeout)
  );

  try {
    const response = await Promise.race([
      fetch(`${API_URL}/${endpoint}`, config),
      timeoutPromise,
    ]);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

export const get = async <T>(endpoint: string): Promise<T> => {
  return await fetchApi<T>(endpoint, "GET");
};
