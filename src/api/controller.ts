import mongoose from 'mongoose';
const Member = mongoose.model('Member');

export const attendMeeting = (usertag: string, nickname: string) => {
    Member.find({usertag: usertag}, (e: any, member: any) => {
        if (e) {
            return e;
        } else {

        }
    })
}

export const listAttendance = (usertag: string) => {
    return Member.find({usertag: usertag}, (e: any, member: any) => {
        if (e) {
            return e;
        } else {
            return member;
        }
    })
}