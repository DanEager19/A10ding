import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    usertag: {
        type: String
    },
    nickname: {
        type: String
    },
    meetingsattended: {
        type: Number
    }
});

export default mongoose.model('Member', MemberSchema);