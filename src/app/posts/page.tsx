import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/" className='underline text-blue-600'>Back to home</Link>
      </h2>
    </>
  );
}