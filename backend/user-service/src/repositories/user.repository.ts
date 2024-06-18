import prisma from "../config/db.config";


class UserRepository {

    async createProfile(userId: string) {
        try {
            const profile = await prisma.profiles.create({
                data: {
                    user_id: userId,
                },
                select: {
                    id: true,
                    user_id: true
                }
            })
            console.log(profile)

            if (!profile) {
                throw new Error('Error while creating profile');
            }

            return profile
        } catch (error) {
            console.log(error)
            throw new Error('Error while creating profile');
        }
    }

    async getProfile(userId: string) {
        try {
            const profile = await prisma.profiles.findUnique({
                where: {
                    user_id: userId
                },
                select: {
                    id: true,
                    user_id: true,
                    bio: true,
                    profile_picture: true,
                    gender: true,
                    username: true,
                    created_at: true,
                    updated_at: true
                }
            })
            console.log(profile)

            if (!profile) {
                throw new Error('Error while fetching profile');
            }

            return profile

        } catch (error) {
            console.log(error)
            throw new Error('Error while fetching profile');
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async updateProfile(userId: string, data: any) {
        try {
            const profile = await prisma.profiles.update({
                where: {
                    user_id: userId,
                },
                data: {
                    bio: data.bio,
                    profile_picture: data.profile_picture,
                    gender: data.gender,
                    username: data.username,
                },
                select: {
                    user_id: true
                }
            })
            console.log(profile)

            if (!profile) {
                throw new Error('Error while updating profile');
            }

            return profile
        }
        catch (error) {
            console.log(error)
            throw new Error('Error while updating profile');
        }
    }

    async getConversations(userId: string) {
        try {
            return userId
        } catch (error) {
            console.log(error)
            throw new Error('Error while fetching conversations');
        }
    }

    async getUniqueConversation(userId: string, recipientId: string) {
        try {
            return { userId, recipientId }
        } catch (error) {
            console.log(error)
            throw new Error('Error while fetching conversation');
        }
    }
}

export default UserRepository;