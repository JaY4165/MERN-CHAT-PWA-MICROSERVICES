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
}

export default ChatService;
