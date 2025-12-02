import { apiPost } from "../../infrastructure/api";  // usa la api

export const predenunciaService = {
    sendPredenuncia: async (payload) => {
        try {
            const responsedenuncia = await apiPost(
                '/pre-complaint/register/predenuncia',
                payload
            );
            return responsedenuncia;
        } catch (error) {
            console.error('Error en predenunciaService:', error);
            throw error;
        }
    },
};

