import { locations } from '@/lib/data'

export default function Home() {
  return (
    <ul className="flex flex-wrap justify-start gap-8 text-lg text-gray-800 mt-5 ml-5">
      {locations.map((location) => (
        <a
          key={location.title}
          href={location.value}
          className="rounded-xl border border-black/[0.1] bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
        >
          {location.title}
        </a>
      ))}
    </ul>
  )
}
