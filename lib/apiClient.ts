import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

interface CustomAxiosConfig extends AxiosRequestConfig {
    next?: {
        revalidate?: boolean | number;
    };
}

// Helper function to setup interceptors
const setupInterceptors = (instance: AxiosInstance) => {
    // Request interceptor to add auth token
    instance.interceptors.request.use(
        (config) => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                    config.headers["ngrok-skip-browser-warning"] = "true";
                }
                config.headers["ngrok-skip-browser-warning"] = "true";

            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor to handle 401 errors
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                if (typeof window !== "undefined") {
                    localStorage.removeItem("token");
                    document.cookie =
                        "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    if (window.location.pathname !== "/") {
                        window.location.href = "/";
                    }
                }
            }
            return Promise.reject(error);
        }
    );
};

export class Client {
    api: AxiosInstance;

    constructor() {
        const customConfig: CustomAxiosConfig = {
            baseURL: baseURL,
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 10 },
        };

        this.api = axios.create(customConfig);

        // Setup interceptors
        setupInterceptors(this.api);
    }
}
