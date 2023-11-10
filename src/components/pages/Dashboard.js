import React from 'react'
import { Fragment } from 'react'
import { Calendar } from '../Calendar.js'
export const Dashboard = () => {
  return (
    <Fragment>
        <div className='card container-fluid m-3'>
            <Calendar/>
        </div>
    </Fragment>
  )
}
