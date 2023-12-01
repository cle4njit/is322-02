"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, Server } from "@prisma/client";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles
    role?: MemberRole;
};

export const ServerHeader = ({
    server,
    role,
}: ServerHeaderProps) => {
    return (
        <div>
            Server Header
        </div>
    )
}