import { Card } from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Suspense } from 'react';
import { RevenueChartSkeleton,LatestInvoicesSkeleton,CardSkeleton } from '../ui/skeletons';

export default async function Page() {
    return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<CardSkeleton></CardSkeleton>}><CardWrapper></CardWrapper></Suspense>
      </div>
        <div>
        <Suspense fallback={<RevenueChartSkeleton/>}>
        <RevenueChart/>
        </Suspense>
        </div>
        <div>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
        <LatestInvoices></LatestInvoices>
        </Suspense>
      </div>
    </main>
  );
}