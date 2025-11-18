import chatApi from "../../infrastructure/chatapi";

export const chatService = {
  sendMessage: async (userId, message) => {
    try {
      const response = await chatApi.post('/chat/', { 
        user_id: userId,
        request: message
      });
      // Retorna la respuesta que viene en { response: string }
      return response.data;
    } catch (error) {
      console.error('Error en chatService:', error);
      throw error;
    }
  }
};