"use server";

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const addTodo = async(formData:FormData) => {
   try{
        const title =  formData.get("title");
        const description = formData.get("description");
        const todo = await prisma.todo.create({
            data: {
                tite: title,
                description: description
            }
        })
        revalidatePath("/contact");
   }
   catch(e){
    return e
   }
}

