import { usePage } from '@inertiajs/react';
import AdminDashboard from './dashboard/admin';
import OpdDashboard from './dashboard/opd';

interface DashboardProps {
    pendingDocuments?: Document[];
    recentEvaluations?: Evaluation[];
    myDocuments?: Document[];
    performanceIndicators?: PerformanceIndicator[];
    indicatorProgress?: IndicatorProgress[];
    stats: Stats;
    [key: string]: unknown;
}

interface Document {
    id: number;
    title: string;
    status: string;
    created_at: string;
    government_agency?: GovernmentAgency;
    type: string;
    category: string;
    description?: string;
}

interface Evaluation {
    id: number;
    title: string;
    status: string;
    evaluation_date: string;
    score?: number;
    government_agency?: GovernmentAgency;
    stage: string;
}

interface PerformanceIndicator {
    id: number;
    indicator_name: string;
    target: number;
    achievement: number;
    achievement_percentage: number;
    unit: string;
}

interface IndicatorProgress {
    name: string;
    target: number;
    achievement: number;
    percentage: number;
}

interface GovernmentAgency {
    id: number;
    name: string;
}

interface Stats {
    pending_reviews: number;
    approved_documents: number;
    total_agencies: number;
    total_evaluations: number;
    my_evaluations?: number;
    my_documents: number;
    pending_documents: number;
    performance_indicators: number;
}

interface AuthUser {
    role: string;
}

export default function Dashboard(props: DashboardProps) {
    const page = usePage();
    const auth = (page.props as unknown as { auth: { user: AuthUser } }).auth;
    const user = auth?.user;

    // Default props to empty arrays to avoid undefined issues
    const safeProps = {
        pendingDocuments: props.pendingDocuments || [],
        recentEvaluations: props.recentEvaluations || [],
        myDocuments: props.myDocuments || [],
        performanceIndicators: props.performanceIndicators || [],
        indicatorProgress: props.indicatorProgress || [],
        stats: props.stats,
    };

    // Redirect based on user role
    if (user?.role === 'admin' || user?.role === 'inspector') {
        return <AdminDashboard {...safeProps} />;
    }

    return <OpdDashboard {...safeProps} />;
}