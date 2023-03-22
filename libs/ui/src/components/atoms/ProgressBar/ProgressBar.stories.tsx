import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

export default {
  title: 'atoms/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
export const Determinate = Template.bind({})
Determinate.args = { value: 50, variant: 'determinate' }
export const Buffer = Template.bind({})
Buffer.args = { value: 50, variant: 'buffer', valueBuffer: 70 }
