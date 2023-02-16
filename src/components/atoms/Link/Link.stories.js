// Button.stories.js|jsx

import Link from './Link';
import '../../../static/css/style.css'

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Link',
    component: Link,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Link {...args} />;

export const FirstStory = () => {
    return <Link linkClass="-regular" linkLabel="Crée un compte" />
}