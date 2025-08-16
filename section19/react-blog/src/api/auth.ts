import axiosInstances from "./axios";
import { z } from 'zod';
import {updateEmailSchema} from "../schemas/auth";

type UpdateEmailRequest = z.infer<typeof updateEmailSchema>;

function updateEmail(requestData:UpdateEmailRequest) {
    const email: UpdateEmailRequest = updateEmailSchema.parse(requestData);

    return axiosInstances.patch(
        '/update-email',
        email
    )
}


export {
    updateEmail
}