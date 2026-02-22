"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { submitAssessmentTest, getAssessmentQuestions } from '@/lib/api';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface QuestionOption {
    A: string;
    B: string;
    C: string;
    D: string;
}

interface Question {
    id: string;
    text: string;
    options: QuestionOption;
}

interface CategoryFeedback {
    label: string;
    rating: string;
    feedbackText: string;
}

interface AssessmentResult {
    totalScore: number;
    totalQuestions: number;
    categoryScores: Record<string, number>;
    categoryRatings: Record<string, string>;
    categoryFeedback: Record<string, CategoryFeedback>;
    categories: Record<string, string>;
}

export default function AssessmentTest() {
    const router = useRouter();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [userLeadId, setUserLeadId] = useState<string | null>(null);
    const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await getAssessmentQuestions();
                // Handle different possible response structures
                const rawData = response?.data?.questions || response?.data || response?.questions || response || [];

                if (Array.isArray(rawData) && rawData.length > 0) {
                    const formattedQuestions = rawData.map((q: any) => ({
                        id: q.questionNo,
                        text: q.questionText || q.question || q.text || q.title || '',
                        options: {
                            A: q.optionA || q.a || q.option_a || q.options?.A || q.A || '',
                            B: q.optionB || q.b || q.option_b || q.options?.B || q.B || '',
                            C: q.optionC || q.c || q.option_c || q.options?.C || q.C || '',
                            D: q.optionD || q.d || q.option_d || q.options?.D || q.D || ''
                        }
                    }));
                    setQuestions(formattedQuestions);
                } else {
                    console.error('Invalid questions data format:', rawData);
                    setStatus('error');
                    setMessage('Invalid assessment questions format received from the server.');
                }
            } catch (error) {
                console.error('Failed to fetch questions:', error);
                setStatus('error');
                setMessage('Failed to load questions. Please check your internet connection.');
            } finally {
                setIsLoadingQuestions(false);
            }
        };

        const id = localStorage.getItem('assessmentId');
        if (id) {
            setUserLeadId(id);
        } else {
            console.warn('No assessmentId found in localStorage');
        }

        const storedName = localStorage.getItem('fullName');
        if (storedName) {
            setName(storedName);
        }

        fetchQuestions();
    }, []);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const handleOptionSelect = (optionKey: string) => {
        if (!currentQuestion) return;
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionKey }));
    };

    const handleNext = () => {
        if (!currentQuestion) return;
        if (!answers[currentQuestion.id]) {
            alert('Please select an option before proceeding.');
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleSubmit = async () => {
        if (!currentQuestion) return;
        if (!answers[currentQuestion.id]) {
            alert('Please select an option before submitting.');
            return;
        }

        if (!userLeadId) {
            setStatus('error');
            setMessage('User Lead ID not found. Return to the assessment form and submit it first.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await submitAssessmentTest({
                userLeadId: userLeadId,
                answers: answers
            });

            if (response?.data) {
                setAssessmentResult(response.data);
            }

            setStatus('success');
            setMessage('Your assessment test has been submitted successfully!');
            // Removed automatic redirect to allow user to view results
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setMessage('There was an error submitting your test. Please try again.');
        }
    };

    if (isLoadingQuestions) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-12 max-w-3xl mx-auto mt-8 border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-medium">Loading your assessment questions...</p>
            </div>
        );
    }

    if (status === 'success' && assessmentResult) {
        const labels = Object.values(assessmentResult.categoryFeedback).map((f: any) => f.label);
        const data = Object.keys(assessmentResult.categoryFeedback).map((key: string) => assessmentResult.categoryScores[key] || 0);

        const chartData = {
            labels,
            datasets: [
                {
                    label: 'Score',
                    data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0,
                    ticks: {
                        stepSize: 1,
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom' as const,
                }
            }
        };

        return (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto mt-8 border border-gray-100">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Results for {name} </h2>
                    <p className="text-gray-600 mb-6">You scored <span className="font-bold text-blue-600 text-xl">{assessmentResult.totalScore}</span> out of {assessmentResult.totalQuestions}</p>
                </div>

                <div className="mb-10 flex justify-center h-[400px]">
                    <PolarArea data={chartData} options={chartOptions} />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(assessmentResult.categoryFeedback).map(([key, feedback]) => (
                        <div key={key} className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-semibold text-gray-800 flex-1 pr-4">{feedback.label}</h3>
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${feedback.rating === 'Poor' ? 'bg-red-100 text-red-700' :
                                    feedback.rating === 'Satisfactory' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                    {feedback.rating}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm flex-1">{feedback.feedbackText}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Button
                        onClick={() => router.push('/')}
                        className="px-8 py-2.5 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl shadow-sm transition-all"
                    >
                        Return Home
                    </Button>
                </div>
            </div>
        );
    }

    if (!questions || questions.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mt-12 text-center border border-gray-100">
                <h2 className="text-xl font-bold text-red-600 mb-2">Oops!</h2>
                <p className="text-gray-600">{message || 'No questions found. Please try again later.'}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto mt-8 border border-gray-100">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Assessment Test</h2>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
            </div>

            {status === 'error' && (
                <div className="mb-6 rounded-md bg-red-50 p-4 border border-red-200">
                    <div className="text-sm font-medium text-red-800">{message}</div>
                </div>
            )}

            <div className="mb-8 min-h-[300px]">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
                    {currentQuestionIndex + 1}. {currentQuestion.text}
                </h3>

                <div className="space-y-3">
                    {Object.entries(currentQuestion.options).map(([key, value]) => {
                        const isSelected = answers[currentQuestion.id] === key;
                        return (
                            <button
                                key={key}
                                onClick={() => handleOptionSelect(key)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${isSelected
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-gray-200 hover:border-primary/50 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="font-bold mr-3">{key}.</span>
                                {value}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <Button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0 || status === 'loading'}
                    className="px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold rounded-xl disabled:opacity-50 transition-all shadow-sm"
                >
                    Previous
                </Button>

                {isLastQuestion ? (
                    <Button
                        onClick={handleSubmit}
                        disabled={status === 'loading'}
                        className="px-8 py-2.5 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl shadow-sm disabled:opacity-50 transition-all"
                    >
                        {status === 'loading' ? 'Submitting...' : 'Submit Assessment'}
                    </Button>
                ) : (
                    <Button
                        onClick={handleNext}
                        className="px-8 py-2.5 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl shadow-sm transition-all"
                    >
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
}
