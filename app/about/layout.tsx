import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | SpeedShop",
  description: "Learn about SpeedShop's mission, values, and the team behind India's favorite e-commerce platform",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 