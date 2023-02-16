import React from 'react';
import { FormInput } from './FormInput';

export default {
    component: FormInput,
};

const Template = (args) => <FormInput {...args} />;

export const defaultFormInput = Template.bind({});
defaultFormInput.args = {
    name: 'input-name',
    label: 'Label',
    lock: false,
    size: 'medium',
    placeholder: 'Placeholder...',
};

export const errorFormInput = Template.bind({});
errorFormInput.args = {
    name: 'input-name',
    label: 'Label',
    error: true,
    size: 'medium',
    placeholder: 'Placeholder...',
};