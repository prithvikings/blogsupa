import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const loading = () => {
  return (
    <div className='flex items-center justify-center'><Spinner /></div>
  )
}

export default loading