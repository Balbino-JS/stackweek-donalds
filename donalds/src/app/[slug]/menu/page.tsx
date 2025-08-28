import { db } from "@/lib/prisma"
import { ConsumptionMethod } from "@prisma/client"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"


interface RestaurantMenuPageProps {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ ConsumptionMethod: string }>
}

const isConsumptionMethodValid = (ConsumptionMethod: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(ConsumptionMethod.toUpperCase())
}

const RestaurantMenuPage = async ({ params, searchParams, }: RestaurantMenuPageProps) => {
    const { slug } = await params
    const { consumptionMethod } = await searchParams
    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound
    }
    const restaurant = await db.restaurant.findUnique({ where: { slug } })
    if (!restaurant) {
        return notFound
    }
    return (
        <div>
            <div className="relative h-[200px] w-full">
                <Button variant="secondary" size="icon" className="absolute top-4 left-4 rounded-full z-50">
                    <ChevronLeftIcon />
                </Button>


                <Image
                    src={restaurant.coverImageUrl}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                />

                <Button variant="secondary" size="icon" className="absolute top-4 right-4 rounded-full z-50">
                    <ScrollTextIcon />
                </Button>
            </div>
            <h1 className="text-2xl font-bold mt-4">{restaurant.name}</h1>
            <p className="text-gray-600">Modo: {consumptionMethod}</p>
        </div>
    )


}


export default RestaurantMenuPage