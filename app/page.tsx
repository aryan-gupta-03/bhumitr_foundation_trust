import HeroSection from '@/components/HeroSection'
import ImpactStats from '@/components/ImpactStats'
import ProgramsPreview from '@/components/ProgramsPreview'
import RecentActivities from '@/components/RecentActivities'
import UpcomingDrives from '@/components/UpcomingDrives'
import InstagramFeed from '@/components/InstagramFeed'
import CTAButtons from '@/components/CTAButtons'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImpactStats />
      <RecentActivities />
      <ProgramsPreview />
      <UpcomingDrives />
      <InstagramFeed />
      <CTAButtons />
    </div>
  )
}

