import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const Attend = {
    data: new SlashCommandBuilder()
        .setName('attend')
        .setDescription('Attend a meeting')
        .addStringOption((option) => option.setName('email').setDescription('Enter your email')),
    async execute(interaction: CommandInteraction) {
        
    } 
}