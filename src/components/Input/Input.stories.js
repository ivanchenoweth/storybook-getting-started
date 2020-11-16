import React from 'react'
import Input from './Input'

// mandatories: 
export default {
    title: 'Input',
    component: Input
}

// story1
export const Small = () => <Input size='small' placeholder='Small size' />
// story2
export const Medium = () => <Input size='medium' placeholder='Medium size' />
// story3
export const Large = () => <Input size='large' placeholder='Large size' />
