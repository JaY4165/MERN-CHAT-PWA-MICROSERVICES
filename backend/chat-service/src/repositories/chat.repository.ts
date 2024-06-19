class ChatRepository {

    async createNewConversationRepo(userId: string, recipientId: string) {
        try {
            console.log(userId, recipientId);
            return { userId, recipientId };
        } catch (error) {
            console.log(error)
            throw new Error("Error while creating new conversation between user and reciepient")
        }
    }

    async readConversationRepo() {
    }

    async deleteConversationRepo() {

    }

}


export default ChatRepository;