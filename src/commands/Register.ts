import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const Attend = {
    data: new SlashCommandBuilder()
        .setName('registerattendance')
        .setDescription('Register for Attendance')
        .addStringOption((option) => option.setName('name').setDescription('Enter your full name'))
        .addStringOption((option) => option.setName('email').setDescription('Enter your email.')),
    async execute(interaction: CommandInteraction) {
        
    } 
}