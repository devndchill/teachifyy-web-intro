"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { submitAssessment } from '@/lib/api';

const STEPS = [
    {
        title: 'Personal Info',
        subtitle: 'Tell us about yourself',
        fields: ['fullName', 'email', 'phone', 'age'],
    },
    {
        title: 'Background',
        subtitle: 'Your education & work',
        fields: ['education', 'profession', 'designation'],
    },
    {
        title: 'Your Goals',
        subtitle: 'Where are you headed?',
        fields: ['goal'],
    },
];

const FIELD_CONFIG: Record<string, {
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    min?: string;
    max?: string;
    rows?: number;
}> = {
    fullName: { label: 'Full Name', type: 'text', required: true },
    email: { label: 'Email Address', type: 'email', required: true },
    phone: { label: 'Phone Number', type: 'tel', required: true },
    age: { label: 'Age', type: 'number', required: true, min: '10', max: '100' },
    education: { label: 'Latest Education', type: 'text', required: true, placeholder: 'e.g. B.Tech, Master\'s in Computer Science' },
    profession: { label: 'Current Profession', type: 'text', required: true, placeholder: 'e.g. Software Engineer, Student' },
    designation: { label: 'Current Designation', type: 'text', required: true, placeholder: 'e.g. SDE-1, Non-applicable' },
    goal: { label: 'Your aspiration in the next five years (Optional)', type: 'textarea', placeholder: 'Where do you see yourself technically and professionally?', rows: 5 },
};

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    age: string;
    education: string;
    profession: string;
    designation: string;
    goal: string;
};

const EMPTY_FORM: FormData = {
    fullName: '', email: '', phone: '', age: '',
    education: '', profession: '', designation: '', goal: '',
};

export default function AssessmentForm() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const currentStep = STEPS[step];
    const isLastStep = step === STEPS.length - 1;

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLastStep) {
            setStep((s) => s + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setStatus('loading');
        setMessage('');
        try {
            const response = await submitAssessment(formData);
            if (response?.data?.id) {
                localStorage.setItem('assessmentId', response.data.id);
            }
            setStatus('success');
            setMessage('Your assessment has been submitted successfully!');
            setFormData(EMPTY_FORM);
            router.push('/assessment-test');
        } catch (error: any) {
            console.error(error);
            setStatus('error');
            setMessage(error?.response?.data?.message || 'There was an error submitting your assessment. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Step Progress */}
            <div className="flex items-center justify-between mb-8">
                {STEPS.map((s, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                onClick={() => i < step && setStep(i)}
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
                  ${i < step
                                        ? 'bg-primary border-primary text-white cursor-pointer'
                                        : i === step
                                            ? 'border-primary text-primary bg-white'
                                            : 'border-gray-200 text-gray-400 bg-white cursor-default'
                                    }`}
                            >
                                {i < step ? (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    i + 1
                                )}
                            </button>
                            <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-primary' : 'text-gray-400'}`}>
                                {s.title}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className={`flex-1 h-0.5 mx-2 rounded transition-all ${i < step ? 'bg-primary' : 'bg-gray-200'}`} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-primary/5 border-b border-gray-100 px-6 py-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-0.5">
                        Step {step + 1} of {STEPS.length}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800">{currentStep.title}</h2>
                    <p className="text-sm text-gray-500 mt-0.5">{currentStep.subtitle}</p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleNext} className="px-6 py-6">
                    {status === 'error' && (
                        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 border border-red-200">
                            <p className="text-sm font-medium text-red-800">{message}</p>
                        </div>
                    )}

                    <div className={`grid gap-4 ${currentStep.fields.length === 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {currentStep.fields.map((fieldKey) => {
                            const cfg = FIELD_CONFIG[fieldKey];
                            const inputClass = "block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";
                            return (
                                <div key={fieldKey} className={cfg.type === 'textarea' ? 'col-span-full' : ''}>
                                    <label htmlFor={fieldKey} className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        {cfg.label}
                                    </label>
                                    {cfg.type === 'textarea' ? (
                                        <textarea
                                            id={fieldKey}
                                            name={fieldKey}
                                            rows={cfg.rows ?? 4}
                                            value={(formData as any)[fieldKey]}
                                            onChange={handleChange}
                                            placeholder={cfg.placeholder}
                                            className={inputClass}
                                        />
                                    ) : (
                                        <input
                                            id={fieldKey}
                                            name={fieldKey}
                                            type={cfg.type}
                                            required={cfg.required}
                                            min={cfg.min}
                                            max={cfg.max}
                                            value={(formData as any)[fieldKey]}
                                            onChange={handleChange}
                                            placeholder={cfg.placeholder}
                                            className={inputClass}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div className={`flex mt-6 gap-3 ${step > 0 ? 'justify-between' : 'justify-end'}`}>
                        {step > 0 && (
                            <button
                                type="button"
                                onClick={() => setStep((s) => s - 1)}
                                className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                ← Back
                            </button>
                        )}
                        <Button
                            type="submit"
                            disabled={status === 'loading'}
                            className="flex-1 flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-all"
                        >
                            {status === 'loading'
                                ? 'Submitting...'
                                : isLastStep
                                    ? 'Submit Assessment'
                                    : `Continue →`}
                        </Button>
                    </div>
                </form>
            </div>

            {/* Dot indicator */}
            <div className="flex justify-center gap-1.5 mt-5">
                {STEPS.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-5 bg-primary' : 'w-1.5 bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}