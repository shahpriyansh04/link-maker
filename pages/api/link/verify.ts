// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../lib/supabase'
import passwordHash from 'password-hash'
import randomstring  from 'randomstring'
type Data = {
  message: string
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
      const { id, password} =  JSON.parse(req.body)
   const {data} = await supabase.from('links').select("*").eq('id', id);
   //@ts-ignore
   const result = passwordHash.verify(password, data[0].hashed_password);
   if(!result) {
    res.status(200).json({ message: 'Unsuccessfull' })
   }
   res.status(200).json({ message: 'Successfull' })
}
