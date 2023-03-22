import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from './Container'

export default {
  title: 'molecules/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic tempore et
      itaque facilis obcaecati, omnis culpa architecto dignissimos, dolor magnam
      tempora maxime fugiat nostrum cumque!
    </div>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic tempore et
      itaque facilis obcaecati, omnis culpa architecto dignissimos, dolor magnam
      tempora maxime fugiat nostrum cumque!
    </div>
  </Container>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
