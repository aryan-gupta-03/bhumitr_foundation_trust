import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ProgramCardProps {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  href: string
}

export default function ProgramCard({
  title,
  description,
  icon: Icon,
  color,
  href,
}: ProgramCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="card h-full hover:scale-105 transition-transform duration-300">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  )
}

