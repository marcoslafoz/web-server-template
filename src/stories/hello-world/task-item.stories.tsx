import { StoryFn, Meta } from '@storybook/react'
import { HelloWorld, HelloWorldProps } from '../../modules/components/hello-world'

export default {
  title: 'Components/HelloWorld/HelloWorld Component',
  component: HelloWorld,
} as Meta

const Story: StoryFn<HelloWorldProps> = args => {
  return <HelloWorld {...args} />
}

export const HelloWorldStory = Story.bind({})
HelloWorldStory.args = {}
