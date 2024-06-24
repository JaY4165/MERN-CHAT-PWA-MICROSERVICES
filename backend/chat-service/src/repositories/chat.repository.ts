class ChatRepository {
    async createNewConversationRepo(userId: string, recipientId: string) {
        try {
            console.log(userId, recipientId);
            return { userId, recipientId };
        } catch (error) {
            console.log(error);
            throw new Error(
                'Error while creating new conversation between user and reciepient'
            );
        }
    }

    async readConversationRepo(userId: string, recipientId: string) {
        try {
            console.log(userId, recipientId);
            return { userId, recipientId };
        } catch (error) {
            console.log(error);
            throw new Error('Error while reading conversation');
        }
    }

    async deleteConversationRepo(userId: string, recipientId: string) {
        try {
            console.log(userId, recipientId);
            return { userId, recipientId };
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting conversation');
        }
    }

    async sendMessageRepo(message: string, userId: string, recipientId: string) {
        try {
            console.log(userId, recipientId, message);
        } catch (error) {
            console.log(error);
            throw new Error('Error while sending message');
        }
    }

    async deleteMessageRepo(messageId: string, userId: string, recipientId: string) {
        try {
            console.log(userId, recipientId, messageId);
        } catch (error) {
            console.log(error);
            throw new Error('Error while deleting message');
        }
    }

}

export default ChatRepository;
