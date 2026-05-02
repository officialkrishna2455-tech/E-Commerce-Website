import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | SpeedShop",
  description: "Get in touch with the SpeedShop team. We're here to help with your questions, feedback, and support needs.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 