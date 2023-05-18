import { ReactNode } from "react";
import IconClose from "./icons/IconClose";

type Props = {
    children: ReactNode;
}

export const Sidebar = ({ children }: Props) => {
    return (
        <section className="fixed left-0 top-0 bottom-0 text-white">
            <div className="flex h-screen transition-all duration-200">

                <div className="">
                    {children}
                </div>

                <div className="">
                    <IconClose width={24} height={24}/>
                </div>

            </div>
        </section>
    );
}