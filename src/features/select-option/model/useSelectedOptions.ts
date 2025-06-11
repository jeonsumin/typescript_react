import { useState } from 'react'

export const useSelectOption = (survey: any[]) => {
  const [selectedOption, setSelectedOption] = useState<any>({})

  const handleSelect = (question: number, index: number) => {
    const current = selectedOption[question] || []
    const multiCount = survey[question].multi ?? 1
    const alreadySelected = current.includes(index)

    let updated: number[]
    if (multiCount === 1) {
      updated = [index]
    } else {
      if (alreadySelected) {
        updated = current.filter((i: any) => i !== index)
      } else {
        if (current.length >= multiCount) return
        updated = [...current, index]
      }
    }

    setSelectedOption((prev: any) => ({ ...prev, [question]: updated }))
  }

  return { selectedOption, handleSelect }
}
