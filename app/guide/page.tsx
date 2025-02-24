"use client"

import React from "react"
import { motion } from "framer-motion"
import { Guide } from '@/components/guide'
import { PageHeader } from "@/components/page-header"

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <PageHeader
        title="Guide"
        description="Learn how to effectively use AI tools and optimize your workflows"
      />
      <main className="responsive-container space-y-6 md:space-y-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Guide />
        </motion.div>
      </main>
    </div>
  )
} 