import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => (
  <Header
    user={undefined}
    signOut={function (): void {
      throw new Error('Function not implemented.')
    }}
  />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
