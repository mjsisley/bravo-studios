import Link from 'next/link';

export const metadata = {
  title: 'Historical Criteria',
};

export default function HistoricalCriteriaPage() {
  return (
    <>
      <h1>Historical Criteria</h1>
      <Link href="/screening-criteria/historical-screening-criteria/criteria-effective-20220129">
        Effective 01/29/2022
      </Link>
    </>
  );
}
