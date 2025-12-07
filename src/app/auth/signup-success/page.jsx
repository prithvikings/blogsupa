import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'


const SignUpSuccess = () => {
  return (
    <main className='min-h-screen bg-zinc-950 flex items-center justify-center px-4'>
      <Card
      className={'w-full max-w-md p-8 bg-zinc-900 border-zinc-800 text-center'}
      >

        <h1 className='text-3xl font-bold text-emerald-400 mb-4'>Check Your Email</h1>
        <p className='text-zinc-300 mb-6'>
        We have sent a confimation Link to you email address Please check your inbox and click the link to verify your account.
        </p>
        <Link
          href="/auth/signin"
        >
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-zinc-50 cursor-pointer">Back to Login</Button>

        </Link>
      </Card>
    </main>
  )
}

export default SignUpSuccess