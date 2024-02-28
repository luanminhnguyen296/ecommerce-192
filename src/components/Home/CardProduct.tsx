import React from 'react'

type Props = {
   description: string,
   headline: string,
   image: string,
}

export default function CardProduct({ description, headline, image }: Props) {
   return (
      <Card href="#" className="max-w-sm">
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {headline}
         </h5>
         <img src={image} alt={description} />
         <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
         </p>
      </Card>
   )
} 
