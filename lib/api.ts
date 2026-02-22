import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// Base API instance
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'ngrok-skip-browser-warning': 'true',
    },
});

export const submitAssessment = async (data: any) => {
    const response = await apiClient.post('/api/v1/lead-generate', data);
    return response.data;
};

export const submitCategoryAnswers = async (data: {
    categoryId: string;
    answers: { questionId: string; selectedOption: string }[];
}) => {
    const response = await apiClient.post('/assessment/category', data);
    return response.data;
};

export const submitAssessmentTest = async (data: {
    userLeadId: string;
    answers: Record<string, string>;
}) => {
    const response = await apiClient.post('/api/v1/lead/assessments/submit', data);
    return response.data;
};

export const getAssessmentQuestions = async () => {
    const response = await apiClient.get('/api/v1/lead/assessments/questions');
    return response.data;
};
