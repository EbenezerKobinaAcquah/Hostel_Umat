// services/SubmissionService.ts

import { Submission } from "components/Models/submissions";

const API_URL = 'https://portal.umat.edu.gh/subapi/api/Submission';

export const SubmissionService = {
    getUserSubmissions: async (): Promise<Submission[]> => {
        const response = await fetch(`${API_URL}/GetUserSubmissions`);
        if (!response.ok) {
            throw new Error('Failed to fetch submissions');
        }
        
        return response.json();
    }

    // getSubmissionById: async (id: number): Promise<Submission> => {
    //     const response = await fetch(`${API_URL}/submissions/${id}`);
    //     if (!response.ok) {
    //         throw new Error(`Failed to fetch submission with id ${id}`);
    //     }
    //     return response.json();
    // },

    // Add more methods for creating, updating, or deleting submissions as needed
};
