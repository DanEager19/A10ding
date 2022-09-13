import { SlashCommandBuilder } from "@discordjs/builders";
import { Mongoose } from "../mongoose";

export const Register = {
    data: new SlashCommandBuilder()
        .setName('registerattendance')
        .setDescription('Register for Attendance')
        .addStringOption((option) => option.setName('name').setDescription('Enter your full name').setRequired(true))
        .addStringOption((option) => option.setName('email').setDescription('Enter your email.').setRequired(true)),
    async execute(interaction: any) {
        const member = interaction.guild?.members.cache
            .find((member: { id: string; }) => member.id === interaction.user.id);

        const usertag = `${member?.user.username}#${member?.user.discriminator}`;

        const controller = new Mongoose();

        await controller.register(
            `${member?.id}`, 
            usertag, 
            interaction.options.getString('name'), 
            interaction.options.getString('email')
        );
        await interaction.reply({
            content: `${usertag} registered for attendance.`,
        })
    } 
}