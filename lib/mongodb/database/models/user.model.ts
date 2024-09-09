import mongoose, { model, models, Schema } from "mongoose";

interface UserSchema {}

const UserSchema  = new Schema ({
    clerkId: { type:String, required: true , unique:true},
    email: { type:String, required: true , unique:true},
    username: { type:String, required: true , unique:true},
    firstname: { type:String, required: true , unique:true},
    lastname: { type:String, required: true , unique:true},
    photo: { type:String, required: true , unique:true},
    
});
const User = models?.User || model('User',UserSchema)

export default User;