import mongoose from 'mongoose';
const Member = mongoose.model('Member');

export const registerAttendance = (userid: number, usertag: string, name: string, email: string) => {
    let newMember = new Member({
        userid: userid,
        usertag: usertag,
        name: name,
        email: email,
        meetingsattended: 0,
        meetinghistory: []
    });
    newMember.save((e: any, member: any) => {
        if (e) {
            return e;
        } else {
            return member
        }
    });
}

export const attendMeeting = (userid: number) => {
    Member.findOneAndUpdate({userid: userid}, (e: any, member: any) => {
        if (e) {
            return e;
        } else {
            return member;
        }
    })
}

export const listAttendance = (userid: number) => {
    return Member.find({userid: userid}, (e: any, member: any) => {
        if (e) {
            return e;
        } else {
            return member;
        }
    })
}