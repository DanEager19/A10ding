import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { PrismaConnection } from "../prisma";

export const AttendanceHistory = {
    data: new SlashCommandBuilder()
        .setName('attendancehistory')
        .setDescription('List previously attended meetings.'),
    async execute(interaction: CommandInteraction) {
        const member = interaction.guild?.members.cache
            .find((member: { id: string; }) => member.id === interaction.user.id);
        
        const prismaClient = new PrismaConnection();
        
        const data = await prismaClient.listAttendance(`${member?.id}`);

        if (typeof(data) === 'string') { 
            await interaction.reply({
                content: data
            });
        }
        
        await prismaClient.close();
    } 
}