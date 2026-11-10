"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {
    // usePathname - catch route segment after APP_URL (https://localhost:3000/)
    // EXAMPLE: https://localhost:3000/products , which pathname> pathName= products

    //useRouter (hard navigation)
    const router = useRouter();

    const pathName = usePathname();

    const searchParams = useSearchParams();
  return (
    <div>
        pathName: {pathName}
        {/*button navigation using router */}
        <button className="border p-4 rounded" onClick={()=> router.push('/')}>Home Page</button>
        {/*button navigation using router */}
        <button className="border p-4 rounded" onClick={()=> router.forward()}>Next Page</button>
        <button className="border p-4 rounded" onClick={()=> router.back()}>Back from previous page</button>
        Search Params : {searchParams.get('category')}
    </div>
  ) 
}
