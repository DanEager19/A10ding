import mongoose from 'mongoose';

const d = new Date();

const Schema = mongoose.Schema;
const MemberSchema = new Schema({
    usertag: {
        type: String
    },
    nickname: {
        type: String
    },
    meetingsattended: {
        type: Number, 
        default: 0,
    },
    meetinghistory: {
        type: [{
            date: String,
            default: d,
        }]
    }
});

export default mongoose.model('Member', MemberSchema);