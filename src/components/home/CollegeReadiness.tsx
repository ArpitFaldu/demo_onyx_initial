"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Button } from "@/components/ui/button"

const pieData = [
  { id: 0, value: 20, label: "Standardized Test", color: "#6BAA46" },
  { id: 1, value: 30, label: "GPA/Transcript", color: "#F25C5C" },
  { id: 2, value: 16, label: "Essay", color: "#F4C261" },
  { id: 3, value: 10, label: "Course Rigor", color: "#D9CBA3" },
  { id: 4, value: 10, label: "Teacher Recommendations", color: "#B78ED6" },
  { id: 5, value: 8, label: "Extra Curricular Activities", color: "#FA9875" },
  { id: 6, value: 4, label: "Diversity", color: "#19D3F3" },
  { id: 7, value: 2, label: "Uniqueness/Other", color: "#5F67E3" },
]

// Custom legend component for better mobile display
const CustomLegend = ({ payload }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="truncate">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function CollegeReadiness() {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">College Readiness</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Most of our students are college-bound with a need to have a plan... The essay portion in particular goes
              through the writing process and in-depth proofreading before it is ready to impress the admission readers.
            </p>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Of note – 100% of our students increase their SAT composite score by at least 200 points within six weeks
              of tutoring!
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Learn More <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Chart Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="w-full">
              {/* Chart Container */}
              <div className="h-[280px] sm:h-[320px] lg:h-[350px] mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius="80%"
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="label"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: any, name: any) => [`${value}%`, name]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Custom Legend */}
              <CustomLegend payload={pieData.map((item) => ({ value: item.label, color: item.color }))} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
