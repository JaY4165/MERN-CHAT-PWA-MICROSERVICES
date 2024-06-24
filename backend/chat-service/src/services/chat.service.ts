import ChatRepository from '../repositories/chat.repository';

class ChatService {
    repository: ChatRepository;

    constructor() {
        this.repository = new ChatRepository();
    }

    async createNewConversation(userId: string, recipientId: string) {
        try {
            const result = await this.repository.createNewConversationRepo(
                userId,
                recipientId
            );
            return result;
        } catch (error) {
            console.log(error);
            throw new Error(
                'Error while creating new conversation between user and reciepient'
            );
        }
    }

    async readConversation(userId: string, recipientId: string) {
        try {
            const result = await this.repository.readConversationRepo(userId, recipientId);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error while fetching conversations');
        }
    }

    async deleteConversation(userId: string, recipientId: string) {
        try {
            const result = await this.repository.deleteConversationRepo(userId, recipientId);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting conversation');
        }
    }

    async sendMessage(message: string, userId: string, recipientId: string) {
        try {
            const result = await this.repository.sendMessageRepo(message, userId, recipientId);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error while sending message');
        }
    }


    async deleteMessage(messageId: string, userId: string, recipientId: string) {
        try {
            const result = await this.repository.deleteMessageRepo(messageId, userId, recipientId);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting message');
        }
    }
}

export default ChatService;
