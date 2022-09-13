import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const schema = new Schema({
    userid: Number,
    usertag: String,
    name: String,
    meetingsattended: Number,
    meetinghistory: [{ date: String }]
});
const Member = mongoose.model('Member', schema);

export class Mongoose {
    public constructor() {
          }
    
    public register = async (userid: string, usertag: string, name: string, email: string) => {
        let newMember = new Member({            
            userid: userid,
            usertag: usertag,
            name: name,
            email: email,
            meetingsattended: 0,
            meetinghistory: []
        });
        newMember.save((e: any) => {
            if (e) return e; 
        });
    }

    public attendMeeting = async (userid: string) => {
        Member.findOneAndUpdate({userid: userid}, (e: any, member: any) => {
            if (e) {
                return e;
            } else {
                return member;
            }
        })
        // const res = await this.prisma.member.findUnique({
        //     where: { userid: userid },
        //     select: { meetinghistory: true },
        // });
        // const d = new Date().toDateString();
        // if (typeof(res?.meetinghistory) !== 'undefined') {
        //     await this.prisma.member.update({
        //         where: {
        //             userid: userid,
        //         }, 
        //         data: {
        //             meetingsattended: {
        //                 increment: 1,
        //             }, 
        //             meetinghistory: {
        //                 set: [...res.meetinghistory, d]
        //             }
    
        //         }
        //     });
        // }
    }

    public listAttendance = async (userid: string) => {
        return Member.find({userid: userid}, (e: any, member: any) => {
            if (e) {
                return e;
            } else {
                return member;
            }
        })
    }
}