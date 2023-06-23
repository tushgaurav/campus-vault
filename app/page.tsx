import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const style = {
  backgroundImage: "url(/images/stock/photo-1507358522600-9f71e620c44e.jpg)"
}

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />

      <div className="hero min-h-screen" style={style}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">
      <Link href="/data">Search Now</Link>
      </button>
    </div>
  </div>
</div>
    </main>
  )
}
