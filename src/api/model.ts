import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const MemberSchema = new Schema({
    userid: {
        type: Number
    },
    usertag: {
        type: String
    },
    name: {
        type: String
    },
    meetingsattended: {
        type: Number
    },
    meetinghistory: {
        type: [{
            date: String,
        }]
    }
});

export default mongoose.model('Member', MemberSchema);