import { PrismaClient } from '@prisma/client'

export class PrismaConnection {
    private prisma = new PrismaClient()

    public constructor() {
        async () => await this.prisma.$connect()
    }
    
    public register = async (userid: string, usertag: string, name: string, email: string) => {
        await this.prisma.member.create({
            data: {
                userid: userid,
                usertag: usertag,
                name: name,
                email: email,
                meetingsattended: 0,
                meetinghistory: []
            }
        });
    }

    public attendMeeting = async (userid: string) => {
        const res = await this.prisma.member.findUnique({
            where: { userid: userid },
            select: { meetinghistory: true },
        });
        const d = new Date().toDateString();
        if (typeof(res?.meetinghistory) !== 'undefined') {
            await this.prisma.member.update({
                where: {
                    userid: userid,
                }, 
                data: {
                    meetingsattended: {
                        increment: 1,
                    }, 
                    meetinghistory: {
                        set: [...res.meetinghistory, d]
                    }
    
                }
            });
        }
    }

    public listAttendance = async (userid: string) => {
        return await this.prisma.member.findUnique({
            where: {
                userid: userid,
            },
        });
    }

    public close = async () => {
        await this.prisma.$disconnect().catch(async (e: any) =>{
            console.log(`[x] - ${e}`);
            await this.prisma.$disconnect;
            process.exit(1);
        });
    }
}