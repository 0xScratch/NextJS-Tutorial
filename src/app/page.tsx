import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Screen</h1>
      <h1>Read <Link href="/posts" className="underline text-cyan-300">this page!</Link></h1>
    </main>
  )
}
