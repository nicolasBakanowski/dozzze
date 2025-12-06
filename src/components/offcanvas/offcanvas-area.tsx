"use client";
import Link from "next/link";
import Image from "next/image";
import { CloseSvg } from "../svg";
import OffcanvasMenus from "./offcanvas-menus";

const LOGO_SRC = "/dozzze/logo.png";

type IProps = {
    open: boolean;
    onClose: () => void
};
export default function OffcanvasArea({ open, onClose }: IProps) {
    return (
        <>
            <div className={`tp-offcanvas-area ${open ? 'opened' : ''}`}>
                <div className="tp-offcanvas-wrapper">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image src={LOGO_SRC} alt="logo" width={150} height={40} style={{ width: "150px", height: "auto" }} />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button onClick={onClose} className="tp-offcanvas-close-btn">
                                <CloseSvg />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-menu d-lg-none">
                            <nav>
                                <OffcanvasMenus onNavigate={onClose} />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={onClose} className={`body-overlay ${open ? 'opened' : ''}`}/>
        </>
    )
}
