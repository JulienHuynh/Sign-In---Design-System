// Button.stories.js|jsx

import Button from './Button';
import '../../../static/css/style.css'

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const buttonRender = () => {
    return <Button btnClass='-green' btnLabel='Button'/>
}