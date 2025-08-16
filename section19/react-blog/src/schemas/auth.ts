import { z } from 'zod';


export const updateEmailSchema = z.object({
    email: z.string().regex(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), {
        message: "유효하지 않은 이메일 형식입니다." // 유효성 검사 실패 시 메시지
    })
});


