import React from 'react';
import { SignForm } from './SignForm';

export default {
    component: SignForm,
};

const Template = (args) => <SignForm {...args} />;

export const signForm = Template.bind({});
signForm.args = {
    title: 'Title form'
};