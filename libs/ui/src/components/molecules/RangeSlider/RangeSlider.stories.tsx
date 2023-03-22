import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RangeSlider } from './RangeSlider'

export default {
  title: 'molecules/RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>

const Template: ComponentStory<typeof RangeSlider> = ({
  defaultValue,
  step,
}) => {
  //   const [value, onChange] = useState<number[]>([0, 100])

  return (
    <div className="px-12 mt-24">
      <RangeSlider
        step={step}
        defaultValue={defaultValue}
        // onChange={(e, v) => onChange(v)}
        // value={value}
      />
    </div>
  )
}
const LabelFormatTemplate: ComponentStory<typeof RangeSlider> = ({
  defaultValue,
  step,
}) => {
  return (
    <div className="px-12 mt-24">
      <RangeSlider
        step={step}
        defaultValue={defaultValue}
        valueLabelFormat={(sliderValue) => `Rs.${sliderValue.toLocaleString()}`}
      />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  defaultValue: [0, 1000],
  step: 1,
}

export const LabelFormat = LabelFormatTemplate.bind({})
LabelFormat.args = {
  defaultValue: [0, 1000],
  step: 10,
}
