"use client"

import React from "react"
import { motion } from "framer-motion"
import { ToolSummaryTable } from '@/components/tool-summary-table'
import { tools } from '@/data/tools'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100">
      <main className="responsive-container space-y-6 md:space-y-8 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
              <ToolSummaryTable tools={tools} />
        </motion.div>
      </main>
    </div>
  )
}