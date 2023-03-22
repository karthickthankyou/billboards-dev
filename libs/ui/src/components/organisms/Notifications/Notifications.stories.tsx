import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Notifications } from './Notifications'

export default {
  title: 'organisms/Notifications',
  component: Notifications,
} as ComponentMeta<typeof Notifications>

const Template: ComponentStory<typeof Notifications> = (args) => (
  <Notifications {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  notifications: [{ id: '2', message: 'Hey, I am a sample message.' }],
}
export const Two = Template.bind({})
Two.args = {
  notifications: [
    { id: '2', message: 'Hey, I am a sample message. ✋😎' },
    { id: '2', message: 'Hey, I am another sample message. ✋🥸' },
  ],
}
