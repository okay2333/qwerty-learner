import deFlag from '@/assets/flags/de.png'
import enFlag from '@/assets/flags/en.png'
import jpFlag from '@/assets/flags/ja.png'
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

type LanguageTabOption = {
  id: string
  name: string
  flag: string
}

const options: LanguageTabOption[] = [
  { id: 'en', name: 'Englist', flag: enFlag },
  { id: 'jp', name: '日本語', flag: jpFlag },
  { id: 'de', name: 'Deutsch', flag: deFlag },
]

export const Features = () => {
  const [plan, setPlan] = useState('en')
  const listItems = options.map((option) => {
    return (
      <RadioGroup.Option key={option.id} value={option.id} className="mx-5 my-5">
        {({ checked }) => (
          <div className={`flex items-center rounded-md px-2 py-2 ${checked ? ' border-b-2' : ''}`}>
            <img src={option.flag} alt="" />
            <p>{option.name}</p>
          </div>
        )}
      </RadioGroup.Option>
    )
  })
  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <div className="flex">{listItems}</div>
    </RadioGroup>
  )
}
