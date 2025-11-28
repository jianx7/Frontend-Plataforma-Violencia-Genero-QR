import chatApi from "../../infrastructure/chatapi";

export const chatService = {
  sendMessage: async (userId, message, sessionId) => {
    try {
      const response = await chatApi.post('/chat/send', {
        user_id: userId,
        request: message,
        session_id: sessionId,
      });
      // Retorna la respuesta que viene en { response: string }
      return response.data;
    } catch (error) {
      console.error('Error en chatService:', error);
      throw error;
    }
  },

  getHistory: async (sessionId) => {
    try {
      const response = await chatApi.get(`chat/history/${sessionId}`);
      return response.data;
    }
    catch (error) {
      console.error('Error al obtener historial:', error);
      throw error;
    }
  },

  getCase: async (userId) => {
    try {
      const response = await chatApi.get(`casos/${userId}`);
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }
};
