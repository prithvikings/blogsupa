
import React from 'react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/server'
const page =async () => {
 const supabase = await createClient()
 const {data:{user}}=await supabase.auth.getUser()
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form action="/auth/signout" method="POST">
      <Button>Logout</Button>
      </form>
      {JSON.stringify(user)}
    </div>
  )
}

export default page