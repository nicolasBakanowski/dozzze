import Link from "next/link";
import Image from "next/image";
import NavMenus from "./components/nav-menus";
import HeaderStickyProvider from "./components/header-sticky-provider";
import OffcanvasBtn from "../offcanvas/offcanvas-btn";

const LOGO_SRC = "/dozzze/logo.png";

type IProps = {
   style_2?: boolean;
};

export default function HeaderOne({style_2}: IProps) {
   return (
      <header className="tp-header-height">
         <div className="tp-header-area">

            <HeaderStickyProvider top_cls={`tp-header-bottom tp-header-sm-spacing ${style_2?'tp-header-bottom-2':''}`}>
               <div className="container">
                  <div className="tp-header-main-wrap p-relative">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-6">
                           <div className="tp-header-logo">
                              <Link href="/">
                                 <Image src={LOGO_SRC} alt="logo" width={96} height={96} />
                              </Link>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 d-none d-lg-block">
                           <div className="tp-main-menu">
                              {/* main menu */}
                              <NavMenus />
                              {/* main menu */}
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-2 col-6">
                           <div className="tp-header-action d-flex justify-content-end">
                              <div className="tp-header-lang d-none d-lg-block">
                                 <button>EN</button>
                                 <button>ES</button>
                              </div>
                              <div className="tp-header-3-menu-bar d-lg-none tp-header-menu-btn-black">
                                 <OffcanvasBtn/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </HeaderStickyProvider>
         </div>
      </header>
   )
}
