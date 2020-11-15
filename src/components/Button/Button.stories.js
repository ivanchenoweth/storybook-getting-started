import React from 'react'
import Button from './Button'

// mandatories: 
export default {
    title: 'Button',
    component: Button
}

// story1
export const Primary = () => <Button variant='variant'>Primary</Button>
// story2
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
// story3
export const Success = () => <Button variant='sucess'>Success</Button>
// story4
export const Danger = () => <Button variant='sanger'>Danger</Button>

