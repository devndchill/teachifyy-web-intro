import AssessmentForm from '@/components/assessment/AssessmentForm';

export const metadata = {
    title: 'Career Assessment | Teachifyy',
    description: 'Take your career assessment test with Teachifyy and find the right path for your technical journey.',
};

export default function AssessmentPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl font-bold tracking-tight text-dark-900 sm:text-4xl">
                        Career Assessment
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Tell us about your background and aspirations. We'll help chart the perfect path to elevate your tech career.
                    </p>
                </div>

                <div className="bg-white py-10 px-6 shadow-xl shadow-dark-100/10 sm:rounded-2xl sm:px-12 border border-gray-100 animate-slide-up">
                    <AssessmentForm />
                </div>
            </div>
        </div>
    );
}
