import Link from './Link';
import '../../../static/css/style.css'

export default {
    component: Link,
};

const Template = (args) => <Link {...args} />;

export const FirstStory = () => {
    return <Link linkClass="-regular" linkLabel="Crée un compte" />
}