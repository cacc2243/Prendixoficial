import { TopBar } from "@/components/top-bar"
import { Hero } from "@/components/hero"
import { CategoryPills } from "@/components/category-pills"
import { HotSection } from "@/components/hot-section"
import { SerieShelves } from "@/components/serie-shelves"

export function HomeScreen() {
  return (
    <div className="relative">
      <TopBar />
      <Hero />
      <CategoryPills />
      <HotSection />
      <SerieShelves />
    </div>
  )
}
