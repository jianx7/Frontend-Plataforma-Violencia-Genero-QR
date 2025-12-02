import axiosClient from '../../infrastructure/http/axiosClient';

export const predenunciaService = {
    sendPredenuncia: async (payload) => {
        try {
            const responsedenuncia = await axiosClient.post(
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



{/*export async function sendPredenuncia(payload) {
  return await axiosClient.post('/pre-complaint/register/predenuncia', payload);
}*/}


