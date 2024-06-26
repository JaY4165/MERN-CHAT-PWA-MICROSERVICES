import UserRepository from '../repositories/user.repository';

class UserService {
    repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    async createProfileService(userId: string) {
        try {
            return await this.repository.createProfile(userId);
        } catch (error) {
            throw new Error('Error while creating profile');
        }
    }

    async getProfileService(userId: string) {
        try {
            return await this.repository.getProfile(userId);
        } catch (error) {
            throw new Error('Error while fetching profile');
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async updateProfileService(userId: string, data: any) {
        try {
            return await this.repository.updateProfile(userId, data);
        } catch (error) {
            throw new Error('Error while updating profile');
        }
    }

    async getConversationsService(userId: string) {
        try {
            return await this.repository.getConversations(userId);
        } catch (error) {
            throw new Error('Error while fetching conversations');
        }
    }

    async getUniqueConversationService(userId: string, recipientId: string) {
        try {
            return await this.repository.getUniqueConversation(
                userId,
                recipientId
            );
        } catch (error) {
            throw new Error('Error while fetching conversation');
        }
    }
}

export default UserService;
