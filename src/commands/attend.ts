import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const Attend = {
    data: new SlashCommandBuilder()
        .setName('attend')
        .setDescription('Attend a meeting')
        .addStringOption((option) => option.setName('email').setDescription('Enter your email')),
    async execute(interaction: CommandInteraction) {
        const d = new Date();
        const notDay = "It's not the specified meeting day silly!";
        const notHour = "It's not the specified meeting time silly!"
        const member = interaction.guild?.members.cache
            .find((member: { id: string; }) => member.id === interaction.user.id);
        member?.displayName;

        if (d.getDay() !== 3) {
            await interaction.reply({
                content: notDay,
                ephemeral: true
            });
        } else if (d.getHours() !== 18) {
            await interaction.reply({
                content: notHour,
                ephemeral: true
            });
        } else {
            
        }
    } 
}