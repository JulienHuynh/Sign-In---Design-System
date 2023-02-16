import Button from './Button';
import '../../../static/css/style.css'

export default {
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const BtnRender = Template.bind({});
BtnRender.args = {
    variant: 'primary',
    label: 'Button',
    disabled: false,
    size: 'medium',
};