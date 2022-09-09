import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { listAttendance } from "../api/controller";

export const ListAttendance = {
    data: new SlashCommandBuilder()
        .setName('listattendance')
        .setDescription('List attendance'),
    async execute(interaction: CommandInteraction) {
        const member = interaction.guild?.members.cache
            .find((member: { id: string; }) => member.id === interaction.user.id);
        
        const data = listAttendance(`${member?.user.username}#${member?.user.discriminator}`);

        if (typeof(data) === 'string') { 
            await interaction.reply({
                content: data
            });
        }
    } 
}