import React from 'react';
import { Input } from './Input';

export default {
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});
defaultInput.args = {
    lock: false,
    size: 'medium',
    placeholder: 'Placeholder...',
    type: 'email',
};

export const errorInput = Template.bind({});
errorInput.args = {
    error: true,
    size: 'medium',
    placeholder: 'Placeholder...',
    type: 'email',
};
