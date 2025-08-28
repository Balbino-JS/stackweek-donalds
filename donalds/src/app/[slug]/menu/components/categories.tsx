"use client"

import Image from "next/image"
import { MenuCategory, Prisma, Restaurant } from "@prisma/client"
import { ClockIcon } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import RestaurantHeader from "./header"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
        menuCategories: {
            include:{products:true}
        }
    }
  }>
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
    const [selectedCategory, setSelectdCategory] = useState<MenuCategory>(restaurant.menuCategories|
        const handleCategoryClick = (category: MenuCategory) =>{
            setSelectdCategory(category)
        })
  return (  
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
       <div className="p-5">
        <div className="flex items-center gap-3 ">
        <Image 
          src={restaurant.avatarImageUrl} 
          alt={restaurant.name} 
          height={45} 
          width={45}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">{restaurant.name}</h2>
          <p className="text-xs opacity-55">{restaurant.description}</p>
        </div>      
      </div>
      <div className="mt-3 flex items-center gap-1 text-xs text-green-500 ">
            <ClockIcon size={12} />
            <p>Aberto!</p>
        </div> 
       </div>
        <ScrollArea className="w-full mt-s">
            <div className="flex w-max space-x-4 p-4 pt-0">
                {restaurant.menuCategories.map(category => (
                    <Button onClick={() => handleCategoryClick(category)} key={category.id} variant="secondary" size="sm" className="rounded-full">
                        {category.name}
                    </Button>
                ))}
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>
    </div>
  )
}

export default RestaurantCategories