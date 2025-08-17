import axiosInstances from "./axios";
import {z} from 'zod';
import {updateEmailSchema} from "../schemas/auth";

type UpdateEmailRequest = z.infer<typeof updateEmailSchema>;

async function updateEmail(requestData:UpdateEmailRequest) {
    const email: UpdateEmailRequest = updateEmailSchema.parse(requestData);
    console.log('axiosInstances', axiosInstances);
    return axiosInstances.patch(
        '/update-email',
        {...email}
    );
}


export {
    updateEmail
}