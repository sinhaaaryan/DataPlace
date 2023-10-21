import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "lucide-react";
import Image from "next/image";

const TopBar = () => {
  return (
    <nav className='topbar'>
      {/* <Link href='/' className='flex items-center gap-4'>
        <Image src='/public/vercel.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>DataPlace</p>
      </Link> */
    }
    <p>DataPlace</p>

    <div className='flex items-center gap-1'>
      <div className='block md:hidden'>

            <div className='flex cursor-pointer'>
              {/* <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
              /> */}
            </div>

      </div>


    </div>
  </nav>
  )
}

export default TopBar;