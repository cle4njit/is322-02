"use client";

import { Plus, Undo2 } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
    const { onOpen } = useModal();

    return (
        <div>
            <ActionTooltip
             side="right"
             align="center"
             label="Return to Search"
            >
                <button
                onClick={() => onOpen("createServer")}
                className="group flex items-center"
                >
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] 
                group-hover:rounded-[16px] transition-all overflow-hidden items-center 
                justify-center bg-background dark:bg-red-700 group-hover:bg-white-500">
                    <Undo2
                className="group-hover:text-white transition text-white-500"
                size={25}  
                />
                </div>
                </button>
            </ActionTooltip>
        </div>
    )
}