'use client'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export function Filters() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-xs space-y-8 p-6 bg-white rounded-2xl shadow-lg"
    >
      <div className="space-y-2">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary transition-colors duration-300"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-luxury-gold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text ">
          Categories
        </h3>
        <div className="space-y-3">
          {["Jewelry", "Fashion", "Uncategorized"].map((category) => (
            <motion.div key={category} whileHover={{ x: 5 }} className="flex items-center space-x-3">
              <Checkbox id={category.toLowerCase()} className="data-[state=checked]:bg-primary" />
              <Label htmlFor={category.toLowerCase()} className="cursor-pointer">
                {category}
              </Label>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-luxury-gold">
          Status
        </h3>
        <RadioGroup defaultValue="all" className="space-y-3">
          {["Sold", "Not Sold"].map((status) => (
            <motion.div key={status} whileHover={{ x: 5 }} className="flex items-center space-x-3">
              <RadioGroupItem value={status.toLowerCase()} id={status.toLowerCase()} className="text-primary" />
              <Label htmlFor={status.toLowerCase()} className="cursor-pointer">
                {status}
              </Label>
            </motion.div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-luxury-gold">
          Price Range
        </h3>
        <RadioGroup defaultValue="all" className="space-y-3">
          {["High Price", "Low Price"].map((price) => (
            <motion.div key={price} whileHover={{ x: 5 }} className="flex items-center space-x-3">
              <RadioGroupItem value={price.toLowerCase()} id={price.toLowerCase()} className="text-primary" />
              <Label htmlFor={price.toLowerCase()} className="cursor-pointer">
                {price}
              </Label>
            </motion.div>
          ))}
        </RadioGroup>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant="outline"
          className="w-full bg-gradient-to-r from-primary to-primary/60 hover:from-primary/80 hover:to-primary/40 text-white rounded-xl py-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Reset Filters
        </Button>
      </motion.div>
    </motion.div>
  )
}

