'use client'
import Link from "next/link";
import Image from "next/image";
import { MenuData } from "@/data/menu-data";
import { smoothScrollToHash } from "@/utils/smooth-scroll";
import type { MouseEvent } from "react";

const SCROLL_DURATION = 1100;

export default function NavMenus() {
   const handleClick = (url: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      const handled = smoothScrollToHash(url, { duration: SCROLL_DURATION });
      if (handled) {
         event.preventDefault();
      }
   };

   return (
      <nav className="tp-mobile-menu-active">

         <ul>
            {MenuData.menu_data_one.map((item) => (
               <li key={item.id} className={`${item.home_menu ? "position-static" : ""}`}>
                  <Link href={item.url} onClick={handleClick(item.url)}>{item.label}</Link>

                  {item.home_menu && (
                     <div className="tp-mega-menu">
                        <div className="tp-main-has-submenu">
                           <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5">
                              {item.submenu?.map((subitem) => (
                                 <div key={subitem.id} className="col homemenu">
                                    <div className="homemenu-thumb mb-15">
                                       <Link href={subitem.url} onClick={handleClick(subitem.url)}>
                                          <Image src={subitem.img!} alt={subitem.label} width={213} height={208} />
                                       </Link>
                                    </div>
                                    <div className="homemenu-content text-center">
                                       <h4 className="homemenu-title">
                                          <Link href={subitem.url} onClick={handleClick(subitem.url)}>{subitem.label}</Link>
                                       </h4>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}

                  {!item.home_menu && item.submenu && (
                     <ul className="tp-submenu submenu">
                        {item.submenu.map((subitem) => (
                           <li key={subitem.id}>
                              <Link href={subitem.url} onClick={handleClick(subitem.url)}>{subitem.label}</Link>
                           </li>
                        ))}
                     </ul>
                  )}
               </li>
            ))}

         </ul>

      </nav>
   )
}
