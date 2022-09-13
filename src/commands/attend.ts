import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { Mongoose } from "../mongoose";

export const Attend = {
    data: new SlashCommandBuilder()
        .setName('attend')
        .setDescription('Attend a meeting'),
    async execute(interaction: CommandInteraction) {
        const d = new Date();
        const member = interaction.guild?.members.cache
            .find((member: { id: string; }) => member.id === interaction.user.id);

        if (d.getDay() !== 3) {
            await interaction.reply({
                content: 'It\'s not the specified meeting day silly!',
                ephemeral: true
            });
        } else if (d.getHours() !== 18) {
            await interaction.reply({
                content: 'It\'s not the specified meeting time silly!',
                ephemeral: true
            });
        } else {
            const controller = new Mongoose();
            const usertag = `${member?.user.username}#${member?.user.discriminator}`;

            await controller.attendMeeting(`${member?.id}`);
            await interaction.reply({
                content: `${usertag} attended today\'s meeting!`,
            })
        }
    } 
}