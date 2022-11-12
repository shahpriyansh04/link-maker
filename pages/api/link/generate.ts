// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../lib/supabase'
import passwordHash from 'password-hash'
import randomstring  from 'randomstring'
type Data = {
  message: string,
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
      }
      const { link, passwordProtected , password} =  JSON.parse(req.body)
    let hashedPassword;
    if(password) {

         hashedPassword = passwordHash.generate(password);
    }
    const shortenedLink = randomstring.generate(6)
    const {data , error} = await supabase.from('links').insert({link,protected: passwordProtected,hashed_password:hashedPassword, shortened_link:shortenedLink});
    console.log(data,error);
    //@ts-ignore

  res.status(200).json({ message: 'Successfull', url: shortenedLink }) 
  }